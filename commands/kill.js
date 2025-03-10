const fs = require('fs').promises;
const path = require('path');

module.exports = {
    name: 'kill',
    description: 'kills a user',
    category: 'Roleplay',

    run: async(client, message, args, channel, tags, isMod, isOwner, settingsDir, channelName, username, prefix, send) => {
        if (args.length == 0) {
            // No user specified
            send(`Usage: ${prefix}kill <user>`);
            return;
        }

        // Get the user
        let user = args[0]?.startsWith('@') ? args[0].slice(1) : args[0];

        // Regular expression to match non-Latin letters
        const regex = /[^a-zA-Z0-9]/g;

        /**
         * @type {string}
         */
        let filterUser = user.toLowerCase().replace(regex, '');

        const disallowedCharacters = /[𝖠𝖡𝖢𝖣𝖤𝖥𝖦𝖧𝖨𝖩𝖪𝖫𝖬𝖭𝖮𝖯𝖰𝖱𝖲𝖳𝖴𝖵𝖶𝖷𝖸𝖹𝖺𝖻𝖼𝖽𝖾𝖿𝗀𝗁𝗂𝗃𝗄𝗅𝗇𝗈𝗉𝗊𝗋𝗌𝗍𝗎𝗏𝗐𝗑𝗒𝗓𝟣𝟤𝟥𝟦𝟧𝟨𝟩𝟪𝟫𝟢𝗔𝗕𝗖𝗗𝗘𝗙𝗚𝗛𝗜𝗝𝗞𝗟𝗠𝗡𝗢𝗣𝗤𝗥𝗦𝗧𝗨𝗩𝗪𝗫𝗬𝗭𝗮𝗯𝗰𝗱𝗲𝗳𝗴𝗵𝗶𝗷𝗸𝗹𝗺𝗻𝗼𝗽𝗾𝗿𝘀𝘁𝘂𝘃𝘄𝘅𝘆𝘇𝟭𝟮𝟯𝟰𝟱𝟲𝟳𝟴𝟵𝟬þý:;ì¡!πïň|\[\]]/g;

        filterUser = filterUser
            .replace('!', 'i')
            .replace('l', 'i')
            .replace('1', 'i')
            .replace('3', 'e')
            .replace('4', 'a')
            .replace('5', 's')
            .replace('7', 't')
            .replace('0', 'o')
            .replace('9', 'g')
            .replace('8', 'b')
            .replace('z', 's')

        filterUser = filterUser.toLowerCase()

        if (
            (filterUser.startsWith('no') || (filterUser.includes('pi') && filterUser.startsWith('p')))
            && 
            (filterUser.endsWith('ny') || (filterUser.endsWith('tree') || filterUser.endsWith('tre')))
        ) return send(`[UNHELPFUL ERROR MESSAGE] (${Math.random()})`); // Math.random() is just to make sure that the message is different every time :)

        if (filterUser == '') return send(`[UNHELPFUL ERROR MESSAGE] (${Math.random()})`);

        if (user.match(disallowedCharacters)) return send(`[UNHELPFUL ERROR MESSAGE] (${Math.random()})`);

        const configJson = JSON.parse(await fs.readFile(path.resolve(`./config/kill.json`), 'utf8'));

        // Get a random death message
        let deathMessages = configJson.deathMessages;

        const deathMessage = deathMessages[Math.floor(Math.random() * deathMessages.length) + 1].replace('{user}', user).replace('{username}', username);

        send(deathMessage);
    }
}