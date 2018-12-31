const sheets = require("./../modules/sheets.js")
const codes = require("./../modules/codes.json")
const Discord = require("discord.js");

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed();
    console.log(args[0]);

    if (args.length < 1){
      args[0] = "HELP";
    }

    args[0] = args[0].toUpperCase();

    if (args[0] == "CODES" || args[0] == "HELP"){
        embed.setAuthor("Decode Command Info");
    } else {
        embed.setAuthor("Schedule for code" + args[0], client.user.avatarURL);
    }
    embed.setTitle(codes[args][0])
    .setDescription(codes[args][1])
    .setColor(8989999)
    .setTimestamp();

    message.channel.send(embed);

}
