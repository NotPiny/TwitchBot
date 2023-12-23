const fs = require('fs').promises;
const path = require('path');

module.exports = {
    name: 'kill',
    description: 'kills a user',
    category: 'Roleplay',

    run: async(client, message, args, channel, tags, isMod, isOwner, settingsDir, channelName, username, prefix, send) => {
        if (args.length == 0) {
            // No user specified
            send(`Usage: ${prefix}kill <user>`);
            return;
        }

        // Get the user
        let user = args[0]?.startsWith('@') ? args[0].slice(1) : args[0];

        // Immortal users :D
        const immortalUsers = [
            "piny",
            "maxnaturiike",
            "mrmalouc",
            "daalbot",
        ]

        // Fix bypasses because jaishuu is determined to kill me :(
        function fixBypasses(string) {
            return string
                .replace('!', 'i')
                .replace('l', 'i')
                .replace('j', 'i')
                .replace('1', 'i')
                .replace('3', 'e')
                .replace('4', 'a')
                .replace('5', 's')
                .replace('7', 't')
                .replace('0', 'o')
                .replace('9', 'g')
                .replace('e', '')
        }

        // Check if the user is immortal
        for (let i = 0; i < immortalUsers.length; i++) {
            if (fixBypasses(user.toLowerCase()).includes(immortalUsers[i])) {
                send(`No.`);
                return;
            }
        }

        const configJson = JSON.parse(await fs.readFile(path.resolve(`./config/kill.json`), 'utf8'));

        // Get a random death message
        let deathMessages = configJson.deathMessages;
        // [
            // `${user} was killed by ${username}!`,
            // `${user} was sliced by ${username} with a sword!`,
            // `${user} was shot by ${username} using a bow!`,
            // `${user} was defenestrated by ${username}!`,
            // `${user} was chucked into a volcano by ${username}!`,
            // `${user} was stabbed by ${username}!`,
            // `${user} picked the wrong house and got hit with a bat by ${username}!`,
            // `${user} got hit by a car driven by ${username}!`,
            // `${user} was pushed off a cliff by ${username}!`,
            // `${user} was pushed into a pool of acid by ${username}!`,
            // `${user} was pushed off a building by ${username}!`,
            // `${user} was fed a cleaver by ${username}!`,
            // `${user} was blasted by a powerwasher by ${username}!`,
            // `${user} was exploded by ${username}!`,
            // `${user} was given a tour of the sun by ${username}!`,
            // `${user} was sent to the shadow realm by ${username}!`,
            // `${user} was killed by a arrow to the knee by ${username}!`,
            // `${user} was eaten by ${username}!`,
            // `${user} was drowned by ${username}!`,
            // `${user} was exploded by ${username} dropping a creeper on their head!`
        // ]

        const deathMessage = deathMessages[Math.floor(Math.random() * deathMessages.length) + 1].replace('{user}', user).replace('{username}', username);

        send(deathMessage);
    }
}