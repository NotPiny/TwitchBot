const fs = require('fs');

module.exports = {
    name: 'pronouns',
    description: 'Look up a user\'s pronouns or set your own!',
    category: 'utility',

    run: async (client, message, args, channel, tags, isMod, isOwner, settingsDir, channelName, username, prefix, send) => {
        try {
        if (args[0] == 'set') {
            if (fs.existsSync(`./settings/${username}/pronouns.txt`)) {
                fs.writeFileSync(`./settings/${username}/pronouns.txt`, args[1])
                send(`Set your pronouns to ${args[1]}`)
            } else {
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
            const user = args[0].replace('@', '').trim().toLowerCase()
            if (fs.existsSync(`./settings/${user}/pronouns.txt`)) {
                send(`${user}'s pronouns are ${fs.readFileSync(`./settings/${user}/pronouns.txt`).toString()}`)
            } else {
                send(`${user} hasn't set their pronouns yet!`)
            }
        }
    } catch(err) {
        send(`Something went wrong!`)
        console.log(err)
        }
    }
}