module.exports = {
    name: 'subcheck',
    description: 'Shows if you are subscribed to the channel',
    category: 'Other',

    run: async (client, message, args, channel, tags, isMod, isOwner, settingsDir, channelName, username, prefix, send) => {
        // Check if the user is a subscriber
        if (tags.subscriber) {
            // If they are, send a message
            send(`You are a sub!`)
        } else {
            // If they aren't, send a message (wow such descriptive comments copilot)
            send(`You are not a sub.`)
        }
    }
}