const axios = require('axios');
const tmi = require('tmi.js');
require('dotenv').config();

module.exports = {
    name: 'followage',
    description: 'Check how long a user has been following the channel',
    category: 'Owner',

    /**
     * @param {tmi.Client} client - The client that is used to connect to Twitch
     * @param {string} message - The message that was sent
     * @param {string[]} args - The arguments of the command
     * @param {string} channel - The channel that the command was sent in
     * @param {any[]} tags - The tags of the user that sent the command
     * @param {boolean} isMod - Whether or not the user is a mod
     * @param {boolean} isOwner - Whether or not the user is the owner of the bot
     * @param {string} settingsDir - The directory of the channel's settings
     * @param {string} channelName - The name of the channel
     * @param {string} username - The name of the user that sent the command
     * @param {string} prefix - The prefix used to run the command
     * @param {function(string)} send - The function used to send a message to the channel
     * @returns {void}
    */
    run: async (client, message, args, channel, tags, isMod, isOwner, settingsDir, channelName, username, prefix, send) => {
        // Check if the bot (client) is a mod
        try {
            client.timeout(channelName, '', 1, 'Checking if the bot is a mod (Twitch doesnt just tell the bot if it is a mod or not)');
        } catch {
            return send('The bot needs to be a mod in the channel to use this command (twitch\'s rules not mine)');
        }

        // Get the user 
        let user = username.toLowerCase();

        if (args[0]) user = args[0].toLowerCase().replace('@', '');

        const request = await axios.get(`https://decapi.me/twitch/followage/${channelName}/${user}?token=${process.env.DecAPIToken}`)

        if (request.data === `${user} does not follow ${channelName}`) return send(`${user} is not following ${channelName}!`);

        send(`${user} has been following ${channelName} for ${request.data}`);
    }
}