require('dotenv').config()
const prefix = '!'
const CLIENT_ID = process.env.C_ID
const GUILD_ID = process.env.G_ID
const D_TOKEN = process.env.D_TOKEN
const axios = require('axios')
const { GatewayIntentBits, Client, Routes } = require('discord.js')
const { REST } = require("@discordjs/rest")
const { SlashCommandBuilder } = require("@discordjs/builders")
const { ChannelType } = require('discord.js')
const { scheduleJob } = require("node-schedule")

const rest = new REST({ version: "10" }).setToken(process.env.D_TOKEN)
const schedule = require("./commands/schedule")

const client = new Client({
  intents: [
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.Guilds,
    GatewayIntentBits.MessageContent //Allows Message content to be read
  ]
})

client.once('ready', (e) => {
  console.log("Client is listening as " + client.user.tag)

})

client.on("messageCreate", message => {
  if (message.content.toLowerCase() === "ping") {
    message.reply("pong")
  }
})

client.on("interactionCreate", async interaction => { //Detects interaction of SLASH commands
  if (interaction.isChatInputCommand()) {
    if (interaction.commandName === 'schedule') {
      //Schedule command
      const url = interaction.options.getString("apiurl")
      const time = interaction.options.getInteger('time')
      const channel = interaction.options.getChannel('channel')

      scheduleJob("* * * * * *", () => {
        const api = "https://api.thecatapi.com/v1/images/search"
        axios.get(api)
          .then(data => {
            channel.send(data.data[0].url)
          })
          .catch(err => console.log(err))
      })



    }

  }
})

const main = async () => {
  try {
    console.log("started refreshing app (/) commands......")
    await rest.put(Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID), {
      body: schedule
    })
    client.login(D_TOKEN);
  } catch (err) {
    console.log(err)
  }
}
main()



