module.exports = {
    name: 'poll',
    description: 'Creates a poll',
    category: 'Other',
    usage: 'poll <question>',

    run: async(client, message, args, channel, tags, isMod, isOwner, settingsDir, channelName, username, prefix, send) => {
        const question = message.split('?')[0]
        if (!question) return send(`Please provide a question!`)
        const options = message.split('?')[1].trim().split(' ')
        if (!options) return send(`Please provide options!`)

        const poll = await send(`Poll: ${question} | Options: ${options.join(', ')}`)
    }
}