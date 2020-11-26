var express = require('express'),
cors = require('cors'),
  actuatorsRoutes = require('./../routes/actuators'),
  sensorRoutes = require('./../routes/sensors'),
  resources = require('./../resources/model');
  
  

var app = express();
app.use(cors());
app.use('/pi/actuators', actuatorsRoutes);
app.use('/pi/sensors', sensorRoutes);

app.get('/pi', function (req, res) {
  res.send('Welcome to the WoT-Pi Project!')
});

module.exports = app;

