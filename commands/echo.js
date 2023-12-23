module.exports = {
    name: 'echo',
    description: 'Echo a message',
    category: 'Testing',

    /**
     * 
     * @param {*} client 
     * @param {string} message 
     * @param {string[]} args 
     * @param {string} channel
     * @param {boolean} isMod 
     * @param {boolean} isOwner 
     * @param {string} settingsDir 
     * @param {string} channelName 
     * @param {string} username 
     * @param {string} prefix
     */
    run: async (client, message, args, channel, tags, isMod, isOwner, settingsDir, channelName, username, prefix, send) => {
        // // Just echo a message
        const loops = args.filter(a => a == '$send').length;
        if (loops > 10) return send('Thats too many loops!');
        
        send(`${args.join(' ')}`)
    }
}