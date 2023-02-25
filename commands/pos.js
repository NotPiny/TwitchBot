module.exports = {
    name: 'positive',
    description: 'Sends a positive message :)',
    category: 'other',

    run: (client, message, args, channel, tags, isMod, isOwner, settingsDir, channelName, username, prefix, send) => {
        const messages = [
            'You are a great person and I love you',
            'Its ok not to be ok',
            'There are people who will love you no matter what',
            'Fun Fact: You\'re a pretty amazing human ❤️',
            'You are perfect just the way you are',
            'You are a beautiful person inside and out',
            'I love you ❤️'
        ]

        const randomMessage = messages[Math.floor(Math.random() * messages.length)]

        send(randomMessage)
    }
}