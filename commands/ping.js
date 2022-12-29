module.exports = {
    name: 'ping',
    description: 'Pong!',
    category: 'Testing',

    run: async (client, message, args, channel, tags, isMod, isOwner, settingsDir, channelName, username, prefix, send) => {
        // Check if the bot is responding and the command handler is working properly by sending a message
        send('Pong!')
    }
}