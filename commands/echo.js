module.exports = {
    name: 'echo',
    description: 'Echo a message',
    category: 'Testing',
    selfAllowed: true,

    /**
     * 
     * @param {*} client 
     * @param {string} message 
     * @param {string[]} args 
     * @param {string} channel
     * @param {boolean} isMod 
     * @param {boolean} isOwner 
     * @param {string} settingsDir 
     * @param {string} channelName 
     * @param {string} username 
     * @param {string} prefix
     */
    run: async (client, message, args, channel, tags, isMod, isOwner, settingsDir, channelName, username, prefix, send) => {
        // Just echo a message
        const loops = args.filter(a => a == '$send').length;
        if (loops > 5 + 1) return send('Thats too many loops!');

        const blockedWords = [
            // Debug
            ';{test_banned_word};',

            // Profanity / Inappropriate (eg. $echo i am racist)
            'racist',
            'nazi',

            // Mod commands (wont work anyway but useful to just have it say it ain't saying that)
            '/ban',
            '/timeout',
            '/unban',
            '/mod',
            '/unmod',
            '/poll'
        ]

        /**
         * @param {string} message 
         * @returns {string}
         */
        function filterChat(message) {
            // Loop through the blocked words
            for (let i = 0; i < blockedWords.length; i++) {
                // Check if the message includes the blocked word
                if (message.includes(blockedWords[i])) {
                    // If it does then replace it with a bunch of asterisks
                    message = message.replace(blockedWords[i], '{censored_message_word_component_thisshouldneverbeused}');
                }
            }

            // Return the message
            return message;
        }

        const outputMessage = args.join(' ')

        const filtered = filterChat(outputMessage.toLowerCase())

        if (filtered.includes('{censored_message_word_component_thisshouldneverbeused}')) {
            return send('I ain\'t saying that!')
        }
        
        send(`${outputMessage}`)
    }
}