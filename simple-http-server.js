const http = require('http');

let handleIncomingServerRequest = function(request, response)
{
    response.writeHead(200,
        {
            'Content-Type':'text/plain'
        }
    );

    response.end('Hello LSDG\n');
};

let httpServer = http.createServer(handleIncomingServerRequest);

httpServer.listen(8080,'127.0.0.1');

console.log('Server running at http://127.0.0.1:8080/');