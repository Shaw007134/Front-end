const express = require('express')
const ReactSSR = require('react-dom/server')
const serverEntry = require('../dist/server-entry').default
const path = require('path')
const fs = require('fs')
// require不会去读export default的内容，而是整个东西

const template = fs.readFileSync(
  path.join(__dirname, '../dist/index.html'),
  'utf8'
)
const app = express()
app.use('/public',express.static(path.join(__dirname,'../dist')))

app.get('*', function(req, res) {
  const appString = ReactSSR.renderToString(serverEntry)
  template.replace('<app></app>', appString)
  res.send(template.replace('<app></app>', appString))
})

app.listen(4000, function() {
  console.log('server is listening on 4000')
})
