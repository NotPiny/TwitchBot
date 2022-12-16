const client = require('../client.js');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.on('line', (text) => {
    const args = text.split(' ');
    const command = args[0].toLowerCase();

    if (command == 'say') {
        const channel = args[1].startsWith('#') ? args[1] : `#${args[1]}`.toLowerCase();
        const message = args.slice(2).join(' ');
        client.say(channel, message);
    }

    if (command == 'join') {
        const channel = args[1].startsWith('#') ? args[1] : `#${args[1]}`.toLowerCase();
        client.join(channel);
    }

    if (command == 'eval') {
        const code = args.slice(1).join(' ');
        try {
            eval(`${code}`)
                .then(result => console.log(result))
                .catch(err => console.log(err));
        } catch (err) {
            console.log(err); // Never can have to much error handling
        }
    }
})