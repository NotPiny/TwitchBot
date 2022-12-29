const fs = require('fs');
require('dotenv/config')
let tmi = require("tmi.js"),
  http = require('http');

const config = require('./config.json');

if (!fs.existsSync('./channels.list')) {
    console.error('No channels.list file found. Please create one and add channels to it.');
    process.exit(1);
}

const channels = fs.readFileSync('./channels.list').toString().split('\n');
  
let options = {
    options: {
        debug: true
    },
    connection: {
        reconnect: true
    },
    identity: {
        username: config.client.name,
        password: process.env.TMI
    },
    channels: channels
};
  
let client = new tmi.client(options);
client.connect();

module.exports = client;