function randomInt(max) {
    let num = Math.floor(Math.random() * (max + 1))

    // if (max < 0) {
    //     // Max is negative so turn max into a positive number and then make num negative
    //     max = max * -1
        
    //     num = `-${Math.floor(Math.random() * (max + 1))}`
    // }

    return num;
}

module.exports = {
    name: 'vibecheck',
    description: 'Checks your vibe',
    category: 'Other',
    selfAllowed: true,

    run: async (client, message, args, channel, tags, isMod, isOwner, settingsDir, channelName, username, prefix, send) => {
        // Get the data from the message and generate the ✨ vibe ✨

        // if (username == 'duhkles') {
        //     return send('Oh no you dont.');
        // }

        let limit = parseInt(args)
        let vibe = randomInt(limit)

        console.log(`Vibecheck: ${vibe}/${limit}`)

        if (message.endsWith('--settings')) { // If the message ends with --settings, send the settings
            send(`Options: limit (NUMBER)`)
        } else {
            // Check if any custom modifiers are used
            if (message.toLowerCase().endsWith('qube')) {
                // Check the channel is correct
                if (channelName === 'quimbyalert') {
                    // Check if the vibe is over the limit
                    limit = 100
                    vibe = randomInt(limit) + 10
                    
                    if (message.includes('-b')) {
                        vibe = vibe + 10
                    }
                    
                    if (vibe > limit) {
                        // If it is send a extra ✨ vibe ✨ message (I know i could fix the issue but this is more fun)

                        // Create an array of messages
                        const messages = [
                            `The qube has such good ✨ vibes ✨ that it broke the vibecheck! It has a ${vibe}/${limit} vibe`,
                            `The qube was so ✨ vibey ✨ that it broke the vibecheck! It has a ${vibe}/${limit} vibe`,
                            `The qube had such a ✨ vibey vibe ✨ that it broke the vibecheck! It has a ${vibe}/${limit} vibe`,
                            `The qube had such insane ✨ vibes ✨ that the vibecheck was unable to handle it! It has a ${vibe}/${limit} vibe`,
                            `The qube had such intense ✨ vibes ✨ that the vibecheck was unable to process the vibes correctly! It has a ${vibe}/${limit} vibe`,
                            `Wow! The qube has such a ✨ vibey vibe ✨ that the vibecheck was unable to handle it! It has a ${vibe}/${limit} vibe`,
                        ];

                        // Get a random message from the array and send it
                        const vibeMessage = messages[Math.floor(Math.random() * messages.length)];
                        send(vibeMessage);
                    } else {
                        // If not then just send a normal message
                        send(`The qube has a ${vibe}/${limit} vibe`)
                    }
                } else {
                    // If the channel is not correct then send a message saying that the command is not allowed
                    send(`This option is not allowed on ${channelName}'s channel!`)
                }
            } else {
                // If no custom modifiers are used then just send a normal message

                let score = `${vibe}/${limit}`

                switch (score) {
                    case '69/420':
                        send(`Hmm yes, it seems like you have gotten a ✨ Noice ✨ vibe (${score})`)
                        break;
                    case '-69/-420':
                        send(`Hmmm a negative 69/420 vibe? Interesting... (${score})`)
                        break;
                    case 'NaN/NaN':
                        send(`You were meant to put a number after the command, not a letter! (Ya dingus)`)
                        break;
                    case '0/0':
                        send(`Quit tryna cheat the vibecheck!`)
                        break;
                    case `${limit}/${limit}`:
                        send(`Turns out it is possible to have such a ✨ vibey vibe ✨ that you get a ${score} vibe`)
                        break;
                    default:
                        send(`You have a ${score} vibe`)
                        break;
                }
            }
        }
    }
}