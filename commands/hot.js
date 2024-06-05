async function generateRandomNumber(max) {
    return Math.floor(Math.random() * max + 1)
}

async function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

module.exports = {
    name: 'hot',
    description: 'Heads Or Tails?',
    category: 'Games',

    run: async (client, message, args, channel, tags, isMod, isOwner, settingsDir, channelName, username, prefix, send) => {
        send(`🪙 Flipping the coin..`)

        await wait(2000)

        const result = await generateRandomNumber(1)

        if (result === 0) {
            send(`🪙 And it lands on Heads!`)
        } else {
            send(`🪙 And it lands on Tails!`)
        }
    }
}