const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json");

client.on('ready', () => {
    console.log('I am ready!');
});

client.on("message", (message) => {
  // Exit and stop if it's not there
  if (!message.content.startsWith(prefix) || message.author.bot) return; //Prevent infinty loop with other bots
  if (message.content.startsWith(prefix + "ping")) {
    message.channel.send("pong!");
  } else
  if (message.content.startsWith(prefix + "foo")) {
    message.channel.send("bar!");
  }
});

client.on('ready', () => {
  client.user.setGame('Hey')
});
 
// THIS  MUST  BE  THIS  WAY
client.login(config.token);//where BOT_TOKEN is the token of our bot
