module.exports = {
    name: 'send',
    description: 'Send a message to a channel',
    category: 'Owner',

    run: async (client, message, args, channel, tags, isMod, isOwner, settingsDir, channelName, username, prefix, send) => {
        const channel = args[0]
        const text = message.replace(`${prefix}send ${channel}`, '')

        if (!isOwner) return;

        try {
            client.say(channel, text);
        } catch (err) {
            console.log(`Error sending message to ${channel}: ${err}`);
        }
    }
}