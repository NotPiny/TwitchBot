const fs = require('fs').promises;
const path = require('path');
module.exports = {
    name: 'test',
    description: 'Runs the current test command :D',
    category: 'Testing',

    run: async (client, message, args, channel, tags, isMod, isOwner, settingsDir, channelName, username, prefix, send) => {
        if (!isOwner) return send('Only the owner can use this command.');
        const targetChannel = args[0] || channel;

        const currentLiveChannels = await fs.readFile(path.resolve('../Discord/db/socialalert/twitch.detected'), 'utf-8');
        const currentLiveChannelsArray = currentLiveChannels.split('\n');

        return send(`is ${targetChannel} live? ${currentLiveChannelsArray.includes(targetChannel) ? 'Yes' : 'No'}`);
    }
}