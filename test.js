var mqtt    = require('mqtt');
var client  = mqtt.connect('ws://localhost:8000');

client.subscribe("mqtt/demo");
client.publish("mqtt/demo", "Test");

client.on('message', function (topic, message) {
  console.log(message.toString());
});
