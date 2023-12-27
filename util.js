const axios = require('axios')
require('dotenv').config()
const parseDotenvFile = require('dotenv').parse;
const fs = require('fs')

let bearer = process.env.Bearer

const GetUserIdFromTags = (tags) => tags['user-id']
const GetChannelIdFromTags = (tags) => tags['room-id']
const nameToId = async(name) => {
    const options = {
        method: 'GET',
        url: `https://api.twitch.tv/helix/users?login=${name}`,
        headers: {
            'Client-ID': process.env.ClientID,
            'Authorization': `Bearer ${bearer}`
        }
    }

    const response = await axios.request(options)

    return response.data.data[0].id
}

// TODO
// async function updateBearerToken() {
//     // Don't need to update bearer token if it's not expired
    

//     // Read the (discord bot) .env file then update the twitch bot .env file
//     const Denv = parseDotenvFile(fs.readFileSync('../Discord/.env'))
// }

// async function isBearerValid() {

// }

module.exports = {
    GetUserIdFromTags,
    GetChannelIdFromTags,
    nameToId
}