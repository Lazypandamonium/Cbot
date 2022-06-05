const { MessageActionRow, MessageButton, MessageEmbed } = require("discord.js")

module.exports = {
    name: "gaming",
    category: "test",
    devOnly: true,
    run: async ({client, message, args}) => {
        message.channel.send({
            embeds: [
                new MessageEmbed().setTitle("Select Hobbie").setDescription("Select Hobbie from the buttons below").setColor("BLUE")
            ],
            components: [
                new MessageActionRow().addComponents([
                    new MessageButton().setCustomId("role-982854876616872006").setStyle("PRIMARY").setLabel("Val"),
                    new MessageButton().setCustomId("role-982855244729966642").setStyle("PRIMARY").setLabel("Cod"),
                    new MessageButton().setCustomId("role-982855305186656366").setStyle("PRIMARY").setLabel("R6"),
                    new MessageButton().setCustomId("role-982855372136120370").setStyle("PRIMARY").setLabel("Csgo"),
                ])
            ]
        })
    }
}