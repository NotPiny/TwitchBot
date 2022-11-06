function randomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

module.exports = {
    name: 'permit',
    description: 'Sees if you have a permit to do something',
    category: 'Custom',

    channels: [
        'quimbyalert'
    ],

    run: async (client, message, args, channel, tags, isMod, isOwner, settingsDir, channelName, username, prefix, send) => {
        const user = args[0]
        const permit = message.replace(user, '').replace(command, '').slice(1)
        let success = randomInt(3)
        if (success == 1) {
            send(`${user} was approved for ${permit}`)
        } else {
            send(`${user} was not approved for a permit to ${permit}`)
        }
    }
}