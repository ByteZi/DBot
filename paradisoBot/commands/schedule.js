
const { SlashCommandBuilder } = require("@discordjs/builders")
const {ChannelType} = require('discord.js')
const {scheduleJob} = require("node-schedule")

module.exports = [
    // {
    //     name: "slashtutorial",
    //     description: "example description"
    // },
    // {
    //     name: "slashtutorial2",
    //     description: "example description",
    //     options: [
    //         {
    //             name: "food",
    //             description: "good food",
    //             type: 3,
    //             required: true
    //         }
    //     ]
    // },
    // {
    //     name: "order",//Choices tutorial
    //     description: "choices example",
    //     options: [
    //         {
    //             name: "food",
    //             description: "food",
    //             type: 3,
    //             required: true,
    //             choices: [
    //                 {
    //                     name: "cheese",
    //                     value: "cheese"
    //                 },
    //                 {
    //                     name: "corn",
    //                     value: "corn"
    //                 }
    //             ]
    //         },
    //         {
    //             name: "drinks",
    //             description: "drinks",
    //             type: 3,
    //             required: true,
    //             choices: [
    //                 {
    //                     name: "coke",
    //                     value: "coke"
    //                 },
    //                 {
    //                     name: "sprite",
    //                     value: "sprite"
    //                 }
    //             ]
    //         }
    //     ]
    // },
    new SlashCommandBuilder()
        .setName("schedule")
        .setDescription("schedule a message")
        .addStringOption(option =>
            option
                .setName("apiurl")
                .setDescription("API URL to be posted")
                .setRequired(true)
        )
        .addIntegerOption(option =>
            option
                .setName('time')
                .setDescription("time in milliseconds")
                .setChoices(
                    { name: "1 Minute", value: 6000 }

                )
                .setRequired(true)
        )
        .addChannelOption(option =>
            option
                .setName("channel")
                .addChannelTypes(ChannelType.GuildText)
                .setDescription("channel to be sent")
                .setRequired(true)
        )
        .toJSON()
    ,
    new SlashCommandBuilder()
        .setName("stopschedule")
        .setDescription("stopsSchedule")
]