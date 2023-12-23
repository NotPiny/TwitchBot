require('dotenv').config();
const { Webhook } = require('discord-webhook-node');

module.exports = {
    name: 'debug',
    description: 'Sends logs to webhook',
    category: 'Debug',

    run: (client, message, args, channel, tags, isMod, isOwner, settingsDir, channelName, username, prefix, send, channelId, userId) => {
        if (isOwner) {
            const hook = new Webhook(process.env.DebugWebhook);

            hook.send(`Requested by ${username} (${userId}) in ${channelName} (${channelId})`)
            hook.sendFile('/home/piny/.pm2/logs/Twitch-out.log')
            hook.sendFile('/home/piny/.pm2/logs/Twitch-error.log')
        } else {
            send('You do not have permission to use this command!')
        }
    }
}