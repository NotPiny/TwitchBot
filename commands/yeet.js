const tmi = require('tmi.js');

module.exports = {
    name: 'yeet',
    description: 'Yeets a user so they get yoten',
    category: 'Other',

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
        const user = args[0] ? args[0].replace('@', '') : 'Unknown User';
        // Regular expression to match non-Latin letters
        const regex = /[^a-zA-Z0-9\u00C0-\u024F\u1E00-\u1EFF]/g;

        const filterUser = user.toLowerCase().replace(regex, '')
            .replace('!', 'i')
            .replace('l', 'i')
            .replace('j', 'i')
            .replace('1', 'i')
            .replace('3', 'e')
            .replace('4', 'a')
            .replace('5', 's')
            .replace('7', 't')
            .replace('0', 'o')
            .replace('9', 'g');

        const messageList = [
            `${user} got yooted by ${username}`,
            `${user} got completely yeet by ${username}`,
            `${user} picked the wrong house and got yeeted by ${username}`
        ]

        const yeetMessage = messageList[Math.floor(Math.random() * messageList.length) + 1];

        if ((filterUser.startsWith('no') || filterUser.includes('pi')) && (filterUser.endsWith('ny') || (filterUser.endsWith('tree') || filterUser.endsWith('tre')))) return send(`You shall not yeet my creator! (${Math.random()})`); // Math.random() is just to make sure that the message is different every time :)

        send(`${yeetMessage}`);
    }
}