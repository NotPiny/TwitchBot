const client = require('../client.js');
const fs = require('fs').promises;
const path = require('path');

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

// Ok this isnt message stuff but it's still quimby so....
setInterval(async() => {
    // 30 minutes
    const currentLiveChannels = await fs.readFile(path.resolve('../Discord/db/socialalert/twitch.detected'), 'utf-8');
    const currentLiveChannelsArray = currentLiveChannels.split('\n');

    if (!currentLiveChannelsArray.includes('686336392')) return;

    client.say('#quimbyalert', 'Sooo quimby its been 30 minutes.... you should probably drink some water');
}, 30 * 60 * 1000)