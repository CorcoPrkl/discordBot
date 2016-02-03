// PolarBot
// logger.js

var commands = require("./commands.js");

exports.log = function(message) {
    var tStamp = message.timestamp;
    tStamp = new Date(tStamp);
    tStamp = commands.toHHMM(tStamp);
    console.log(tStamp + " " + message.sender.username + ": " + message.cleanContent);
}