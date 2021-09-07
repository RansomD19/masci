const Discord = require("discord.js");
const fetch = require("node-fetch");
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });
require("dotenv").config();

const prefix = "m!";

function getQoute() {
  return fetch("https://zenqoutes.io/api/random")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      return data[0]["q"] + " -" + data[0]["a"];
    });
}

client.once("ready", () => {
  console.log("[STATUS:BOT IS ONLINE]");
  client.user.setPresence({
    game: {
      name: "MaSci",
      type: "WATCHING", // LISTENING, PLAYING, STREAMING, WATCHING
    },
    status: "idle", // dnd, idle, invisible, online
  });
});

client.on("message", (msg) => {
  if (
    !msg.content.toLowerCase().startsWith(prefix.toLowerCase()) ||
    msg.author.bot
  )
    return;

  const args = msg.content.slice(prefix.length).trim().split(" ");
  const cmd = args.shift().toLowerCase();
  console.log(cmd, args);

  if (cmd === "binary") {
    msg.channel.send("Sap's Part");
  }

  if (cmd === "herons") {
    if (args.length === 3) {
    } else return msg.reply("Please provide 3 numbers");

    if (isNaN(args[0]) || isNaN(args[1]) || isNaN(args[2])) {
      msg.channel.send("Pls provide 3 numbers");
    }

    if (args[0] + args[1] > args[2] || args[0] + args[1] === args[2]) {
      return msg.channel.send("Pls make sure the a + b > c");
    } else {
      msg.reply(herons(args[0], args[1], args[2]));
    }
  }

  if (cmd == "ping") {
    msg.channel.send("Pinging to Servers....").then((message) => {
      msg.edit("Ping" + (Date.now() - message.createdTimestamp));
    });
  }
});

client.login(process.env.TOKEN);

/*
hello there 
eha 
slksd;
*/

/*
HERONS FORMULA
console.log(herons(7, 14, 15));
*/
function herons(a, b, c) {
  if (a + b > c) {
    s = (a + b + c) / 2;
    ar = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    return ar.toFixed(2);
  } else {
    return; //impossible to calculate
  }
}

/*
PYTHAGORAS
console.log(pythogras(1, 1));

function pythogras(a, b) {
  let res = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
  if (res > 0) {
    return res.toFixed(2);
  } else {
    return Error;
  }
}
*/

/*
BINARY
binaryText("Hello sus");

function binaryText(text) {
  let binary = " ";

  for (var i = 0; i < text.length; i++) {
    binary += text[i].charCodeAt(0).toString(2) + " ";
  }
  console.log(binary);
}
*/
