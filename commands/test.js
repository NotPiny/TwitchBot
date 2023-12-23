module.exports = {
    name: 'test',
    description: 'Runs the current test command :D',
    category: 'Testing',

    run: async (client, message, args, channel, tags, isMod, isOwner, settingsDir, channelName, username, prefix, send) => {
        // Send back channel id
        send(tags['room-id'])
    }
}