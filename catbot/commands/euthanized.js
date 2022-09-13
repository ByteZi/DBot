const { EmbedBuilder } = require('discord.js')

module.exports = (client, member) => {

    const embed = new EmbedBuilder()
        .setTitle(member.user.username)
        .setImage("https://memegenerator.net/img/instances/37585496.jpg")
    return embed
}