const fs = require("fs");
const {google} = require("googleapis");

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function authorize(credentials) {
  const {client_secret, client_id, redirect_uris} = credentials.installed;
  const oAuth2Client = new google.auth.OAuth2(
      client_id, client_secret, redirect_uris[0]);
  oAuth2Client.setCredentials(token);
  return oAuth2Client;
}

const credentials = JSON.parse(process.env.CREDENTIALS);
const token = JSON.parse(process.env.SHEETSTOKEN);

const auth = authorize(credentials);

function getCode(day, callback) {
  var currentDate = day === undefined ? new Date() : new Date(day);
  if (currentDate.toDateString() === "Invalid Date") return;
  var month = months[currentDate.getMonth()].toUpperCase();
  var day = currentDate.getDate();

  if (currentDate.getDay() === 0 || currentDate.getDay() === 6) {
    //Not sure why this works. When just using 'callback("NO CODE");', it complains that 'callback is not a function'. However, in a try/catch statement, it doesn't.
    return callback("NO CODE");
  }

  const sheets = google.sheets({version: "v4", auth});
  sheets.spreadsheets.values.get({
    spreadsheetId: "12RrcoC6UJ0nMM0iRWe9AeCkpA90bRMg47XelLxAdzYg",
    range: "All School Activities Calendar!A3:G68",
  }, (err, res) => {
    if (err) return console.log("The API returned an error: " + err);
    for (row of res.data.values) {
      if (row[6] === month) {
        for (row of res.data.values.slice(res.data.values.indexOf(row) + 1, res.data.values.indexOf(row) + 7)) {
          if (row.includes(String(day)) && row[6] !== 'N/A') {
            callback(row[6][row.indexOf(String(day))] === undefined ? "NO CODE" : row[6][row.indexOf(String(day))]);
            break;
          }
        }
      }
    }
  });
}

module.exports = {getCode: getCode};
