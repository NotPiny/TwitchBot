function randomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

module.exports = {
    name: 'vibecheck',
    description: 'Checks your vibe',
    category: 'Other',

    run: async (client, message, args, channel, tags, isMod, isOwner, settingsDir, channelName, username, prefix, send) => {
        let limit = parseInt(args)
        const vibe = randomInt(limit)
        if (message.replace(/[ ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz<>.-]/g, '') == `${prefix}vibecheck`) {
            send(`Invalid Syntax! the syntax is "${prefix}vibecheck <limit>"`)
            return
        }
        if (message.endsWith('--settings')) {
            send(`Options: limit (NUMBER)`)
        } else {
            if (message.endsWith('-qube')) {
                if (channelName === 'quimbyalert') {
                send(`The qube has a ${vibe + 10}/${limit} vibe`)
                } else {
                    send(`This option is not allowed on ${channelName}'s channel!`)
                }
            } else {
                send(`You have a ${vibe}/${limit} vibe`)
            }
        }
    }
}