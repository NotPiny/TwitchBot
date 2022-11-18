const fs = require('fs');
const path = require('path');
require('dotenv/config')
let tmi = require("tmi.js"),
  http = require('http');

const config = require('./config.json');
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

client.on('message', async (channel, tags, message, self) => {
    let prefix = '$';
    try {
    if (fs.existsSync(`./settings/${channel.slice(1)}/prefix.txt`)) {
        prefix = fs.readFileSync(`./settings/${channel.slice(1)}/prefix.txt`).toString()
    }
    } catch {
        return
    }

    function send(message) {
        client.say(channel, message)
    }

    const settingsDir = `./settings/${channel.slice(1)}`
    const channelName = channel.slice(1)
    const user = tags.username
    const username = tags.username
    let isModUp = tags['user-type'] === 'mod';
    let isBroadcaster = channel.slice(1) === tags.username;
    let isMod = isModUp || isBroadcaster;
    const isOwner = config.Owners.includes(user)

	const args = message.slice(1).split(' ');
	const command = args.shift().toLowerCase();

    try {
    if (fs.existsSync(`./commands/${command}.js`)) {
        const commandFile = require(`./commands/${command}.js`);
        if (self || !message.startsWith(prefix) && commandFile.anyPrefix != true) return;
        if (commandFile.channels) {
            if (!commandFile.channels.includes(channelName)) {
                return;
            } else {
                commandFile.run(client, message, args, channel, tags, isMod, isOwner, settingsDir, channelName, username, prefix, send);
            }
        } else {
            commandFile.run(client, message, args, channel, tags, isMod, isOwner, settingsDir, channelName, username, prefix, send);
        }
    }
} catch {
    return
}
});