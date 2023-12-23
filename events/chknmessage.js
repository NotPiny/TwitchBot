const client = require('../client.js')

client.on('message', (channel, tags, message, self) => {
    if (tags['room-id'] === '161940700') {
        const anyPrefixCommand = message.slice(1).toLowerCase().split(' ')[0]
        if (anyPrefixCommand === 'appear') {
            client.say(channel, `Welcome back, ${tags['username']}!`)
        } else if (anyPrefixCommand === 'disappear') {
            client.say(channel, `Goodbye, ${tags['username']}!`)
        }
    }
})