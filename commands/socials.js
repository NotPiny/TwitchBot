module.exports = {
    name: 'socials',
    description: 'Shows the socials of the streamer',
    category: 'Other',

    channels: [
        'daalsavage786',
        'quimbyalert'
    ],

    run: async (client, message, args, channel, tags, isMod, isOwner, settingsDir, channelName, username, prefix, send) => {
        if (channelName == 'daalsavage786') {
            send(`bit.ly/DaalSAVAGE`)
        } else if (channelName == 'quimbyalert') {
            send(`Twitter: https://twitter.com/QuimbyAlert | Discord: https://discord.gg/wsEDGbePFa`)
        }
    }
}