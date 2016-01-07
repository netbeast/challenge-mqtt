var http = require('http')
var path = require('path')

var argv = require('minimist')(process.argv.slice(2))
var express = require('express')
var mosca = require('mosca')

var app = express()
var mqttServ = new mosca.Server({})

app.use(express.static('public'))
app.use('/mosca', express.static(path.dirname(require.resolve('mosca')) + '/public'))

var httpServ = http.createServer(app)
mqttServ.attachHttpServer(httpServ)

httpServ.listen(argv.port || 8000, function () {
  console.log('Example app listening at http://%s:%s',
  httpServ.address().address,
  httpServ.address().port)
})
