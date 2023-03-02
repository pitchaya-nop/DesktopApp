const ICONS_DIR = "build/icons/";

const windowsOS = {
  win: {
    icon: ICONS_DIR + "win-icon.ico",
    publisherName: ["michal"],
    // requestedExecutionLevel:'highestAvailable',
    target: "nsis",
    publish: ["github"],
    verifyUpdateCodeSignature: false,
  },
  nsis: {
    differentialPackage: true,
    oneClick: true,
    perMachine: false,
    // allowToChangeInstallationDirectory: true,
    deleteAppDataOnUninstall: true,
    allowElevation: true,
  },
};

const linuxOS = {
  linux: {
    icon: ICONS_DIR,
    target: "deb",
  },
};

const macOS = {
  mac: {
    target: "dmg",
    icon: ICONS_DIR + "con.icns",
    hardenedRuntime: true,
    entitlements: "build_helper/entitlements.mac.plist",
    entitlementsInherit: "build_helper/entitlements.mac.plist",
    gatekeeperAssess: false,
  },
  dmg: {
    contents: [
      {
        x: 410,
        y: 150,
        type: "link",
        path: "/Applications",
      },
      {
        x: 130,
        y: 150,
        type: "file",
      },
    ],
  },
};

module.exports = {
  productName: "Goochat",
  appId: "com.example.app",
  artifactName: "goochatsetup-${version}.${ext}",
  afterSign: "scripts/notarize.js",

  publish: [
    {
      provider: "github",
      owner: "pitchaya-nop",
      repo: "DesktopApp",
      releaseType: "release",
    },
  ],
  directories: {
    output: "build",
  },
  // default files: https://www.electron.build/configuration/contents
  files: [
    "package.json",
    {
      from: "dist/main/",
      to: "dist/main/",
    },
    {
      from: "dist/renderer",
      to: "dist/renderer/",
    },
  ],
  extraResources: [
    {
      from: "src/extraResources/",
      to: "",
    },
  ],
  ...windowsOS,
  ...linuxOS,
  ...macOS,
};
