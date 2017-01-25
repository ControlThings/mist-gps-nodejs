var Mist = require('mist-api').MistNode;
var Gps = require('./gps-driver.js').Gps;
var model = require('./gps.json');

var mist = new Mist({ name: model.device });

// callback 
mist.write(function(epid, data) {
    console.log("mist write:", epid, data);
});

// callback 
mist.invoke('config', function(data, cb) {
    console.log("mist invoke:", data);
    cb({ here: "you", go: true });
});

mist.create(model);

process.on('exit', function() {
    console.log("exiting, doing cleanup.");
    mist.shutdown();
});

var c = 0;

function MistGps() {
    var sensor = new Gps();

    sensor.on('update', function (data) {
        mist.update('lon', data.lon);
        mist.update('lat', data.lat);
        mist.update('accuracy', data.accuracy);
        mist.update('counter', c++);
    });
}

module.exports = MistGps;

