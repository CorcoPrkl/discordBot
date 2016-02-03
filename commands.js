// PolarBot
// commands.js

var sound = require('./sound.js');

exports.command = function(bot, message, callback) {
    var content = message.content;
    var server = message.channel.server;
    var sender = message.sender;
    
    if (getCmd(content) === '!hello') {
        bot.sendMessage(message, 'Hello, ' + sender.username + '.');
    }
    else if (getCmd(content)=== '!facepalm') {
        bot.sendMessage(message, 'http://puu.sh/mT9DP/c470be6017.jpg');
    }
    else if (getCmd(content) === '!bsplitti') {
        bot.sendMessage(message, 'http://puu.sh/mRQTi/ceec531586.jpg');
    }
    else if (getCmd(content) === '!topic' && isAdmin(server, sender))
    {
        bot.setChannelTopic(message, getParams(content));
        bot.sendMessage(message, 'Set topic to "' + getParams(content) + '".');
    }
    else if (getCmd(content) === '!ip') {
        if (getParams(content).length == 1)
            bot.sendMessage(message, 'steam://connect/' + getParams(content)[0]);
        else if (getParams(content).length == 2)
            bot.sendMessage(message, 'steam://connect/' + getParams(content)[1]);
    }
    else if (getCmd(content) === '!joinVoice') {
        sound.joinChannel(server, bot, getParams(content));
    }
    else if (getCmd(content) === '!leaveVoice') {
        sound.leaveChannel(bot);
    }
    else if (getCmd(content) === '!stats') {
        
    }
    else if (getCmd(content) === '!play glocks1') {
        bot.voiceConnection.playFile('C://users/jussi/desktop/dbot/nafpl/glocks1.mp3', function(error) {
            console.log(error);
        });
    }
}

function getCmd(cmd) {
    var splitted = [];
    splitted = cmd.split(' ');
    return splitted[0];
}

function getParams(cmd)
{
    var cmds = [];
    cmds = cmd.split(' '); 
    cmds.splice(0, 1);
    return cmds;
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

function isAdmin(server, user) {
    var roles = [];
    roles = server.rolesOf(user);
    for (var i = 0; i < roles.length; i++) {
        if (roles[i].name == 'admin') return true;
    }
    return false;
}