module.exports = {
    name: 'send',
    description: 'Send a message to a channel',
    category: 'Owner',

    run: async (client, message, args, channel, tags, isMod, isOwner, settingsDir, channelName, username, prefix, send) => {
        // Get the arguments
        const targetChannel = args[0]
        const text = message.replace(`${prefix}send ${targetChannel}`, '')

        // Check if the user is the owner
        if (!isOwner) return;

        // Send the message
        try {
            client.say(targetChannel, text);
        } catch (err) {
            // Catch any errors (could be caused by the channel having follower only mode on)
            console.log(`Error sending message to ${targetChannel}: ${err}`);
        }
    }
}