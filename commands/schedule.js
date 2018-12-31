const sheets = require("./../modules/sheets.js")
const codes = require("./../modules/codes.json")
const Discord = require("discord.js");

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed();
    sheets.getCode(args[0], code => {
        if (args.length > 0){
          embed.setAuthor("Schedule for " + args[0], client.user.avatarURL);
        } else {
          embed.setAuthor("Today's Schedule", client.user.avatarURL);
        }
        embed.setTitle(codes[code][0])
        .setDescription(codes[code][1])
        .setColor(8989999)
        .setTimestamp();

        message.channel.send(embed);
    });

}
