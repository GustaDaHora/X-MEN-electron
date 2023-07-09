const { app, BrowserWindow, Menu, shell } = require('electron')

const createWindow = () => {
    const win = new BrowserWindow({
        fullscreen: true
    })

    win.loadFile('index.html');

    const mainMenu = Menu.buildFromTemplate(menuTemplate)
    Menu.setApplicationMenu(mainMenu)
}

app.whenReady().then(() => {
    createWindow()

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})

const menuTemplate = [
    {
        label: 'Creditos',
        submenu: [
            {
                label: 'Github',
                click() {
                    shell.openExternal('https://github.com/GustaDaHora')
                }
            },
            {
                label: 'Linkedin',
                click() {
                    shell.openExternal('https://www.linkedin.com/in/gustavo-dahora')
                }
            }
        ]
    }
]

if (process.env.NODE_ENV !== 'production') {
    menuTemplate.push({
        label: 'Dev',
        submenu: [
            {
                label: 'Debug',
                accelerator: process.platform === 'win32' ? "Ctrl+Shift+I" : 'Cmd+Alt+I',
                click(item, focusedwindow) {
                    focusedwindow.toggleDevTools();
                }
            },
            {
                label: 'Fullscreen',
                accelerator: 'F11',
                click(item, focusedwindow) {
                    focusedwindow.setFullScreen(!focusedwindow.isFullScreen());
                }
            },
            {
                label: 'Reload',
                accelerator: 'CmdOrCtrl+R',
                click(item, focusedwindow) {
                    if (focusedwindow) focusedwindow.reload();
                }
            },
            {
                label: 'Force Reload',
                accelerator: 'CmdOrCtrl+Shift+R',
                click(item, focusedwindow) {
                    if (focusedwindow) focusedwindow.webContents.reloadIgnoringCache();
                }
            }
        ]
    });
}
