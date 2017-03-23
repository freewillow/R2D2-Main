//Our server is NightsOfValor http://nightsofvalor.com/ so all the IP, name and information is built around that server.
//You should check us out sometime.

//Taking the discord.js and starting to login. 

//Constants
const Discord = require("discord.js"); 
const client = new Discord.Client();
const prefix = "$";
const fs = require("fs");
//Fun
const playercards = ["BarredGalaxy [*50%*]", "HelloImJake [*10%*]", "GalaxyIsBroken [*5%*]", "Omanges [*1%*]", "BluePandaDragon [*2%*]", "Neterkun [*10%*]", "Prxncey [*14%*]", "Desstie [*10%*]"];
const answers = ["99%", "Maybe.", "Certainly not.", "I hope so.", "Not in your wildest dreams.", "There is a good chance.", "Quite likely.", "I think so.", "I hope not.", "I hope so.", "Never!", "Fuhgeddaboudit.", "Ahaha! Really?!?", "Pfft.", "Sorry, bucko.", "Hell, yes.", "Hell, to the na na.", "The future is bleak.", "The future is uncertain.", "I would rather not say.", "Who cares?", "Possibly.", "Never, ever, ever.", "There is a small chance.", "Yes!", "99%", "I Would bet on it."];

//Outputting to the console.

client.on('ready', () => {
  console.log("Logged in as ${client.user.username}!");
  client.user.setGame("a X-Wing")
});

//Logged in, creating a simple test message and we go against trump.
client.on('message', msg => {
  if (msg.content.includes("trump")) {
      msg.react('👎');
      msg.reply('Please dont discuss that horrible man. Ever. Like Ever. At all. Thx ;)')
  }
  if (msg.content.startsWith(prefix + "8ball")) {
    msg.channel.sendMessage(`Hey! <@` + msg.author.id + `>, :8ball: `+ answers[Math.floor(Math.random() * answers.length)])
  }
  if (msg.content.startsWith(prefix + "mping")) {
    msg.channel.sendMessage(`Pong! ` + [Math.floor(Date.now() - msg.createdTimestamp)]);
  }
  if (msg.content.startsWith(prefix + "ip")) {
    msg.reply('The Server IP is **play.nightsofvalor.com**');
  }
  if (msg.content.startsWith(prefix + "crate")) {
    msg.reply('You Have Won ' + playercards[Math.floor(Math.random() * playercards.length)]) 
  }
  if (msg.content.startsWith(prefix + "asl")) {
  let [age, sex, location] = msg.content.split(" ").slice(1);
  msg.channel.sendMessage(`Hello <@${msg.author.id}>, I see you're a ${age} year old ${sex} from ${location}. Wanna date?`);
}

  if (msg.content.startsWith(prefix + 'botstats'))
    msg.channel.sendMessage(" ", {embed: {
            color: 7013413,
            author: {
                 name: "Bot Statistics",
                icon_url: ""
            },
            description: "Bot Statistics... What do You Expect?",
            fields: [
                {
                    inline: true,
                    name: "Ping!",
                    value: Math.round(msg.client.ping) + "ms"
                },
                {
                    inline: true,
                    name: "Uptime!",
                    value: [Math.floor((client.uptime / 1000) / 60)] + "m"
                }
            ]
        }});
if (msg.content.startsWith(prefix + 'rules'))
    msg.channel.sendMessage(" ", {embed: {
            color: 7013413,
            author: {
                 name: "Rules!",
                icon_url: ""
            },
            description: "http://nightsofvalor.com/rules",
        }});
});
let points = JSON.parse(fs.readFileSync('./points.json', 'utf8'));
client.on("message", msg => {
  if(!msg.content.startsWith(prefix)) return;
  if(msg.author.bot) return;

  if(!points[msg.author.id]) points[msg.author.id] = {points: 0, level: 0};
  let userData = points[msg.author.id];
  userData.points++;

  let curLevel = Math.floor(0.1 * Math.sqrt(userData.points));  
  if(curLevel > userData.points) {
    // Level up!
    userData.level = curLevel;
    msg.reply(`You've leveled up to level **${curLevel}**! Ain't that dandy?`);
  }

  if(msg.content.startsWith(prefix + "points")) {
  let [what, pro, pro2] = msg.content.split(" ").slice(1);
  if (what === "bal")
    msg.channel.sendMessage("Your Balance is " + userData.points + ", and your level is " + userData.level);
  if (what === "help")
    msg.channel.sendMessage("Help:\n`bal` Check you Balance");
    }
  fs.writeFile('./points.json', JSON.stringify(points), (err) => {if(err) console.error(err)});
});

client.login('Mjg2MjQ5OTQ3NjE4MjEzODg4.C5nY6A.QdrKJdLmK1EKLbcqmyMOhU5ZMwg');
