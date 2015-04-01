var Hapi = require('hapi');

// Create a server with a host and port
var server = new Hapi.Server();
server.connection({ 
    host: 'localhost', 
    port: 8080
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
server.start();