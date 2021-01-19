const http = require('http');
const fs = require('fs');
const { RSA_NO_PADDING } = require('constants');


const server = http.createServer((request, response) => {
    if (request.method === 'GET') {
        if (request.url === '/') {
            response.writeHead(301, { Location: '/dashboard.html' });
            response.end();
        }
        else {
            const filepath = './public' + request.url;
            fs.readFile(filepath, (err, data) => {
                if (err) {
                    response.writeHead(404);
                    fs.readFile('./public/404.html', (err, data) => {
                        if (!err) {
                            response.write(data);
                        }
                        response.end();
                    });
                }
                else {
                    response.writeHead(200);
                    response.write(data);
                    response.end();
                }
            });
        }
    }
});

server.listen(8020, () => {
    console.log('Listening on http://localhost:8020');
})