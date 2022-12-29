module.exports = {
    name: 'dice',
    description: 'Rolls a dice',
    category: 'Other',

    run: (client, message, args, channel, tags, isMod, isOwner, settingsDir, channelName, username, prefix, send) => {
        // Roll a dice for the user and the bot
        const P = (randomInt(9) + 1)
        const C = (randomInt(9) + 1)

        // Send a message saying what the user rolled
        send(`You roll the dice and get ${P}`);

        // Wait 2 seconds and send a message saying what the bot rolled
        setTimeout(() => {
            send(`I roll ${C}`);

            // Compare the user's roll to the bot's roll
            if (P > C) {
                // Say that the user won
                setTimeout(() => {
                    send(`Fine you win`)
                }, 2000);
            } else {
                // Say that the bot won
                setTimeout(() => {
                send(`Better luck next time`)
                }, 2000)
            }
        }, 2000);
    }
}