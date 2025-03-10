const client = require('../client.js');
const fs = require('fs').promises;
const path = require('path');

client.on('message', async (channel, tags, message, self) => {
    if (tags['room-id'] !== '686336392') return;

    const command = message.slice(1).toLowerCase().split(' ')[0];
    const args = message.slice(1).split(' ').slice(1);

    if (command == 'appear') {
        client.say(channel, `Welcome back, ${tags['username']}!`)
    }

    if (command == 'disappear') {
        client.say(channel, `${tags['username']} said peace nerds!`)
    }

    if (command == 'quimprov') {
        client.say(channel, `yes, AND`)
    }

    if (command == 'followage' && !message.startsWith('$')) {
        client.say(channel, `Hey ${tags['username']}, it seems you're trying to use the followage command. Please use the $followage command instead. Thanks!`)
    }

    if (command == 'ban' && message.startsWith('$')) {
        client.say(channel, `Successfully banned ${args[0]} "${args[1] ? `For ${args.slice(1).join(' ')}` : ''}"!`)
    }

    async function generateRandomGoodMorning() {
        const goodMorningWords = [
            'GOOD',
            'MORNING',
            'GAMER',
            'NATION'
        ];

        let goodMorning = '';

        for (let i = 0; i < 4; i++) {
            // Grab a random word then remove it from the array
            const randomWord = goodMorningWords.splice(Math.floor(Math.random() * goodMorningWords.length), 1)[0];
            goodMorning += `${randomWord} `;
        }

        if (goodMorning.trim() === 'GOOD MORNING GAMER NATION') {
            // If the generated good morning is the same as the original, generate a new one
            return await generateRandomGoodMorning();
        }

        return goodMorning.trim();
    }

    if (tags['user-id'] === '170731764' && message.toLowerCase().includes('good morning gamer nation')) {
        if (Math.ceil(Math.random() * 10) > 9) return client.say(channel, `NATION UNDEFINED!`);
        client.say(channel, `${await generateRandomGoodMorning()}!`);
    }
})

let knownLive = false;
let currentLiveChannels = [];
let currentLiveChannelsArray = [];
(async() => {
    currentLiveChannels = await fs.readFile(path.resolve('../Discord/db/socialalert/twitch.detected'), 'utf-8');
    currentLiveChannelsArray = currentLiveChannels.split('\n');
})()

setInterval(async() => {
    currentLiveChannels = await fs.readFile(path.resolve('../Discord/db/socialalert/twitch.detected'), 'utf-8');
    currentLiveChannelsArray = currentLiveChannels.split('\n');

    if (!currentLiveChannelsArray.includes('686336392'))
        knownLive = false;

    if (knownLive) return;
    if (currentLiveChannelsArray.includes('686336392')) {
        knownLive = true;

        // Fired when quimby goes live (or bot restarts while quimby is live)
        const waterReminder = setInterval(async() => {
            // 30 minutes
            if (!currentLiveChannelsArray.includes('686336392')) return clearInterval(waterReminder);
        
            client.say('#quimbyalert', 'Sooo quimby its been 30 minutes.... you should probably drink some water');
        }, 30 * 60 * 1000)

        const stretchReminder = setInterval(async() => {
            // 1 hour
            if (!currentLiveChannelsArray.includes('686336392')) return clearInterval(stretchReminder);
        
            client.say('#quimbyalert', 'Hey quimby, its been an hour... you should probably take a break and stretch');
        }, 1 * 60 * 60 * 1000)
    }

}, 30 * 1000)