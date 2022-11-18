const config = require('../config.json');
const fs = require('fs');

module.exports = {
    name: 'addquote',
    description: 'Adds a quote to the quote list',
    category: 'Other',

    run: async (client, message, args, channel, tags, isMod, isOwner, settingsDir, channelName, username, prefix, send) => {
        if (isMod || config.Owners.includes(tags.username)) {
            const quote = message.replace(/addquote/, '').slice(2)
            try {
            if (fs.existsSync(`./settings/${channelName}`)) {
                if (fs.existsSync(`./settings/${channelName}/quotes`)) {
                    const oldQuoteAmount = fs.readdirSync(`./settings/${channelName}/quotes`).length;
                    const newQuoteAmount = oldQuoteAmount + 1
                    fs.writeFileSync(`./settings/${channelName}/quotes/${newQuoteAmount}.quote`, quote)
                    send(`Created quote '${quote}' with the id ${newQuoteAmount}`)
                } else {
                    fs.mkdirSync(`./settings/${channelName}/quotes`)
                    const oldQuoteAmount = 0;
                    const newQuoteAmount = oldQuoteAmount + 1
                    fs.writeFileSync(`./settings/${channelName}/quotes/${newQuoteAmount}.quote`, quote)
                    send(`Created quote '${quote}' with the id ${newQuoteAmount}`)
                }
            } else {
                fs.mkdirSync(`./settings/${channelName}`);
                send('Please run the command again we are setting up this channels settings at the moment.');
            }
        } catch {
            send('Something went wrong!')
            console.log('So uhh we have a issue here')
        }
        } else {
            send('You need to be a mod or a bot owner to run this command')
        }
    }
}