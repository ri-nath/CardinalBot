const scrape = require('./../modules/teacherFinder.js')
const Discord = require("discord.js");


exports.run = (client, message, args) => {
    if (scrape.searchList(args[0]) == -1) {
      message.channel.send("This teacher doesn't appear to exist. Check your spelling?").catch(console.error);
      return;
    }
    [name, rating, review, link] = scrape.searchList(args[0])
    const embed = new Discord.RichEmbed().setAuthor(name, client.user.avatarURL)
    .addField("Rating", rating)
    .addField("Review", review, true)
    .setTitle("View this teacher's reviews")
    .setURL(link)
    .setTimestamp()
    .setColor(8989999);
    message.channel.send(embed).catch(console.error);

}
