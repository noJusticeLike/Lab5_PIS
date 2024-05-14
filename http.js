const http = require('http');
const url = require('url');

const server = http.createServer(function(req,res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    const reqUrl = url.parse(req.url, true);
    if (reqUrl.pathname === "/http.html") {
        let login = reqUrl.query.login;
        if (login === 'is-22fiot-22-078') {
            res.write("<h2 id='surname' class='response-field'>Surname: Slyva</h2>");
            res.write("<h2 id='name' class='response-field'>Name: Denys</h2>");
            res.write("<h2 id='course' class='response-field'>Course: 2</h2>");
            res.write("<h2 id='group' class='response-field'>Group: IS-22</h2>");
        }
        else {
            res.write('<h2>Invalid login<h2>');
        }
    }
    else {
        res.write('<h2>Not found<h2>');
    }
    res.end();
});

server.listen(3000, () => {
    console.log('Server has been started');
});