'use strict';

const { app, BrowserWindow } = require('electron')

//require('electron-reload')(__dirname);

function createWindow () {
  // Create the browser window.
  let win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      experimentalFeatures: true, //enables the ability to use web serial features.  
      nodeIntegration: true
    }
  })

  // and load the index.html of the app.
  win.loadFile('index.html')
  //win.loadUrl(`file://${__dirname}/index.html`);
}
console.log("testing this out")
app.whenReady().then(createWindow)