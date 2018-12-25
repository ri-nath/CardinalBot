const Discord = require("discord.js");

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
    .setAuthor("CardinalBot 2", client.user.avatarURL)
    .setThumbnail("http://static1.squarespace.com/static/580a6b5859cc680ad831cbc6/t/58ff7bd3db29d65fe33265ae/1539121533830/")
    .setDescription("This bot is primarily designed for students of Lowell High School.")
    .addField(process.env.PREFIX + "schedule <date>", "Returns the schedule for the given date. If no date is given, returns today's schedule.")
    .addField(process.env.PREFIX + "rating <teacher name>", "Returns a teacher's ratings and reviews from ratemyteachers.com.")
    .addField(process.env.PREFIX + "finalgrade <current> <goal> <final weight>", "Given your current grade, your wanted grade, and your final's weight, calculates the minimum score needed on your final.")
    .setColor(8989999);
    message.channel.send(embed).catch(console.error);
}
