const client = require('../client.js');
const fs = require('fs');

client.on('message', (channel, tags, msg, self) => {
    if (tags['user-id'] !== '496329801' && tags['user-id'] !== '686336392') return; // Piny only :)

    if (msg.toLowerCase().startsWith('$pushup')) {
        if (tags['user-id'] !== '496329801') return; // Piny only :)
        const pushupFilePath = './settings/496329801/pushupcount.txt'
        const pushupCount = parseInt(fs.readFileSync(pushupFilePath, 'utf8'))

        fs.writeFileSync(pushupFilePath, `${pushupCount + 1}`)

        client.say(channel, `Piny has done ${pushupCount + 1} pushups!`)
    }

    if (msg.toLowerCase().startsWith('$layer')) {
        // Yes i just copy pasted this from above
        const pushupFilePath = './settings/496329801/layercount.txt'
        const pushupCount = parseInt(fs.readFileSync(pushupFilePath, 'utf8'))

        if (msg.includes('amount')) {
            return client.say(channel, `Layer count is currently ${pushupCount}.`)
        }

        fs.writeFileSync(pushupFilePath, `${pushupCount + 1}`)

        client.say(channel, `Layer count is now ${pushupCount + 1}!`)
    }
})