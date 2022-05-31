const { MessageActionRow, MessageButton, MessageEmbed } = require("discord.js")

module.exports = {
    name: "hobbies",
    category: "test",
    devOnly: true,
    run: async ({client, message, args}) => {
        message.channel.send({
            embeds: [
                new MessageEmbed().setTitle("Select Hobbie").setDescription("Select Hobbie from the buttons below").setColor("BLUE")
            ],
            components: [
                new MessageActionRow().addComponents([
                    new MessageButton().setCustomId("role-980529645864775750").setStyle("PRIMARY").setLabel("Athlete"),
                    new MessageButton().setCustomId("role-980529750470721596").setStyle("PRIMARY").setLabel("Gym Rat"),
                    new MessageButton().setCustomId("role-980529587421323294").setStyle("PRIMARY").setLabel("Reader"),
                    new MessageButton().setCustomId("role-980529485625585705").setStyle("PRIMARY").setLabel("Gamer"),
                    new MessageButton().setCustomId("role-980529708708028561").setStyle("PRIMARY").setLabel("Degnerate"),
                ])
            ]
        })
    }
}