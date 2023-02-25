module.exports = {
    name: 'max',
    description: 'Brings up info about mrmalouc',
    category: 'Info',
    anyPrefix: true,

    channels: [
        'quimbyalert',
    ],

    run: async (client, message, args, channel, tags, isMod, isOwner, settingsDir, channelName, username, prefix, send) => {
        send('Maxnaturlyk | he/him | straight | proud owner of the 3rd barrel hall since 24/1/23')
    }
}