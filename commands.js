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
		console.log(message.content);
		var topic = splitCmd(message.content);
		console.log(topic);
                bot.setChannelTopic(message, topic);
                bot.sendMessage(message, 'Set topic to "' + topic + '".');

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
            bot.sendMessage(message, 'https://github.com/CorcoPrkl/discordBot');
        }
    }
];

exports.command = function(bot, message) {
    // Go through the arrays of command-objects
	var currentCommand = getCmd(message.content);    
	for (var i = 0; i < commands.length; i++) {	 	
        if (currentCommand === commands[i].cmd) {
			console.log("found command: "+currentCommand);
            commands[i].execute(bot, message);
        }
    }
}

function getCmd(cmd) {   
    return cmd.split(' ')[0];
}

function splitCmd(cmd) {
   	var split = cmd.split(' ');	
	var joined = "";
	for (var i=1; i < split.length; i++) {
	joined += split[i] + " ";
	}
	return joined;
}

function getParams(cmd)
{
    var params = [];
    params = cmd.split(' '); 
    params.splice(0, 1);
    return params;
}

function isAdmin(message) {
    var roles = [];
    roles = message.channel.server.rolesOf(message.sender);
    for (var i = 0; i < roles.length; i++) {
        if (roles[i].name == 'admin') return true;
    }
    return false;
}
