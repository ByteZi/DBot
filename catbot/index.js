require('dotenv').config()
const { Client, GatewayIntentBits, Routes, EmbedBuilder } = require('discord.js')
const schedule = require('./commands/schedule')
const { REST } = require('@discordjs/rest')
const rest = new REST({ version: "10" }).setToken('MTAxODY5NzU4MzI4NTI2MDMyOQ.G1De-T.To8x85PCyYYN9S7LkapsZJikjYdhYMgEQ8bGk4')
const { scheduleJob } = require('node-schedule')
const axios = require('axios')
const welcomeEmbed = require('./commands/welcome')
const euthanizedEmbed = require("./commands/euthanized")

const client = new Client({
    intents: [
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.MessageContent, //Allows Message content to be read
    ]
})

client.on('ready', client => {
    console.log('Catbot is Purring')
})

client.on('guildMemberAdd', member => {
    const channelId = "1019189232448831528"
    client.channels.cache.get(channelId).send({ embeds: [welcomeEmbed(client,member)] })

})

client.on('guildMemberRemove', member => {
    const channelId = "980206753776009266"
    client.channels.cache.get(channelId).send({ embeds: [euthanizedEmbed(client,member)]})
})

client.on('interactionCreate', (interaction) => {

    if (!interaction.isChatInputCommand()) return

    if (interaction.commandName === "schedule") {
        const url = interaction.options.getString("apiurl")
        const time = interaction.options.getInteger('time')
        const channel = interaction.options.getChannel('channel')
        const description = interaction.options.getString('description')

        interaction.reply("Success API Route")

        console.log(description)
        scheduleJob(`* * ${time} * * *`, () => {
            const api = url
            axios.get(api)
                .then(data => {
                    channel.send({ content: data.data[0].url })

                })
                .catch(err => console.log(err))
        })
    }

})


const main = async () => {
    try {
        console.log("started refreshing app (/) commands......")
        // await rest.put(Routes.applicationGuildCommands(process.env.CLIENT_TOKEN, process.env.GUILD_TOKEN), {
        //     body: schedule
        // })
        client.login(process.env.BOT_TOKEN)
    } catch (err) {
        console.log(err)
    }

}
main()