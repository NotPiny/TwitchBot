const client = require('../client.js');

client.on('redeem', async (channel, username, rewardType, tags, message) => {
    const channelId = tags['room-id']
    const userId = tags['user-id']

    if (channelId === '686336392' || channelId === '161940700') {
        if (rewardType === 'highlighted-message' && userId === '496329801') {
            client.say(channel, `Wow you are so cool piny with your highlighted message`)
        }
    }
})