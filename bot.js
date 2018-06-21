const fs = require("fs")
const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

client.on("message", (message) => {
  // Exit and stop if the prefix is not there or if user is a bot
  if (!message.content.startsWith(config.prefix) || message.author.bot) return;

  if (message.content.startsWith(config.prefix + "ping")) {
    message.channel.send("pong!");
  } else
  if (message.content.startsWith(config.prefix + "foo")) {
    message.channel.send("bar!");
  }
  if (message.content.startsWith(config.prefix + "hoer")) {
    message.channel.send("vuile slet!");
  }
  if(message.content.startsWith(config.prefix + "prefix")) {
  // Gets the prefix from the command (eg. "!prefix +" it will take the "+" from it)
  let newPrefix = message.content.split(" ").slice(1, 2)[0];
  // change the configuration in memory
  config.prefix = newPrefix;

  // Now we have to save the file.
  fs.writeFile("./config.json", JSON.stringify(config.prefix), (err) => console.error);
    var checkPrefix = fs.readFile("./config.json", JSON.stringify(config.prefix));
    if(checkPrefix == newPrefix){
      message.channel.send("Changed prefix to " + newPrefix);
    }else{
      message.channel.send("Prefix change failed");
    }
  }
});

client.login(config.token);
