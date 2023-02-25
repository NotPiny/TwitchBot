module.exports = {
    name: 'malouc',
    description: 'Brings up info about mrmalouc',
    category: 'Info',
    anyPrefix: true,

    channels: [
        'quimbyalert',
    ],

    run: async (client, message, args, channel, tags, isMod, isOwner, settingsDir, channelName, username, prefix, send) => {
        // Quimbys chat made this joke and now i made it a command
        send('MrMalouc | He/Him | Straight but ally | Proud owner of The Worst Mob Farm In The World™ since 19/1/23')
    }
}