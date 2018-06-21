const fs = require("fs");
const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json");

client.on('ready', () => {
    console.log('I am ready!');
});

client.on("message", (message) => {
  // Exit and stop if it's not there
  if (!message.content.startsWith(config.prefix) || message.author.bot) return; //Prevent infinty loop with other bots
  if (message.content.startsWith(config.prefix + "ping")) {
    message.channel.send("pong!");
  } else
  if (message.content.startsWith(config.prefix + "foo")) {
    message.channel.send("bar!");
  }
  if(message.content.startsWith(config.prefix + "prefix")) {
  // Gets the prefix from the command (eg. "!prefix +" it will take the "+" from it)
  let newPrefix = message.content.split(" ").slice(1, 2)[0];
  // change the configuration in memory
  config.prefix = newPrefix;

  // Now we have to save the file.
  fs.writeFile("./config.json", JSON.stringify(config), (err) => console.error);
  }
});

client.on('ready', () => {
  client.user.setGame('Hey')
});
 
// THIS  MUST  BE  THIS  WAY
client.login(config.token);//where BOT_TOKEN is the token of our bot
