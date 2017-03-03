var Hapi = require('hapi');

// Create a server with a host and port
var server = new Hapi.Server();
server.connection({ 
    host: '0.0.0.0', 
    port: 8000
});

// Add the route
server.route({
    method: 'GET',
    path:'/', 
    handler: function (request, reply) {
       reply('hello hapi!');
    }
});

// Start the server
server.start(function(err) {

    if (err) {
        throw err;
    }
    console.log('Server running at:', server.info.uri);
});
