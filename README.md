# CardinalBot 2
Old CardinalBot was very messy. Here's a better one!

Created in Node.js.

>Packages:
```json
"discord.js": "^11.4.2",
"dotenv": "^6.2.0",
"enmap": "^4.5.0",
"googleapis": "^27.0.0",
"cheerio": "^1.0.0-rc.2",
"puppeteer": "^1.11.0",
"request": "^2.88.0",
"request-promise": "^4.2.2"
```

## Usage

To add CardinalBot to your server, visit
[this link](https://discordapp.com/api/oauth2/authorize?client_id=525457603493494786&permissions=0&scope=bot).

> Select a server from the drop-down menu and then click Authorize. You must have the Manage Server permission to add a bot to a server! If no servers appear, you may need to log in.

## Documentation

`!help`:
Returns list of available commands. Can also be accessed by [mentioning](https://discordia.me/mentions) CardinalBot.

`!about`: Returns info about CardinalBot.

`!finalgrade <current> <goal> <final weight>`: Given your current grade, your desired grade, and your final's weight, calculates the minimum score needed on your final.

`!rating <teacher name>`: Returns a teacher's ratings and reviews from [studentsreview.me](https://studentsreview.me).

`!decode <schedule code>`: Returns the schedule for the given code. Use `!decode codes` for a list of schedules.

`!schedule [date]`: Returns the schedule for the given date. If no date is given, returns today's schedule.
