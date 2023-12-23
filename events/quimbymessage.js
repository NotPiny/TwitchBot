const client = require('../client.js');

client.on('message', (channel, tags, message, self) => {
    if (tags['room-id'] !== '686336392') return;

    const command = message.slice(1).toLowerCase().split(' ')[0];

    if (command == 'appear') {
        client.say(channel, `Welcome back, ${tags['username']}!`)
    }

    if (command == 'quimprov') {
        client.say(channel, `yes, AND`)
    }
})