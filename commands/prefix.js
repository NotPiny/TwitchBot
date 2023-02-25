const fs = require('fs');

module.exports = {
    name: 'prefix',
    description: 'Shows / modifies the prefix of the bot',
    category: 'Settings',

    run: (client, message, args, channel, tags, isMod, isOwner, settingsDir, channelName, username, prefix, send, channelId, userId) => {
       if (isMod || isOwner) {
        const id = channelId;
        // Check if the user just wants to see the prefix
        if (message.replace(`${prefix}prefix`, '').replace(/ /g, '') === `${prefix}prefix`) {
            return send(`My prefix for this channel is ${prefix}`);
        }

        try {
          // Try to set the prefix
          fs.writeFileSync(`./settings/${id}/prefix.txt`, args[0]);
          send(`Set prefix to "${args[0]}"`);
        } catch {
            // If that fails, create the settings folder and try again
            try {
                if (fs.existsSync(`./settings/${id}`)) {
                    send('Something went wrong and we have no data on it')
                } else {
                    send('Please run the command again we are setting up this channels settings');
                    fs.mkdirSync(`./settings/${id}`);
                }
            } catch {
                send('Something went wrong and we have no data on it')
            }
        }
       } else {
        // Check if the user just wants to see the prefix
        if (message.replace(`${prefix}prefix`, '').replace(/ /g, '') === `${prefix}prefix`) {
            return send(`My prefix for this channel is ${prefix}`);
        }

        // If not, tell them they don't have permission
        send('You need to be a mod or bot owner to run this')
       }
    }
}