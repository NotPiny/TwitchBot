module.exports = {
    name: 'piny',
    description: 'Brings up info about piny (The person who coded the bot)',
    category: 'Info',
    anyPrefix: true,

    run: async (client, message, args, channel, tags, isMod, isOwner, settingsDir, channelName, username, prefix, send) => {
        // Just send info about Piny i guess (kinda obvious)
        send('Piny | He/They | Bi | piny.dev' + channelName == 'quimbyalert' ? ' | Owner of the great hall since 29/12/2022' : '')
    }
}