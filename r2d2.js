//Our server is NightsOfValor http://nightsofvalor.com/ so all the IP, name and information is built around that server.
//You should check us out sometime.

//Taking the discord.js and starting to login. 

//Constants
const Discord = require("discord.js"); 
const client = new Discord.Client();
const prefix = "$";
//Fun
const playercards = ["BarredGalaxy [*50%*]", "BarredGalaxy [*50%*]", "BarredGalaxy [*50%*]", "GalaxyIsBroken [*5%*]", "Omanges [*1%*]", "BluePandaDragon [*2%*]", "Neterkun [*10%*]", "Prxncey [*14%*]", "Desstie [*10%*]"];
const answers = ["99%", "Maybe.", "Certainly not.", "I hope so.", "Not in your wildest dreams.", "There is a good chance.", "Quite likely.", "I think so.", "I hope not.", "I hope so.", "Never!", "Fuhgeddaboudit.", "Ahaha! Really?!?", "Pfft.", "Sorry, bucko.", "Hell, yes.", "Hell, to the na na.", "The future is bleak.", "The future is uncertain.", "I would rather not say.", "Who cares?", "Possibly.", "Never, ever, ever.", "There is a small chance.", "Yes!", "99%", "I Would bet on it."];

//Outputting to the console.

client.on('ready', () => {
  console.log("Logged in as ${client.user.username}!");
});

//Logged in, creating a simple test message and we go against trump.
client.on('message', msg => {
  if (msg.content.includes("trump")) {
      msg.react('👎');
      msg.reply('Please dont discuss that horrible man. Ever. Like Ever. At all. Thx ;)')
  }
});  
//Created an IP command. When you do $IP it shows you the IP of the server.

client.on('message', msg => {
  if (msg.content.startsWith(prefix + "ip")) {
    msg.reply('The Server IP is **play.nightsofvalor.com');
  }

//Create a simple Rules embed. People need to know the rules.

if (msg.content.startsWith(prefix +'rules'))
    msg.channel.sendMessage(" ", {embed: {
            color: 7013413,
            author: {
                 name: "Rules!",
                icon_url: ""
            },
            description: "http://nightsofvalor.com/rules",
        }});
});

//enter token

client.login('token');
