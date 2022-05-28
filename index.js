const Discord = require("discord.js")
require("dotenv").config()

const generateImage = require("./generateImage")

const TOKEN = "OTc5MDYwMTc2MDc2Mjg4MDEx.GfMJ9o.k_dN2mNbtnrNfAYm4eWpLRMNH2yq392FsCY5Xw"

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES",
        "GUILD_MEMBERS"
    ]
})

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
})

client.on("messageCreate", (message) =>{
    if (message.content == "hi")
    message.reply("Welcome enjoy your stay!")
})

const welcomechannelId = "978688803663380512"

client.on("guildMemberAdd",  async (member) => {
    const img = await generateImage(member)
    member.guild.channels.cache.get(welcomechannelId).send({
        content: `<@{member.id}> Welcome to the Server!`,
        files: [img]
    })      
})

client.login(process.env.TOKEN)