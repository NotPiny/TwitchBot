module.exports = {
    name: 'country',
    description: 'Brings up info about country',
    category: 'Info',
    anyPrefix: true,

    channels: [
        'quimbyalert',
    ],

    run: async (client, message, args, channel, tags, isMod, isOwner, settingsDir, channelName, username, prefix, send) => {
        // Quimbys chat made this joke and now i made it a command
        send('Jaintry | He/him | Owner of the trading hall since 18/1/23')
    }
}