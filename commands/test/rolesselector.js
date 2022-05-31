const { MessageActionRow, MessageButton, MessageEmbed } = require("discord.js")

module.exports = {
    name: "rolesselector",
    category: "test",
    devOnly: true,
    run: async ({client, message, args}) => {
        message.channel.send({
            embeds: [
                new MessageEmbed().setTitle("Select Role").setDescription("Select roles from the buttons below").setColor("BLUE")
            ],
            components: [
                new MessageActionRow().addComponents([
                    new MessageButton().setCustomId("role-980526645272272986").setStyle("PRIMARY").setLabel("BLACK"),
                    new MessageButton().setCustomId("role-980526551156285520").setStyle("PRIMARY").setLabel("PINK"),
                    new MessageButton().setCustomId("role-980526526888038410").setStyle("PRIMARY").setLabel("PURPLE"),
                    new MessageButton().setCustomId("role-980526476099223552").setStyle("PRIMARY").setLabel("GREEN"),
                    new MessageButton().setCustomId("role-980526421019611176").setStyle("PRIMARY").setLabel("RED"),
                    new MessageButton().setCustomId("role-980524940480634901").setStyle("PRIMARY").setLabel("BLUE"),
                ])
            ]
        })
    }
}