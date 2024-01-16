const http = require('http');
const routes = require('./routes');

// this function will get execute for every
//incoming request
function rqListener(req, res) {}
const server = http.createServer(routes);

server.listen(3000);
