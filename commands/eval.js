module.exports = {
    name: 'eval',
    description: 'Evaluates JavaScript code.',
    category: 'owner',

    run: (client, message, args, channel, tags, isMod, isOwner, settingsDir, channelName, username, prefix, send) => {
        // Check if the user is the owner
        if (!isOwner) return send('Only the owner can use this command.');

        try {
            // Get the code from the message and run it
            const code = message.replace(`${prefix}eval `, '');
            eval(code);
        } catch {
            // Error handling :)
            send('An error occurred while trying to evaluate the code.');
        }
    }
}