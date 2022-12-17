const fs = require('fs');

module.exports = {
    name: 'pronouns',
    description: 'Look up a user\'s pronouns or set your own!',
    category: 'utility',

    run: async (client, message, args, channel, tags, isMod, isOwner, settingsDir, channelName, username, prefix, send) => {
        try {
        // Check if the user wants to set their pronouns or look up someone else's
        if (args[0] == 'set') {
            // Check if the user has a settings folder and if they have a pronouns.txt file
            if (fs.existsSync(`./settings/${username}/pronouns.txt`)) {
                fs.writeFileSync(`./settings/${username}/pronouns.txt`, args[1])
                send(`Set your pronouns to ${args[1]}`)
            } else {
                // If they don't have a settings folder, create one and then create a pronouns.txt file
                if (fs.existsSync(`./settings/${username}`)) {
                    fs.appendFileSync(`./settings/${username}/pronouns.txt`, args[1]);
                    send(`Set your pronouns to ${args[1]}`)
                } else {
                    fs.mkdirSync(`./settings/${username}`)
                    fs.appendFileSync(`./settings/${username}/pronouns.txt`, args[1])
                    send(`Set your pronouns to ${args[1]}`)
                }
            }
        } else {
            // If the user doesn't want to set their pronouns, look up someone else's
            const user = args[0].replace('@', '').trim().toLowerCase()

            // Check if the user has a settings folder and if they have a pronouns.txt file
            if (fs.existsSync(`./settings/${user}/pronouns.txt`)) {
                // If they do, send the pronouns
                send(`${user}'s pronouns are ${fs.readFileSync(`./settings/${user}/pronouns.txt`).toString()}`)
            } else {
                // If they don't, tell them they haven't set their pronouns
                send(`${user} hasn't set their pronouns yet!`)
            }
        }
    } catch(err) {
        send(`Something went wrong!`)
        console.log(err)
        }
    }
}