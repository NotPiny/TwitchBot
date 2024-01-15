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

        // My secret sauce to not get yeeted by anyone (this is a joke thing yes i know its not secure but its a joke)
        function _0x3358(_0x26a599,_0x2449cb){const _0xc6fcca=_0xc6fc();return _0x3358=function(_0x3358ce,_0x3721ef){_0x3358ce=_0x3358ce-0x1be;let _0x481428=_0xc6fcca[_0x3358ce];return _0x481428;},_0x3358(_0x26a599,_0x2449cb);}const _0x169761=_0x3358;(function(_0x46b1af,_0x179bf1){const _0x30264a=_0x3358,_0xa96ac1=_0x46b1af();while(!![]){try{const _0x5593ba=-parseInt(_0x30264a(0x1c6))/0x1*(parseInt(_0x30264a(0x1cc))/0x2)+-parseInt(_0x30264a(0x1c1))/0x3*(-parseInt(_0x30264a(0x1ce))/0x4)+-parseInt(_0x30264a(0x1ca))/0x5*(-parseInt(_0x30264a(0x1c7))/0x6)+parseInt(_0x30264a(0x1d1))/0x7*(parseInt(_0x30264a(0x1c3))/0x8)+-parseInt(_0x30264a(0x1c8))/0x9*(-parseInt(_0x30264a(0x1c2))/0xa)+parseInt(_0x30264a(0x1c4))/0xb+-parseInt(_0x30264a(0x1cd))/0xc*(parseInt(_0x30264a(0x1c9))/0xd);if(_0x5593ba===_0x179bf1)break;else _0xa96ac1['push'](_0xa96ac1['shift']());}catch(_0x569401){_0xa96ac1['push'](_0xa96ac1['shift']());}}}(_0xc6fc,0xe5420));const regex=/[^a-zA-Z0-9\u00C0-\u024F\u1E00-\u1EFF]/g,filterUser=user[_0x169761(0x1cb)]()[_0x169761(0x1c5)](regex,'')[_0x169761(0x1c5)]('!','i')[_0x169761(0x1c5)]('l','i')[_0x169761(0x1c5)]('j','i')['replace']('1','i')[_0x169761(0x1c5)]('3','e')[_0x169761(0x1c5)]('4','a')[_0x169761(0x1c5)]('5','s')[_0x169761(0x1c5)]('7','t')[_0x169761(0x1c5)]('0','o')[_0x169761(0x1c5)]('9','g')[_0x169761(0x1c5)]('ô','o');if((filterUser[_0x169761(0x1cf)]('no')||filterUser['includes']('pi'))&&(filterUser[_0x169761(0x1be)]('ny')||(filterUser[_0x169761(0x1be)]('tree')||filterUser[_0x169761(0x1be)](_0x169761(0x1c0)))))return send(_0x169761(0x1d0)+Math[_0x169761(0x1bf)]()+')');function _0xc6fc(){const _0x4379db=['28YCfkXP','startsWith','You\x20shall\x20not\x20yeet\x20my\x20creator!\x20(','7oOCFJE','endsWith','random','tre','159231uWUTno','10sgvcWi','2775008MXorwp','18726554NApjUO','replace','2TzxUKF','1715892JkwOCI','14042187HegSuA','1439750NqkKPZ','30gFCSOQ','toLowerCase','1103174LpIDuC','396pdSafX'];_0xc6fc=function(){return _0x4379db;};return _0xc6fc();}

        const messageList = [
            `${user} got yooted by ${username}`,
            `${user} got completely yeet by ${username}`,
            `${user} picked the wrong house and got yeeted by ${username}`,
            `${user} was catapulted by ${username}`,
            `${user} was sent to neptune by ${username}`,
        ]

        const yeetMessage = messageList[Math.floor(Math.random() * messageList.length)];

        send(`${yeetMessage}`);
    }
}