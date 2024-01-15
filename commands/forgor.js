const axios = require('axios');
const tmi = require('tmi.js');
require('dotenv').config();

module.exports = {
    name: 'followage',
    description: 'Check how long a user has been following the channel',
    category: 'Owner',
    selfAllowed: true,

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
        const messages = [
            '{user} forgor to sacrifice their soul to the almighty daalbot ...WAIT NO they forgor their lunch money',
            '{user} forgor their lunch money',
            '{user} forgor to pay their taxes',
            '{user} forgor to breathe',
            '{user} forgor to water their plants',
            '{user} forgor to feed their kids',
            '{user} forgor to eat their water',
            '{user} forgor to drink their food',
            '{user} forgor to carry name tags',
            '{user} forgor to bring their homework',
            '{user} forgor to drink the juice in skittles',
        ]

        const outputMessage = messages[Math.floor(Math.random() * messages.length)].replace('{user}', args[0] || username);

        send(outputMessage);
    }
}