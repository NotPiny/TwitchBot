const axios = require('axios')

module.exports = {
    name: 'define',
    description: 'Defines a word',
    category: 'Other',

    run: async (client, message, args, channel, tags, isMod, isOwner, settingsDir, channelName, username, prefix, send) => {
        try {
            const word = await message.replace(`${prefix}define `, '')

            if (!word) return send(`Please provide a word to define!`);

            const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
            const response = await axios.get(url)
            const data = response.data[0]

            const definition = data.meanings[0].definitions[0].definition
            const example = data.meanings[0].definitions[0].example
        
            send(`Definition of ${word}: ${definition ? definition : 'No match found'} | Example: ${example ? example : 'No example provided'}`)
        } catch {
            send(`Something went wrong! Please try again later.`)
        }
    }
}