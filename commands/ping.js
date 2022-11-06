module.exports = {
    name: 'ping',
    description: 'Pong!',
    category: 'Testing',

    run: async (client, message, args, channel, tags, isMod, isOwner, settingsDir, channelName, username, prefix, send) => {
        send('Pong!')
    }
}