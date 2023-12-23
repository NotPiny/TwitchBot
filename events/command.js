const client = require('../client.js');
const fs = require('fs');

client.on('message', (channel, tags, msg, self) => {
    if (tags['user-id'] !== '496329801') return; // Piny only :)

    if (msg.toLowerCase().startsWith('$pushup')) {
        const pushupFilePath = './settings/496329801/pushupcount.txt'
        const pushupCount = parseInt(fs.readFileSync(pushupFilePath, 'utf8'))

        fs.writeFileSync(pushupFilePath, `${pushupCount + 1}`)

        client.say(channel, `Piny has done ${pushupCount + 1} pushups!`)
    }
})