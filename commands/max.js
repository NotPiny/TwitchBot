module.exports = {
    name: 'max',
    description: 'Brings up info about mrmalouc',
    category: 'Info',
    anyPrefix: true,

    channels: [
        'quimbyalert',
    ],

    run: async (client, message, args, channel, tags, isMod, isOwner, settingsDir, channelName, username, prefix, send) => {
        send('Maxnaturlyk | he/him | straight | proud owner of the 1st, 2nd and 3rd, 4th, 5th, 6th, 7th and 8th barrel halls | The finder of the 8')
    }
}