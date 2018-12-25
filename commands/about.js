const Discord = require("discord.js");

exports.run = (client, message, args) => {
    embed = new Discord.RichEmbed()
    .setAuthor("CardinalBot 2", client.user.avatarURL)
    .setColor(8989999)
    .setDescription("This bot is primarily designed for students of Lowell High School.")
    .addField("Invite Link", "https://discordapp.com/oauth2/authorize?client_id=52")
    .addField("GitHub", "https://github.com/rishinath4159/CardinalBot")
    .addField("Need help?", "Type '!help' or tag me!");
    message.channel.send(embed).catch(console.error);
}
