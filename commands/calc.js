module.exports = {
    name: 'calc',
    description: 'Calculates a math problem',
    category: 'Other',

    run: async (client, message, args, channel, tags, isMod, isOwner, settingsDir, channelName, username, prefix, send) => {
        // Import mathjs
        const math = require('mathjs')

        // Get the problem
        const problem = message.replace(`${prefix}calc `, '');

        try {
            // Calculate the problem
            const answer = math.evaluate(problem)
            send(`The answer is ${answer}`)
        } catch {
            // If the problem is invalid, send an error message
            send('That is not a valid math problem!')
        }
    }
}