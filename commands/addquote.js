const config = require('../config.json');
const fs = require('fs');

module.exports = {
    name: 'addquote',
    description: 'Adds a quote to the quote list',
    category: 'Other',

    run: async (client, message, args, channel, tags, isMod, isOwner, settingsDir, channelName, username, prefix, send) => {
        if (isMod || config.Owners.includes(tags.username)) {
            // Get the quote
            const quote = message.replace(/addquote/, '').slice(2)
            try {
                // Check if the channel has a settings folder
                if (fs.existsSync(`./settings/${channelName}`)) {
                    // Check if the channel has a quotes folder
                    if (fs.existsSync(`./settings/${channelName}/quotes`)) {
                        // Get the amount of quotes
                        const oldQuoteAmount = fs.readdirSync(`./settings/${channelName}/quotes`).length;
                        
                        // Add 1 to the amount of quotes
                        const newQuoteAmount = oldQuoteAmount + 1

                        // Write the quote to the quotes folder
                        fs.writeFileSync(`./settings/${channelName}/quotes/${newQuoteAmount}.quote`, quote)
                        send(`Created quote '${quote}' with the id ${newQuoteAmount}`)
                    } else {
                        // If the channel doesn't have a quotes folder, create one
                        fs.mkdirSync(`./settings/${channelName}/quotes`)

                        // And then write the quote to the quotes folder
                        const oldQuoteAmount = 0;
                        const newQuoteAmount = oldQuoteAmount + 1
                        fs.writeFileSync(`./settings/${channelName}/quotes/${newQuoteAmount}.quote`, quote)
                        send(`Created quote '${quote}' with the id ${newQuoteAmount}`)
                    }
                } else {
                    // If the channel doesn't have a settings folder, create one and tell the user to run the command again
                    fs.mkdirSync(`./settings/${channelName}`);
                    send('Please run the command again we are setting up this channels settings at the moment.');
                }
            } catch {
                // Error handling stuff
                send('Something went wrong!')
                console.log('So uhh we have a issue here')
            }
        } else {
            // Oh and can't forget this
            send('You need to be a mod or a bot owner to run this command')
        }
    }
}