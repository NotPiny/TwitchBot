const fs = require('fs');
const path = require('path');

module.exports = {
    name: 'cmds',
    description: 'Lists all commands',
    category: 'Other',
    syntax: 'cmds [command]',

    run: (client, message, args, channel, tags, isMod, isOwner, settingsDir, channelName, username, prefix, send) => {
        // Get all commands
        const files = fs.readdirSync(path.resolve(`./commands`))

        let commands = [];

        files.forEach(file => {
            // Get data from the command file
            const location = path.resolve(`./commands/${file}`)
            const commandFile = require(location)

            // Create the command object
            const command = {
                name: commandFile.name || file.replace('.js', ''),
                description: commandFile.description || 'No description provided.',
                category: commandFile.category || 'Other',
                syntax: `${prefix}${commandFile.usage || commandFile.syntax || commandFile.name}`
            }

            if (commandFile.servers) {
                if (commandFile.servers.includes(channelName)) {
                    // Push the command
                    commands.push(command)
                }
            } else {
                // Push the command
                commands.push(command)
            }
        })

        // Check if the user requested info on a specific command
        if (args.length > 0) {
            const command = commands.find(c => c.name == args[0])
            if (!command) return send(`Command not found!`)

            // Send info on the command
            send(`Name: ${command.name} | Description: ${command.description} | Category: ${command.category} | Syntax: ${command.syntax}`)
            return;
        } else {
            let message = '';
            
            for (let i = 0; i < commands.length; i++) {
                message += `${commands[i].name}${i == commands.length - 1 ? '' : ' | '}`
            }

            send(message);
        }
    }
}