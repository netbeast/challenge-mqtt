var mqtt    = require('mqtt');
var client  = mqtt.connect('mqtt://test.mosquitto.org');

client.subscribe("mqtt/demo");
client.publish("mqtt/demo", "Test");

client.on('message', function (topic, message) {
  console.log(message.toString());
});

client.end();