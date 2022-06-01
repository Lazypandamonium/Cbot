const { MessageActionRow, MessageButton, MessageEmbed } = require("discord.js")

module.exports = {
    name: "nsfw",
    category: "test",
    devOnly: true,
    run: async ({client, message, args}) => {
        message.channel.send({
            embeds: [
                new MessageEmbed().setTitle("AT YOUR OWN RISK").setDescription("NSFW").setColor("BLUE")
            ],
            components: [
                new MessageActionRow().addComponents([
                    new MessageButton().setCustomId("role-981610281593622579").setStyle("PRIMARY").setLabel("NSFW")
                ])
            ]
        })
    }
}