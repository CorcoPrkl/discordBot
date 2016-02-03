// PolarBot
// commands.js

var sound = require('./sound.js');

var commands = [
    { 
        cmd: '!hello',
        execute: function(bot, message) {
            bot.sendMessage(message, 'Hello, ' + message.sender.username + '.');
        }
    },
    {
        cmd: '!facepalm',
        execute: function(bot, message) {
            bot.sendMessage(message, 'http://puu.sh/mT9DP/c470be6017.jpg');
        }
    },
    {
        cmd: '!bsplitti',
        execute: function(bot, message) {
            bot.sendMessage(message, 'http://puu.sh/mRQTi/ceec531586.jpg');
        }
    },
    {
        cmd: '!topic',
        execute: function(bot, message) {
            if (isAdmin(message))
            {
                bot.setChannelTopic(message, excludeCmd(message.content));
                bot.sendMessage(message, 'Set topic to "' + excludeCmd(message.content) + '".');
            }
        }
    },
    {
        cmd: '!ip',
        execute: function(bot, message) {
            if (getParams(message.content).length == 1)
                bot.sendMessage(message, 'steam://connect/' + getParams(message.content)[0]);
            else if (getParams(message.content).length == 2)
                bot.sendMessage(message, 'steam://connect/' + getParams(message.content)[1]);
        }
    },
    {
        cmd: '!source',
        execute: function(bot, message) {
            bot.sendMessage(message, 'https://github.com/Polar-/discordBot');
        }
    },
    
];

exports.command = function(bot, message) {
    // Go through the arrays of command-objects
    for (var i = 0; i < commands.length; i++) {
        if (getCmd(message.content) === commands[i].cmd) {
            commands[i].execute(bot, message);
        }
    }
}

function getCmd(cmd) {
    var splitted = [];
    splitted = cmd.split(' ');
    return splitted[0];
}

function excludeCmd(cmd) {
    var txt = '';
    var adding = false;
    for (var i = 0; i < cmd.length; i++) {
        if (adding) {
            txt += cmd[i];
        }
        if (cmd[i] === ' ') {
            adding = true;
        }
    }
    return txt;
}

function getParams(cmd)
{
    var params = [];
    params = cmd.split(' '); 
    params.splice(0, 1);
    return params;
}

exports.toHHMM = function toHHMM(date) {
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

function isAdmin(message) {
    var roles = [];
    roles = message.channel.server.rolesOf(message.sender);
    for (var i = 0; i < roles.length; i++) {
        if (roles[i].name == 'admin') return true;
    }
    return false;
}