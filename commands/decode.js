const sheets = require("./../modules/sheets.js")
const codes = require("./../modules/codes.json")
const Discord = require("discord.js");

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed();
    let code = args[0]

    if (args.length > 0) {
      code = code.toUpperCase();
      if (!(code in codes)){code = "HELP";}
    } else {code = "HELP";}

    if (code == "CODES" || code == "HELP"){embed.setAuthor("Decode Command Info");}
    else {embed.setAuthor(codes[code][0].slice(2, codes[code][0].length - 2), client.user.avatarURL);}

    embed.setDescription(codes[code][1])
    .setColor(8989999)
    .setTimestamp();

    message.channel.send(embed);

}
