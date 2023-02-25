module.exports = {
    name: 'socials',
    description: 'Shows the socials of the streamer',
    category: 'Other',

    channels: [
        'daalsavage786',
        'quimbyalert',
        'racreational'
    ],

    run: async (client, message, args, channel, tags, isMod, isOwner, settingsDir, channelName, username, prefix, send) => {
        if (channelName == 'daalsavage786') {
            // If the channel is DaalSavage786 then send the bitly link to his link-in-bio
            send(`bit.ly/DaalSAVAGE`)
        } else if (channelName == 'quimbyalert') {
            // If the channel is Quimby's just send the links to her socials
            send(`Twitter: https://twitter.com/QuimbyAlert | Discord: https://discord.gg/wsEDGbePFa`)
        } else if (channelName == 'racreational') {
            send(`Twitter: twitterDOTcom/Racreational | Discord: discordDOTgg/z48fafsn5m`)
        }
    }
}