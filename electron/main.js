const { app, BrowserWindow, ipcMain, dialog } = require('electron');

let mainWindow = null;
let connection = null;

const actions = {};

const log = (m) => {
  console.log(m);
};

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 400, height: 700, resizable: false,
  });
  mainWindow.loadURL('http://localhost:3000');
  mainWindow.setMenu(null);
  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    if (connection) {
      connection.dispose();
      connection = null;
    }
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});

actions.POPUP = () => {
  const options = {
    type: 'info',
    title: 'Information',
    message: "This is an information dialog. Isn't it nice?",
    buttons: ['Yes', 'No']
  }
  dialog.showMessageBox(options, (index) => {
    console.log(index);
  });
};

actions.OPEN = () => {
  dialog.showOpenDialog({
    properties: ['openFile', 'openDirectory']
  }, (files) => {
    console.log(files);
  });
};

ipcMain.on('message', (event, arg) => {
  if (actions[arg.type]) actions[arg.type](arg);
});
