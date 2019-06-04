const { getTeacher } = require('./../modules/studentsreviewme.js')
const Discord = require("discord.js");


exports.run = (client, message, args) => {
    getTeacher(args.join(' '), ({ name, link, rating, text }) => {
        const embed = new Discord.RichEmbed().setAuthor(name, client.user.avatarURL)
            .addField("Rating", rating)
            .addField("Review", text, true)
            .setTitle("View this teacher's reviews")
            .setURL(link)
            .setTimestamp()
            .setColor(8989999);
        message.channel.send(embed).catch(console.error);
    });
};
