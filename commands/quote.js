const fs = require('fs');

module.exports = {
    name: 'quote',
    description: 'Gets a quote',
    category: 'Other',

    run: async (client, message, args, channel, tags, isMod, isOwner, settingsDir, channelName, username, prefix, send) => {
        // Copy and paste messed up the formatting
        try {
            if (message.trim() != `${prefix}quote`) {
                // If the user is looking for a specific quote by ID or using a modifier
                if (message.endsWith('-amount')) {
                    return send(fs.readdirSync(`./settings/${channelName}/quotes`).length.toString())
                }

                // Check if the quote folder exists
                if (fs.existsSync(`./settings/${channelName}`) && fs.existsSync(`./settings/${channelName}/quotes`)) {
                    // If it does and check if it has any quotes in it
                    const quoteAmount = fs.readdirSync(`./settings/${channelName}/quotes`).length;
                    
                    if (quoteAmount == 0) {
                        send(`No quotes were found for ${channelName}.`)
                    } else {
                        // If it does, get the quote
                        const lookupIdStr = args[0]
                        const quote = fs.readFileSync(`./settings/${channelName}/quotes/${lookupIdStr}.quote`).toString();
                        send(quote)
                    }
                } else {
                    // If it doesn't, tell the user
                    send(`We could not find any data for ${channelName}.`)
                }
            } else {
                // If the user is just looking for a random quote
                const quoteAmount = fs.readdirSync(`./settings/${channelName}/quotes`).length;
                const quoteID = Math.floor(Math.random() * quoteAmount);
                const quote = fs.readFileSync(`./settings/${channelName}/quotes/${quoteID}.quote`).toString();

                send(`Quote #${quoteID}: ${quote}`)
            }
        } catch {
            send('Something went wrong')
        }
    }
}