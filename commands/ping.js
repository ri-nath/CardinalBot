const Discord = require("discord.js");

exports.run = (client, message, args) => {
    embed = new Discord.RichEmbed()
    .setAuthor("Pong!", client.user.avatarURL)
    .setColor(8989999);
    message.channel.send(embed).catch(console.error);
}
