// PolarBot
// logger.js

var commands = require("./commands.js");

exports.log = function(message) {
    var tStamp = message.timestamp;
    tStamp = new Date(tStamp);
    tStamp = toHHMM(tStamp);
    console.log(tStamp + " " + message.sender.username + ": " + message.cleanContent);
}

function toHHMM(date) {
    var txt = '';
    var hours = '';
    var minutes = '';
    hours = date.getHours().toString();
    minutes = date.getMinutes().toString();
    if (hours.length == 1) hours = '0' + hours;
    if (minutes.length == 1) minutes = '0' + minutes;
    txt += hours;
    txt += ':';
    txt += minutes;
    return txt;
}