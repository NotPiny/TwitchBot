const axios = require('axios')
require('dotenv').config()
const fs = require('fs')

const GetUserIdFromTags = (tags) => tags['user-id']
const GetChannelIdFromTags = (tags) => tags['room-id']
const nameToId = async(name) => {
    const options = {
        method: 'GET',
        url: `https://api.twitch.tv/helix/users?login=${name}`,
        headers: {
            'Client-ID': process.env.ClientID,
            'Authorization': `Bearer ${process.env.Bearer}`
        }
    }

    const response = await axios.request(options)

    return response.data.data[0].id
}

module.exports = {
    GetUserIdFromTags,
    GetChannelIdFromTags,
    nameToId
}