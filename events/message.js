module.exports = (client, message) => {
  if (message.author.bot) return;
  if (message.isMentioned(client.user)) {} else
  if (message.content.indexOf(process.env.PREFIX) !== 0) return;
  const args = message.content.slice(process.env.PREFIX.length).trim().split(/ +/g);
  let command = args.shift().toLowerCase();
  if (message.isMentioned(client.user)){command = "help";}
  const cmd = client.commands.get(command);
  if (!cmd) return;
  cmd.run(client, message, args);
};
