/* eslint-disable */
import { EventEmitter } from 'events'
import { BrowserWindow, app, session, Notification, ipcMain, shell } from 'electron'


const DEV_SERVER_URL = process.env.DEV_SERVER_URL
const isProduction = process.env.NODE_ENV === 'production'
const isDev = process.env.NODE_ENV === 'development'
process.chdir(app.getPath('userData'))


export default class BrowserWinHandler {
  /**
   * @param [options] {object} - browser window options
   * @param [allowRecreate] {boolean}
   */
  constructor (options, allowRecreate = true) {
    this._eventEmitter = new EventEmitter()
    this.allowRecreate = allowRecreate
    this.options = options
    this.browserWindow = null
    this._createInstance()
  }
  



  _createInstance () {

    // This method will be called when Electron has finished
    // initialization and is ready to create browser windows.
    // Some APIs can only be used after this event occurs.
    if (app.isReady()) this._create() 
    else {
      app.once('ready', () => {

        this._create()
      })
    }

    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (!this.allowRecreate) return
    app.on('activate', () => this._recreate())
  }
  // showNotification() {
  //   // new Notification({ title: NOTIFICATION_TITLE, body: NOTIFICATION_BODY }).show()
  //   ipcMain.on('notify', (e, message) => {
  //     new Notification({ title: "Notification", body: message }).show();
  //   })
  // }
  
  _create() {
    this.browserWindow = new BrowserWindow(
      { 
        ...this.options,
        webPreferences: {
          ...this.options.webPreferences,
          webSecurity: isProduction, // disable on dev to allow loading local resources
          nodeIntegration: true, // allow loading modules via the require () function
          contextIsolation: false, // https://github.com/electron/electron/issues/18037#issuecomment-806320028
          devTools: true
        },
        width: 1200,
        height: 800
        // titleBarStyle: 'hiddenInset',
        // titleBarOverlay: true
        // titleBarOverlay: {
        //   symbolColor: 'red',
        //   color: 'blue',
        //   height: '15px'
        // }

        // fullscreen: true
      }
    )
    ipcMain.on('notify', (e, message) => {
      new Notification({ title: message.displayName, body: message.content }).show();
    })

    this.browserWindow.webContents.setWindowOpenHandler(({ url }) => {
      // config.fileProtocol is my custom file protocol
      // if (url.startsWith(config.fileProtocol)) {
      //   return { action: 'allow' };
      // }
      // open url in a browser and prevent default
      shell.openExternal(url);
      return { action: 'deny' };
    });

    // ipcMain.on('newtab', (e, data) => {
    //   e.preventDefault()
    //   shell.openExternal("http://www.google.com")
    // })
    // this.browserWindow.webContents.setWindowOpenHandler(({ url }) => {
    //   return {
    //     action: 'allow',
    //     overrideBrowserWindowOptions: {
    //       frame: false,
    //       fullscreenable: false,
    //       backgroundColor: 'black',
    //       webPreferences: {
    //         preload: 'my-child-window-preload-script.js'
    //       }
    //     }
    //   }
    // })

    // this.browserWindow.setMenu(null)
    // this.browserWindow.setWindowButtonVisibility(true)
    // this.browserWindow.webcontents.on("did-finish-load",()=>{
    //   dialog.showOpenDialog();
    // })

    this.browserWindow.on('closed', () => {
      // Dereference the window object
      // this.addDataToRealm("", "deleteData");

      session.defaultSession.clearStorageData(null, (error) => {

      });
      this.browserWindow = null


    })
    this._eventEmitter.emit('created')
  }

  _recreate () {

    if (this.browserWindow === null) this._create()

  }

  /**
   * @callback onReadyCallback
   * @param {BrowserWindow}
   */

  /**
   *
   * @param callback {onReadyCallback}
   */
  onCreated (callback) {
    if (this.browserWindow !== null) return callback(this.browserWindow);
    this._eventEmitter.once('created', () => {
      callback(this.browserWindow)
    })
  }

  async loadPage(pagePath) {
    if (!this.browserWindow) return Promise.reject(new Error('The page could not be loaded before win \'created\' event'))
    const serverUrl = isDev ? DEV_SERVER_URL : 'app://./index.html'
    const fullPath = serverUrl + '#' + pagePath;
    await this.browserWindow.loadURL(fullPath)
  }
  
  // noti() {
  //   ipcMain.on('notification-show', function (event, arg) {
  //     // tray.setImage(__dirname + "/images/favicon-notification.ico");
  //     var notification = new VcpNotification(arg.title, arg.text);
  //     notification.show();
  //   });
  // }
  /**
   *
   * @returns {Promise<BrowserWindow>}
   */
  created () {
    return new Promise(resolve => {
      this.onCreated(() => resolve(this.browserWindow))
    })
  }


}
