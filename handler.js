const fs = require('fs');
const path = require('path');
const messages = require('./messages.json');
const commands = require('./commands.json');
const client = require('./client.js');
const config = require('./config.json');

fs.readdirSync('./events').filter(file => file.endsWith('.js')).forEach(file => { require(`./events/${file}`); }) // Load events

client.on('message', async (channel, tags, message, self) => {
    const channelId = tags['room-id']
    const userId = tags['user-id']

    // Set the prefix
    let prefix = '$';

    try {
    if (fs.existsSync(`./settings/${channelId}/prefix.txt`)) {
        prefix = fs.readFileSync(`./settings/${channelId}/prefix.txt`).toString()
    }
    } catch {
        return
    }

    // Create a function to send messages
    function send(message) {
        client.say(channel, message)
    }

    // Set variables :)
    const settingsDir = `./settings/${channelId}`
    const channelName = channel.slice(1)
    const user = tags.username
    const username = tags.username
    let isModUp = tags['user-type'] === 'mod';
    let isBroadcaster = channel.slice(1) === tags.username;
    let isMod = isModUp || isBroadcaster;
    const isOwner = config.Owners.includes(user);

	const args = message.slice(1).split(' ');
	const command = args.shift().toLowerCase();

    if (fs.existsSync(`./commands/${command}.js`)) {
        fs.appendFileSync(`./command.log`, `${username} ran ${prefix}${command} with ${args ? args : 'nothing'} as the args in ${channelName} at ${new Date().toLocaleString()}\n`)

        const commandFile = require(`./commands/${command}.js`);

        // Check if everything is correct
        if ((self && config.ignoreSelf) || !message.startsWith(prefix) && commandFile.anyPrefix !== true) return;

        // Add delay if command is from itself to prevent rate limiting
        if (self && !config.ignoreSelf) {
            await new Promise(r => setTimeout(r, 2 * 1000));
        }

        // commands.filter(c => c.name === command)[0].permissions.forEach(permission => {
        //     const perm = permission.toLowerCase();

        //     if (perm === 'mod') {
        //         if (!isMod) return send(messages.AccessDenied.NotModerator);
        //     } else if (perm === 'owner') {
        //         if (!isOwner) return send(messages.AccessDenied.NotOwner);
        //     } else if (perm === 'broadcaster') {
        //         if (!isBroadcaster) return send(messages.AccessDenied.NotBroadcaster);
        //     } else if (perm === 'sub') {
        //         if (!tags.subscriber) return send(messages.AccessDenied.NotSubscriber);
        //     }
        // })

        if (commandFile.channels) {
            if (!commandFile.channels.includes(channelName)) {
                send(messages.AccessDenied.ChannelLocked);
            } else {
                try {
                    commandFile.run(client, message, args, channel, tags, isMod, isOwner, settingsDir, channelName, username, prefix, send, channelId, userId);
                } catch(err) {
                    send(messages.Error.Generic);
                    console.error(`Error running ${command} in ${channelName}: ${err}`);
                }
            }
        } else {
            try {
                commandFile.run(client, message, args, channel, tags, isMod, isOwner, settingsDir, channelName, username, prefix, send);
            } catch(err) {
                send(messages.Error.Generic + `${Math.floor(Math.random() * 1000)}`);
                console.error(`Error running ${command} in ${channelName}: ${err}`);
            }
        }
    } /** else {
        try {
            const fileData = fs.readFileSync(path.resolve(`./settings/${tags['room-id']}/customcommands/commands.json`), 'utf8');
            console.log('fileData:', fileData); // Debugging output
            const commands = JSON.parse(fileData);
            
            console.log('commands:', commands); // Debugging output
            
            if (commands.find(c => c.name === command)) {
                const commandData = commands.filter(c => c.name === command)[0];
                console.log('commandData:', commandData); // Debugging output
                send('Pls dear god just work already');
            } else {
                console.log('Command not found');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    } */
});