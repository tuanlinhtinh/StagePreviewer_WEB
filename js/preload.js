const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
    onDragDrop: (callback) => {
        ipcRenderer.on('drag-drop-files-reply', (event, filePaths) => callback(filePaths));
    },
    sendDragDrop: (files) => {
        ipcRenderer.send('drag-drop-files', files);
    }
});