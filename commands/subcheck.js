module.exports = {
    name: 'subcheck',
    description: 'Shows if you are subscribed to the channel',
    category: 'Other',

    run: async (client, message, args, channel, tags, isMod, isOwner, settingsDir, channelName, username, prefix, send) => {
        if (tags.subscriber) {
            send(`You are a sub!`)
        } else {
            send(`You are not a sub.`)
        }
    }
}