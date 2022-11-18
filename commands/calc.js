module.exports = {
    name: 'calc',
    description: 'Calculates a math problem',
    category: 'Other',

    run: async (client, message, args, channel, tags, isMod, isOwner, settingsDir, channelName, username, prefix, send) => {
        const math = require('mathjs')

        const problem = message.replace(`${prefix}calc `, '');

        try {
            const answer = math.evaluate(problem)
            send(`The answer is ${answer}`)
        } catch {
            send('That is not a valid math problem!')
        }
    }
}