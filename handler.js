const fs = require('fs');
const path = require('path');
const messages = require('./messages.json');
const client = require('./client.js');
const config = require('./config.json');

fs.readdirSync('./events').filter(file => file.endsWith('.js')).forEach(file => { require(`./events/${file}`); }) // Load events

client.on('message', async (channel, tags, message, self) => {
    // Set the prefix
    let prefix = '$';
    try {
    if (fs.existsSync(`./settings/${channel.slice(1)}/prefix.txt`)) {
        prefix = fs.readFileSync(`./settings/${channel.slice(1)}/prefix.txt`).toString()
    }
    } catch {
        return
    }

    // Create a function to send messages
    function send(message) {
        client.say(channel, message)
    }

    // Set variables :)
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

    if (fs.existsSync(`./commands/${command}.js`)) {
        fs.appendFileSync(`./command.log`, `${username} ran ${prefix}${command} with ${args ? args : 'nothing'} as the args in ${channelName} at ${new Date().toLocaleString()}\n`)

        const commandFile = require(`./commands/${command}.js`);

        // Check if everything is correct
        if ((self && config.ignoreSelf) || !message.startsWith(prefix) && commandFile.anyPrefix !== true) return;
        if (commandFile.channels) {
            if (!commandFile.channels.includes(channelName)) {
                send(messages.AccessDenied.ChannelLocked);
            } else {
                try {
                    commandFile.run(client, message, args, channel, tags, isMod, isOwner, settingsDir, channelName, username, prefix, send);
                } catch(err) {
                    send(messages.Error.Generic);
                    console.log(`Error running ${command} in ${channelName}: ${err}`);
                }
            }
        } else {
            try {
                commandFile.run(client, message, args, channel, tags, isMod, isOwner, settingsDir, channelName, username, prefix, send);
            } catch(err) {
                send(messages.Error.Generic);
                console.log(`Error running ${command} in ${channelName}: ${err}`);
            }
        }
    }
});