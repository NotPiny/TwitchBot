const crypto = require('crypto')
const fs = require('fs')

module.exports = {
    name: 'cc',
    description: 'Modify / Create a custom command',

    run: async (client, message, args, channel, tags, isMod, isOwner, settingsDir, channelName, username, prefix, send) => {
        if (args[0] === 'create') {
            if (channelName !== tags.username) {
                return send('You can only use this command in your own channel!')
            }
    
            const command = args[1];
            const response = message.replace(`${prefix}cc create ${command} `, '')
    
            if (!command || !response) {
                return send('You need to provide a command and a response!')
            }
    
            const customCommandsDir = `${settingsDir}/customcommands/`
    
            let customCommands = []
    
            if (!fs.existsSync(customCommandsDir)) fs.mkdirSync(customCommandsDir);
    
            if (!fs.existsSync(`${customCommandsDir}/commands.json`)) {
                fs.appendFileSync(`${customCommandsDir}/commands.json`, '[]')
            } else {
                customCommands = JSON.parse(fs.readFileSync(`${customCommandsDir}/commands.json`))

                if (customCommands.find(c => c.name === command)) {
                    return send('That command already exists!')
                }
            }
    
            const commandData = {
                name: command,
                response: response,
                id: crypto.randomBytes(16).toString('hex')
            }
    
            customCommands.push(commandData);
    
            fs.writeFileSync(`${customCommandsDir}/commands.json`, JSON.stringify(customCommands, null, 4));
    
            send(`Successfully created command ${command} with id ${commandData.id}!`)
        }
    }
}