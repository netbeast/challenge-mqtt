var mqtt = require('mqtt')



var cliente = mqtt.connect();

cliente.subscribe("mqtt/demo")
cliente.on("message", function(topic, message) {
	   console.log(message.toString());
	   })


setInterval(function () {
	    cliente.publish("mqtt/demo", "notificacion periodica mandada!")
	    }, 1000)

