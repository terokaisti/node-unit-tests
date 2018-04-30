const http = require('http'),
    url = require('url');
    sum = require('./db');

const server = http.createServer(async (req, res) => {
    if ( url.parse(req.url).pathname === '/sum' ) {
        const {a, b} = url.parse(req.url, true).query;
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });
        const result = await sum(a, b);
        res.end(''+result);
    }
    else if (url.parse(req.url).pathname === '/' ) {
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });
        res.end( '<h1>Hello World!</h1>' );
    }
    else {
        res.writeHead( 404, 'Not Found' );
        res.end( 'Not Found' );
    }
});


if (require.main === module) {
    server.listen(3000, function() {
        console.log( 'The server is up!' );
    });
} else {
    module.exports = server;
}