const { execSync } = require('child_process');

module.exports = {
    name: 'restart',
    description: 'Restart the bot',
    category: 'Owner',

    run: async (client, message, args, channel, tags, isMod, isOwner, settingsDir, channelName, username, prefix, send) => {
        if (isOwner) {
            send('Restarting...')
            execSync('pm2 restart 0')
        } else {
            send('You do not have permission to use this command!')
        }
    }
}