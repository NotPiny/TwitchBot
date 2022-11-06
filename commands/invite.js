const fs = require('fs');
const path = require('path');

module.exports = {
    name: 'invite',
    description: 'Adds the bot to your channel',
    category: 'Other',

    run: (client, message, args, channel, tags, isMod, isOwner, settingsDir, channelName, username, prefix, send) => {
        const channels = fs.readFileSync(path.resolve('./channels.list')).toString().split('\n');
        if (channels.includes(username)) {
            return send('You are already on the channel list');
        }
        console.log(`Adding ${username} to channel list...`);
        fs.appendFileSync(path.resolve('./channels.list'), `\n${username}`);
        send('Added you to the channel list we will push the update in 5 seconds')
        require('child_process').exec(`start "" "C:\\Users\\PinyLa\\Documents\\Code\\JS\\NODE\\Twitch\\DaalBot\\Batch/restart.bat"`);
        setTimeout(() => {
            process.exit();
        }, 4000);
    }
}