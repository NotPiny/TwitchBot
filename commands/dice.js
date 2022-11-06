module.exports = {
    name: 'dice',
    description: 'Rolls a dice',
    category: 'Other',

    run: (client, message, args, channel, tags, isMod, isOwner, settingsDir, channelName, username, prefix, send) => {
        const P = (randomInt(9) + 1)
        const C = (randomInt(9) + 1)

        send(`You roll the dice and get ${P}`);
        setTimeout(() => {
           send(`I roll ${C}`);
           if (P > C) {
            setTimeout(() => {
                send(`Fine you win`)
            }, 2000);
           } else {
            setTimeout(() => {
            send(`Good luck next time`)
            }, 2000)
           }
        }, 2000);
    }
}