// Just a simple server that listens on port 80
let http = require('http');

// Load the handler
require('./handler.js');

let server = http.createServer(); 
server.listen(80);