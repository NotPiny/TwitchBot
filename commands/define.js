const axios = require('axios')

const customWords = [
    {
        word: 'yeet',
        definition: 'To throw something very far, Most commonly used online',
        example: 'I yeeted the ball into the hoop from the other side of the court!' 
    },
    {
        word: 'rac',
        definition: 'A dyslexic chicken nugget',
        example: 'I ate a rac last night and it was delicious!'
    },
    {
        word: 'quimbyalert',
        definition: 'A warning that a quimby is nearby',
        example: 'Quimbyalert! Quimbyalert! Quimbyalert!'
    }
]

module.exports = {
    name: 'define',
    description: 'Defines a word',
    category: 'Other',

    run: async (client, message, args, channel, tags, isMod, isOwner, settingsDir, channelName, username, prefix, send) => {
        try {
            // Get the word to define
            const word = await message.replace(`${prefix}define `, '')

            if (!word) return send(`Please provide a word to define!`);

            if (customWords.find(w => w.word === word)) {
                const customWord = customWords.find(w => w.word === word)
                return send(`Definition of ${word}: ${customWord.definition} | Example: ${customWord.example}`)
            } else {
                // Get the data from the API
                const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
                const response = await axios.get(url)
                const data = response.data[0]

                // Get the definition and example from the data
                const definition = data.meanings[0].definitions[0].definition
                const example = data.meanings[0].definitions[0].example
        
                // Send the definition and example
                send(`Definition of ${word}: ${definition ? definition : 'No match found'} | Example: ${example ? example : 'No example provided'}`)
            }
        } catch {
            // Catch any errors
            send(`Something went wrong! Please try again later.`)
        }
    }
}