function randomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

module.exports = {
    name: 'vibecheck',
    description: 'Checks your vibe',
    category: 'Other',

    run: async (client, message, args, channel, tags, isMod, isOwner, settingsDir, channelName, username, prefix, send) => {
        // Get the data from the message and generate the ✨ vibe ✨
        let limit = parseInt(args)
        const vibe = randomInt(limit)

        if (message.endsWith('--settings')) { // If the message ends with --settings, send the settings
            send(`Options: limit (NUMBER)`)
        } else {
            // Check if any custom modifiers are used
            if (message.endsWith('-qube')) {
                // Check the channel is correct
                if (channelName === 'quimbyalert') {
                    // Check if the vibe is over the limit
                    if (vibe + 10 > limit) {
                        // If it is send a extra ✨ vibe ✨ message (I know i could fix the issue but this is more fun)
                        send(`The qube has such good ✨ vibes ✨ that it broke the vibecheck! It has a ${vibe + 10}/${limit} vibe`)
                    } else {
                        // If not then just send a normal message
                        send(`The qube has a ${vibe + 10}/${limit} vibe`)
                    }
                } else {
                    // If the channel is not correct then send a message saying that the command is not allowed
                    send(`This option is not allowed on ${channelName}'s channel!`)
                }
            } else {
                // If no custom modifiers are used then just send a normal message
                send(`You have a ${vibe}/${limit} vibe`)
            }
        }
    }
}