// PolarBot
// app.js

var Discord = require("discord.js");
var bot = new Discord.Client();
var config = require("./config/config.js");
var commands = require("./commands.js");
var logger = require("./logger.js");

bot.on("message", function(message){
    logger.log(message);
    commands.command(bot, message);
});

bot.login(config.discordUsername, config.discordPassword, function(error, token) {
    if (error) console.log(error);
});