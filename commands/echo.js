module.exports = {
    name: 'echo',
    description: 'Echo a message',
    category: 'Testing',

    run: async (client, message, args, channel, tags, isMod, isOwner, settingsDir, channelName, username, prefix, send) => {
        // Just echo a message
        send(`${args.join(' ')}`)
    }
}