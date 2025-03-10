function randomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

module.exports = {
    name: 'permit',
    description: 'Sees if you have a permit to do something',
    category: 'Custom',

    channels: [
        'quimbyalert',
        'n0va__vt'
    ],

    run: async (client, message, args, channel, tags, isMod, isOwner, settingsDir, channelName, username, prefix, send) => {
        // Gather the arguments
        const user = args[0]
        const permit = message.replace(user, '').replace(`${prefix}permit`, '').slice(1)

        // Generate a random number from 0 to 2
        let success = randomInt(3)

        // If the number is 1 then the user is approved
        if (success == 1) {
            send(`${user} was approved for a permit to ${permit}`)
        } else {
            send(`${user} was not approved for a permit to ${permit}`)
        }
    }
}