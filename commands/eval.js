module.exports = {
    name: 'eval',
    description: 'Evaluates JavaScript code.',
    category: 'owner',

    run: (client, message, args, channel, tags, isMod, isOwner, settingsDir, channelName, username, prefix, send) => {
        if (!isOwner) return send('Only the owner can use this command.');

        try {
            const code = message.replace(`${prefix}eval `, '');
            eval(code);
        } catch {
            send('An error occurred while trying to evaluate the code.');
        }
    }
}