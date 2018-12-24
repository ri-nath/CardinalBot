const Discord = require("discord.js");

exports.run = (client, message, args) => {
    if (args.length != 3) {
      message.channel.send("Usage: `!finalgrade [current] [goal] [final weight]`");
      return;
    }
    [current, goal, weight] = args;
    current = parseFloat(current);
    goal = parseFloat(goal);
    weight = parseFloat(weight);
    if (isNaN(goal) || isNaN(current) || isNaN(weight) || goal < 0 || weight < 0 || current < 0) {
      message.channel.send("Failed to sanitize input, are you sure you entered positive numbers?");
      message.channel.send("Usage: `!finalgrade [current] [goal] [final weight]`");
      return;
    }
    let required = Math.round(((goal - current * (1 - (weight/100))) / (weight / 100)) * 100) / 100
    embed = new Discord.RichEmbed().setAuthor("Your Finals", client.user.avatarURL)
    .setDescription("If you have a " + current + "% in your class, and your final is worth " + weight + "%, and you want a " + goal + "%, you will need a **" + required + "% on your final.** Good luck!")
    .setColor(8989999);
    message.channel.send(embed).catch(console.error);
}
