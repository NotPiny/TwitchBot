module.exports = {
    name: 'quote',
    description: 'Gets a quote',
    category: 'Other',

    run: async (client, message, args, channel, tags, isMod, isOwner, settingsDir, channelName, username, prefix, send) => {
        // Copy and paste messed up the formatting
        try {
                        if (message.endsWith('-amount')) {
                            return send(fs.readdirSync(`./settings/${channelName}/quotes`).length.toString())
                        }
                        if (fs.existsSync(`./settings/${channelName}`) && fs.existsSync(`./settings/${channelName}/quotes`)) {
                            const quoteAmount = fs.readdirSync(`./settings/${channelName}/quotes`).length;
                            if (quoteAmount == 0) {
                                send(`No quotes were found for ${channelName}.`)
                            } else {
                                    const lookupIdStr = args[0]
                                    console.log(lookupIdStr)
                                    const quote = fs.readFileSync(`./settings/${channelName}/quotes/${lookupIdStr}.quote`).toString();
                                    console.log(quote)
                                    send(quote)
                            }
                        } else {
                            send(`We could not find any data for ${channelName}.`)
                        }
                    } catch {
                        send('Something went wrong')
                    }
    }
}