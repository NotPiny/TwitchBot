// Just a simple server that listens on port 80
let http = require('http');

// Load the handler
require('./handler.js');

// Load the events
require('./events/redeem.js');

let server = http.createServer(); 
server.listen(1024);

// Clear logs
const fs = require('fs');

fs.writeFileSync('/home/piny/.pm2/logs/Twitch-out.log', '');
fs.writeFileSync('/home/piny/.pm2/logs/Twitch-error.log', '');