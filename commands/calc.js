module.exports = {
    name: 'calc',
    description: 'Calculates a math problem',
    category: 'Other',

    run: async (client, message, args, channel, tags, isMod, isOwner, settingsDir, channelName, username, prefix, send) => {
        // Import mathjs
        const math = require('mathjs')

        // Get the problem
        const problem = message.replace(`${prefix}calc `, '');

        /**
         * @type {string}
         */
        let outputProblem = problem;

        // Replace x with *
        outputProblem = outputProblem.replace(/x/g, '*');

        // Replace ÷ with / (idk why you would use ÷ but whatever)
        outputProblem = outputProblem.replace(/÷/g, '/');

        // Now to deal with exponentiontals ¹, ² and ³
        // Replace ¹ with nothing lmao it doesn't do anything
        outputProblem = outputProblem.replace(/¹/g, '');

        // Replace ² with ^2
        outputProblem = outputProblem.replace(/²/g, '^2');

        // Replace ³ with ^3
        outputProblem = outputProblem.replace(/³/g, '^3');

        try {
            // Calculate the problem
            const answer = math.evaluate(outputProblem)
            send(`The answer is ${answer}`)
        } catch {
            // If the problem is invalid, send an error message
            send(`That is not a valid math problem! (${outputProblem})`)
        }
    }
}