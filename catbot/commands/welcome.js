
const { EmbedBuilder } = require('discord.js')

module.exports = (client, member) => {
    const embed = new EmbedBuilder()
        .setTitle(member.user.username)
        .setDescription("Welcome to CATTO LAND 2.0!")
        .setColor("0x18elee")
        .setThumbnail(member.user.displayAvatarURL())
        .setImage("https://c8p9p3e5.rocketcdn.me/wp-content/uploads/2019/02/cat-welcome-to-the-team-meme-735x735.jpg")
        // .setAuthor({ name: 'Byte', iconURL: 'https://i.imgur.com/AfFp7pu.png', url: 'https://discord.js.org' })
        // .setFields([
        //     {
        //         name: 'Field Name',
        //         value: "Filed Value",
        //         inline: true
        //     },
        //     {
        //         name: 'Field Name 2',
        //         value: "Filed Value 2",
        //         inline: true
        //     }
        // ])
        .setFooter({
            iconURL: client.user.displayAvatarURL(),
            text: client.user.tag
        })
        // .setURL("https://www.google.com")

        return embed
}