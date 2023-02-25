module.exports = {
    name: 'kill',
    description: 'kills a user',
    category: 'Roleplay',

    run: (client, message, args, channel, tags, isMod, isOwner, settingsDir, channelName, username, prefix, send) => {
        if (args.length == 0) {
            // No user specified
            send(`Usage: ${prefix}kill <user>`);
            return;
        }

        let user = args[0];
        if (user.startsWith('@')) {
            user = user.slice(1);
        }

        const deathMessages = [
            `${user} was killed by ${username}.`,
            `${username} killed ${user}.`
            `${username} kills ${user}.`,
        ]

        if (channelName == 'quimbyalert') {
            deathMessages.push(`${user} was squished by the qube.`);
        }

        const deathMessage = `${deathMessages[Math.floor(Math.random() * deathMessages.length)]}`

        send(deathMessage);

    }
}