module.exports = {
    name: 'poll',
    description: 'Creates a poll',
    category: 'Other',
    usage: 'poll <question>',

    run: (client, message, args, channel, tags, isMod, isOwner, settingsDir, channelName, username, prefix, send) => {
        // Get the question and options from the message
        const question = `${message.split('?')[0].replace(`${prefix}poll `, '')}`
        if (!question) return send(`Please provide a question!`)
        const options = message.split('?')[1].trim().split(' ')
        if (!options) return send(`Please provide options!`)

        // let optionsString = '';

        // for (let i = 0; i < options.length; i++) {
        //     optionsString += `${i + 1}: ${options[i]}${i == options.length - 1 ? '' : ', '}`
        // }

        // Send the poll
        send(`Poll: ${question} | Options: ${options.join(', ')}`)
    }
}