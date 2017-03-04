//Our server is NightsOfValor http://nightsofvalor.com/ so all the IP, name and information is built around that server.
//You should check us out sometime.

//Taking the discord.js and starting to login. 

//Constants
const Discord = require("discord.js"); 
const client = new Discord.Client();
const prefix = "$";
//Outputting to the console.

client.on('ready', () => {
  console.log("Logged in as ${client.user.username}!");
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
