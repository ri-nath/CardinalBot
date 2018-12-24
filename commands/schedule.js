const sheets = require("./../sheets/sheets.js")

exports.run = (client, message, args) => {
    sheets.getCode(args[0], code => message.channel.send(codes[code]));
    console.log(sheets.getCode(args[0]))
}

const codes = {
  "M": "**Monday Meeting Schedule** \n**1st** 9:50 - 10:25 \n**2nd** 10:30 - 11:05 \n**3rd** 11:10 - 11:45 \n**4th** 11:50 - 12:25 \n**Registry** 12:30 - 12:50 \n**5th** 12:55 – 1:30 \n**6th** 1:35 - 2:10 \n**7th** 2:15 - 2:50 \n**8th** 2:55 - 3:30",
  "N": "**Neutral Schedule** \n**1st** 7:50 – 8:40\n**2nd** 8:45 – 9:35\n**3rd** 9:40 – 10:30\n**4th** 10:35 – 11:25\n**Registry** 11:30 – 11:50\n**5th** 11:55 – 12:45\n**6th** 12:50 – 1:40\n**7th** 1:45 – 2:35\n**8th** 2:40 – 3:30",
  "S": "**Special** \nThis schedule changes on a case-by-case basis. Check <#351871719406960643> for the most relevant version.",
  "T": "**Testing** \nThis schedule changes on a case-by-case basis. Check <#351871719406960643> for the most relevant version.",
  "R": "**Rally** \nThis schedule changes on a case-by-case basis. Check <#351871719406960643> for the most relevant version.",
  "E": "**Early Release** \nThis schedule changes on a case-by-case basis. Check <#351871719406960643> for the most relevant version.",
  "H": "**Holiday** \nNo school.",
  "NO CODE": "**No Code** \nThis day is either a weekend or a day without a specified code.",
  "HELP": "Proper use of '>decode' is: \n`>decode [schedule code]` \ni.e. >decode M \n*For a list of codes, type `>decode codes`*.",
  "CODES": "**Schedule Codes** \n**M** Monday Meeting  \n**N** Neutral \n**S** Special \n**T** Testing \n**H** Holiday \n**R** Rally\n**E** Early Release"
}
