const sheets = require("./../modules/sheets.js")
const codes = require("./../modules/codes.json")
const Discord = require("discord.js");

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed();

    if (args.length < 1 || !(args[0] in codes)){args[0] = "HELP";}

    args[0] = args[0].toUpperCase();
    if (args[0] == "CODES" || args[0] == "HELP"){embed.setAuthor("Decode Command Info");}
    else {embed.setAuthor(codes[args[0]][0].slice(2, codes[args[0]][0].length - 2), client.user.avatarURL);}
    embed.setDescription(codes[args[0]][1])
    .setColor(8989999)
    .setTimestamp();

    message.channel.send(embed);

}
