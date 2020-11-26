var express = require('express'),
router = express.Router(), //defining the path to the resources
resources = require('./../resources/model');

router.route('/').get(function (req, res, next) {
res.send(resources.pi.actuators);
});

router.route('/leds').get(function (req, res, next) {
res.send(resources.pi.actuators.leds);
});

router.route('/leds/1').get(function (req, res, next) { 
res.send = resources.pi.actuators.leds[1];
});

router.route('/leds/2').get(function (req, res, next) { 
res.send = resources.pi.actuators.leds[2];
});

module.exports = router;