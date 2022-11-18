module.exports = {
    name: 'opensource',
    description: 'Sends the link to the bot\'s source code.',
    category: 'info',

    run: (client, message, args, channel, tags, isMod, isOwner, settingsDir, channelName, username, prefix, send) => {
        send('You can check out the code behind DaalBot here: github.com/stars/NotPiny/lists/daalbot');
    }
}