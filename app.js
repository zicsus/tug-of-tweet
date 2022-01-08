const { app, BrowserWindow } = require('electron');

function createWindow () 
{
    const win = new BrowserWindow({
        width: 1280,
        height: 720,
        useContentSize: true,
        webPreferences: {
            nodeIntegration: true
        },
        menu: false
    });

    win.removeMenu();
    win.loadFile(`src/index.html`);
    win.webContents.openDevTools();
}

app.whenReady().then(createWindow);