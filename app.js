require('dotenv/config')
let tmi = require("tmi.js"),
    http = require('http');
    function randomInt(max) {
        return (Math.floor(Math.random() * max) /**+ 1*/);
    }
const fs = require('fs');
const config = require('./config.json');
const channels = fs.readFileSync('./channels.list').toString().split('\n');

require('./handler.js');

let server = http.createServer(); 
server.listen(80);