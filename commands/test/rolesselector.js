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
                    new MessageButton().setCustomId("role-980526645272272986").setStyle("").setLabel("Black"),
                    new MessageButton().setCustomId("role-980526606080704542").setStyle("").setLabel("White"),
                    new MessageButton().setCustomId("role-980526551156285520").setStyle("").setLabel("Pink"),
                    new MessageButton().setCustomId("role-980526526888038410").setStyle("").setLabel("Purple"),
                    new MessageButton().setCustomId("role-980526476099223552").setStyle("").setLabel("Green"),
                    new MessageButton().setCustomId("role-980524940480634901").setStyle("").setLabel("Blue"),
                ])
            ]
        })
    }
}