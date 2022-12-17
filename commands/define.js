const axios = require('axios')

module.exports = {
    name: 'define',
    description: 'Defines a word',
    category: 'Other',

    run: async (client, message, args, channel, tags, isMod, isOwner, settingsDir, channelName, username, prefix, send) => {
        try {
            // Get the word to define
            const word = await message.replace(`${prefix}define `, '')

            if (!word) return send(`Please provide a word to define!`);

            // Get the data from the API
            const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
            const response = await axios.get(url)
            const data = response.data[0]

            // Get the definition and example from the data
            const definition = data.meanings[0].definitions[0].definition
            const example = data.meanings[0].definitions[0].example
        
            // Send the definition and example
            send(`Definition of ${word}: ${definition ? definition : 'No match found'} | Example: ${example ? example : 'No example provided'}`)
        } catch {
            // Catch any errors
            send(`Something went wrong! Please try again later.`)
        }
    }
}