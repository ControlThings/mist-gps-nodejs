var util = require("util");
var EventEmitter = require("events").EventEmitter;

function Gps() {
    var self = this; 

    this.deviceData = {};

    function update() {
        self.emit('update', { lat: 60.4042 + Math.sin(Date.now()/10000)*0.0002, lon: 25.6814 + Math.cos(Date.now()/10000)*0.0005, accuracy: 10 });
    }

    setInterval(update, 5000);
    process.nextTick(update);
}

util.inherits(Gps, EventEmitter);

Gps.prototype.write = function(feature, value) {
    this.deviceData[feature] = value;
    this.emit('change', feature, value);
};

module.exports = {
    Gps: Gps };
