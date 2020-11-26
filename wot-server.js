var httpServer = require('./servers/http'),
    resources = require('./resources/model');

    var server = httpServer.listen(resources.pi.port, function(){
        console.info('The server is starting on port %s', resources.pi.port);
    })

 var ledsPlugin = require('./plugins/ledsPlugin'),
 pirPlugin = require('./plugins/pirPlugin');
 pirPlugin.start({'simulate': true, 'frequency': 2000});