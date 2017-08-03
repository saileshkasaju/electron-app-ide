const { ipcRenderer } = require('electron')
const loader = require('monaco-loader')

loader().then(monaco => {
  let editor = monaco.editor.create(document.querySelector
  ('#container'), {
    language: 'javascript',
    theme: 'vs-dark',
    automaticLayout: true
  })

  ipcRenderer.on('open-file', (e, url) => {
    console.log(url);
  })
})
