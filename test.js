var mqtt    = require('mqtt');
var client  = mqtt.connect('ws://localhost:8000');
 
client.on('connect', function () {
 client.subscribe("mqtt/demo");
  client.publish("mqtt/demo", "hello world!");
});
 
client.on('message', function (topic, message) {
  // message is Buffer 
  console.log(message.toString());
});
