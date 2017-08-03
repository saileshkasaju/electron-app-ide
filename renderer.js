const loader = require('monaco-loader')

loader().then(monaco => {
  let editor = monaco.editor.create(document.querySelector
  ('#container'), {
    language: 'javascript',
    theme: 'vs-dark',
    automaticLayout: true
  })
})
