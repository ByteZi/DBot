
const { EmbedBuilder } = require('discord.js')

module.exports = (client, member) => {
    const imgURLs = [
        "https://angelswish.org/wp-content/uploads/2016/05/welcome-cat.jpg",
        "https://c8p9p3e5.rocketcdn.me/wp-content/uploads/2019/02/cat-welcome-to-the-team-meme-735x735.jpg",
        "https://i.imgflip.com/4erdfd.jpg",
        "https://memegenerator.net/img/instances/44675996.jpg",
        "https://www.meme-arsenal.com/memes/e151c3e250c4f0bf76405ca48e62d20b.jpg"
    ]
    const img = imgURLs[Math.floor(Math.random() * imgURLs.length)]
    

    const embed = new EmbedBuilder()
        .setTitle(member.user.username)
        .setDescription("Welcome to CATTO LAND 2.0!")
        .setColor("0x18elee")
        .setThumbnail(member.user.displayAvatarURL())
        .setImage(img)
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
            text: client.user.tag
        })
        // .setURL("https://www.google.com")

        return embed
}