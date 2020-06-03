module.exports = (client, message) => {
  if (message.author.bot) return;
  let args = [];
  let command;
  if (message.isMentioned(client.user)) {
    command = "help";
  } else if (message.content.indexOf(process.env.PREFIX) === 0) {
    args = message.content.slice(process.env.PREFIX.length).trim().split(/ +/g);
    command = args.shift().toLowerCase();
  } else {
    return;
  }
  const cmd = client.commands.get(command);
  if (!cmd) return;
  cmd.run(client, message, args);
};
