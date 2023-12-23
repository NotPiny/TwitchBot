module.exports = {
    name: 'channelinfo',
    description: 'Gets info about the channel',
    category: 'Owner',

    run: async (client, message, args, channel, tags, isMod, isOwner, settingsDir, channelName, username, prefix, send) => {
        if (isOwner) {
            const channelId = tags['room-id'];
            send(`Channel Raw: ${channel} | Channel Name: ${channelName} | Channel ID: ${channelId}`)
        } else {
            send('You do not have permission to use this command!')
        }
    }
}