const fs = require('fs');
const path = require('path');

module.exports = {
    name: 'invite',
    description: 'Adds the bot to your channel',
    category: 'Other',

    run: (client, message, args, channel, tags, isMod, isOwner, settingsDir, channelName, username, prefix, send) => {
        // Grab the current channels and check if the user is already on the list
        const channels = fs.readFileSync(path.resolve('./channels.list')).toString().split('\n');
        if (channels.includes(username)) {
            return send('You are already on the channel list');
        }

        // If the user is not on the list then add them to the list and restart the bot
        console.log(`Adding ${username} to channel list...`);
        fs.appendFileSync(path.resolve('./channels.list'), `\n${username}`);

        // Tell the user that they have been added to the list and restart the bot
        send('Added you to your channel will be loaded when the bot restarts, (Switched to linux so this is manual for now)')

        // Create a new instance of the bot and end the current one
        // require('child_process').exec(`start "" "C:\\Users\\PinyLa\\Documents\\Code\\JS\\NODE\\Twitch\\DaalBot\\Batch/restart.bat"`);
        // setTimeout(() => { process.exit(); }, 4000);
    }
}