const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === 'ping') {

       message.reply('pong');

       }

});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.NDU5MjU4MzU4MjA2MDM4MDY2.DgzlMA.vmHM-it0Pt50XDVBLfBNTFcKrAM);//where BOT_TOKEN is the token of our bot
