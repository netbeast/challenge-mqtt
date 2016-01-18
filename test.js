var http = require('http')
var path = require('path')

var argv = require('minimist')(process.argv.slice(2))
var express = require('express')
var mosca = require('mosca')

var app = express()
var mqttServ = new mosca.Server({})

var mqtt = require('mqtt')



var cliente = mqtt.connect();

cliente.subscribe("mqtt/demo")
cliente.on("message", function(topic, message) {
	   console.log(message.toString());
	   })


setInterval(function () {
	    cliente.publish("mqtt/demo", "notificacion periodica mandada!")
	    }, 1000)





app.use(express.static('public'))
app.use('/mosca', express.static(path.dirname(require.resolve('mosca')) + '/public'))



var httpServ = http.createServer(app)


mqttServ.attachHttpServer(httpServ)

httpServ.listen(argv.port || 8000, function () {
  console.log('Example app listening at http://%s:%s',
	      httpServ.address().address,
	      httpServ.address().port)
		})
