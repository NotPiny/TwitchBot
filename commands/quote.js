const fs = require('fs');

module.exports = {
    name: 'quote',
    description: 'Gets a quote',
    category: 'Other',

    run: async (client, message, args, channel, tags, isMod, isOwner, settingsDir, channelName, username, prefix, send) => {
        // Copy and paste messed up the formatting
        const channelId = tags['room-id'];
        try {
            if (message.trim() != `${prefix}quote`) {
                // If the user is looking for a specific quote by ID or using a modifier
                if (message.endsWith('-amount')) {
                    return send(fs.readdirSync(`./settings/${channelId}/quotes`).length.toString())
                }

                // Check if the quote folder exists
                if (fs.existsSync(`./settings/${channelId}`) && fs.existsSync(`./settings/${channelId}/quotes`)) {
                    // If it does and check if it has any quotes in it
                    const quoteAmount = fs.readdirSync(`./settings/${channelId}/quotes`).length;
                    
                    if (quoteAmount == 0) {
                        send(`No quotes were found for ${channelId}.`)
                    } else {
                        // If it does, get the quote
                        const lookupIdStr = args[0]
                        const quote = fs.readFileSync(`./settings/${channelId}/quotes/${lookupIdStr}.quote`).toString();
                        send(quote)
                    }
                } else {
                    // If it doesn't, tell the user
                    send(`We could not find any data for ${channelId}.`)
                }
            } else {
                // If the user is just looking for a random quote
                const quoteAmount = fs.readdirSync(`./settings/${channelId}/quotes`).length;
                const quoteID = Math.floor(Math.random() * quoteAmount);
                const quote = fs.readFileSync(`./settings/${channelId}/quotes/${quoteID}.quote`).toString();

                send(`Quote #${quoteID}: ${quote}`)
            }
        } catch {
            send('Something went wrong')
        }
    }
}