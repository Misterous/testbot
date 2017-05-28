const Discord = require("discord.js");
const embed = new Discord.RichEmbed()

const TOKEN = "MzE4MTg1MDIyMDA5OTAxMDU2.DAusaQ.g7qJg-aqHRcD2JnHBcjVrwHrpgY";
const PREFIX = "$"

var bot = new Discord.Client();

bot.on("ready",function() {
    console.log("Almost there...");
})

bot.on('ready', () => {
	console.log(`Logged in as ${bot.user.username}!`);
	bot.user.setGame("$help | git repository");
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;
    if (!message.content.startsWith(PREFIX)) return;
       var args = message.content.substring(PREFIX.length).split(" ");
	   switch (args[0]) {
		   
case "help":
    message.author.send("Null");
	message.reply("I have sent you something");
		   break;
case "foo":
  message.channel.send("bar!");
break;	   
	   }
});
	   
bot.login('MzE4MTg1MDIyMDA5OTAxMDU2.DAusaQ.g7qJg-aqHRcD2JnHBcjVrwHrpgY');