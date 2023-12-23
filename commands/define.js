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
    },
    {
        word: 'rickroll',
        definition: 'To trick someone into seeing never gonna give you up by rick astley by sending them a link that is supposedly relevant to the topic at hand',
        example: 'Bro i cant believe you just got rickrolled'
    },
    {
        word: 'chknnaget',
        definition: 'Like a chicken nugget but worse',
        example: 'I ate a chknnaget last night and it was disgusting!'
    },
    {
        word: 'racreational',
        definition: 'Recreational but dyslexic',
        example: 'I went racreational swimming last night'
    },
    {
        word: 'yartmapped',
        definition: 'Listen it isnt a real word but i thought of it and told nobody and it appeared in the dream',
        example: 'Get yartmapped nerd'
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