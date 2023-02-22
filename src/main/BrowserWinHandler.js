/* eslint-disable */
import { EventEmitter } from 'events'
import { BrowserWindow, BrowserView, app, session, Notification, ipcMain, ipcRenderer,shell,dialog } from 'electron'
import { autoUpdater } from "electron-updater"
import path from 'path';
import url from 'url'

const electron = require('electron')
const DEV_SERVER_URL = process.env.DEV_SERVER_URL
const isProduction = process.env.NODE_ENV === 'production'
const isDev = process.env.NODE_ENV === 'development'
process.chdir(app.getPath('userData'))

export default class BrowserWinHandler {
  /**
   * @param [options] {object} - browser window options
   * @param [allowRecreate] {boolean}
   */
  constructor(options, allowRecreate = true) {
    this._eventEmitter = new EventEmitter()
    this.allowRecreate = allowRecreate
    this.options = options

    this.browserWindow = null
    this.downloadprogress = ''
    
    this._createInstance()
    
  }




  _createInstance() {

    // This method will be called when Electron has finished
    // initialization and is ready to create browser windows.
    // Some APIs can only be used after this event occurs.
    
    if (app.isReady()){
      
      this._create()
     
     
    } 
    else {
      app.once('ready', () => {
        
        this._create()
       
      
      })
    }

    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (!this.allowRecreate) return
    app.on('activate', () => this._recreate())
    
    app.on('ready', () => {
      if (!isDev) autoUpdater.checkForUpdatesAndNotify()

    })
    autoUpdater.channel = 'latest'
    autoUpdater.allowDowngrade = false
    autoUpdater.autoDownload = false
    autoUpdater.autoInstallOnAppQuit = true
    // app.commandLine.appendSwitch('disable-http2');
    // autoUpdater.requestHeaders = {'Cache-Control' : 'no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0'};

    // autoUpdater.on('update-downloaded', () => {
    //   dialog.showMessageBox({
    //     message: 'update Downloaded !!'
    //   })
    // })
    
    // autoUpdater.on('checking-for-update', () => {
    //   dialog.showMessageBox({
    //     message: 'CHECKING FOR UPDATES !!'
    //   })
    // })
    
    autoUpdater.on("update-available", (_event, releaseNotes, releaseName) => {
      const dialogOpts = {
        type: 'info',
        buttons: ['Ok'],
        title: 'Application Update',
        message: process.platform === 'win32' ? releaseNotes : releaseName,
        detail: 'A new version is being downloaded.'
      }
      
      dialog.showMessageBox(dialogOpts, (response) => {
        
      });
      autoUpdater.downloadUpdate()
    })
    autoUpdater.on('download-progress', (progressObj) => {
      let log_message = 'Download speed: ' + progressObj.bytesPerSecond
      log_message = log_message + ' - Downloaded ' + progressObj.percent + '%'
      log_message = log_message + ' (' + progressObj.transferred + '/' + progressObj.total + ')'
      // dialog.showMessageBox({message:log_message})
      this.browserWindow.webContents.send('download_progress', log_message);
    })
    autoUpdater.on("update-downloaded", (_event, releaseNotes, releaseName) => {
      dialog.showMessageBox({message:'download complete message'})
    });
    // autoUpdater.on('update-available', () => {
    //   dialog.showMessageBox({
    //     message: ' update-available !!'
    //   })
    // })
    // autoUpdater.on('update-not-available', function () {
    //   dialog.showMessageBox({
    //     message:'update not available'
    //   })  });
    
    autoUpdater.on('error', (error) => {
      dialog.showMessageBox({message:error})
    })
  
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
        width: 1400,
        height: 1000,
        // icon: iconUrl
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
    
    // const view = new BrowserView()
    // this.browserWindow.setBrowserView(view)
    // view.setBounds({ x: 200, y: 200, width: 300, height: 300 })
    // view.webContents.loadURL('https://electronjs.org')

    // electron.powerMonitor.on('suspend', () => {
    //   console.log('The system is going to sleep')
    // })
    // electron.powerMonitor.on('shutdown', () => {
    //   console.log('The system is going to sleep')
    // })

    ipcMain.on('notify', (e, message) => {
      // console.log(message);
      // new Notification({ title: message.displayName, body: message.content }).show();
      const options = {
        title: message.displayName,
        // subtitle: 'Subtitle of the Notification',
        body: message.content,
        // silent: false,
        // icon: path.join(__dirname, '../renderer/assets/images/chat.png'),
        // icon:message.,
        // hasReply: true,
        // timeoutType: 'never',
        // replyPlaceholder: 'Reply Here',
        // sound: path.join(__dirname, '../assets/sound.mp3'),
        // urgency: 'critical',
        // closeButtonText: 'Close Button',
        // actions: [{
        //   type: 'button',
        //   text: 'Show Button'
        // }]
      }
      new Notification(options).show()
    })

    this.browserWindow.webContents.setWindowOpenHandler(({ url }) => {
      shell.openExternal(url);
      return { action: 'deny' };
    });

    this.browserWindow.on('closed', () => {
      // Dereference the window object
      // this.addDataToRealm("", "deleteData");
      

      session.defaultSession.clearStorageData(null, (error) => {

      });
      this.browserWindow = null


    })
    this._eventEmitter.emit('created')
  }

  _recreate() {
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
  onCreated(callback) {
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
  created() {
    return new Promise(resolve => {
      this.onCreated(() => resolve(this.browserWindow))
    })
  }


}
