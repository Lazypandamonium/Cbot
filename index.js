const Discord = require("discord.js")

const TOKEN = "OTc5MDYwMTc2MDc2Mjg4MDEx.GfMJ9o.k_dN2mNbtnrNfAYm4eWpLRMNH2yq392FsCY5Xw"

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
})

client.on("messageCreate", (message) =>{
    if (message.content == "hi")
    message.reply("Welcome enjoy your stay!")
})

client.login(TOKEN)