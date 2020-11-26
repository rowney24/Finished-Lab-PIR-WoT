// Final version
var express = require('express'),
  router = express.Router(),
  resources = require('./../resources/model');

router.route('/').get(function (req, res, next)  //The main route 
{
    res.send(resources.pi.sensors);  //Accessing the sensors
});

router.route('/pir').get(function (req, res, next) {
  res.send(resources.pi.sensors.pir);
});


module.exports = router;
