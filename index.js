const Discord = require("discord.js");
const fetch = require("node-fetch");
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });
require("dotenv").config();
//defining for slash commands
const { SlashCommandBuilder } = require("@discordjs/builders");
const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v9");

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

client.on("messageCreate", (msg) => {
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

  if (cmd === "pythogras") {
    if (args.length === 2) {
    } else return msg.reply("Please provide 2 numbers");

    if (isNaN(args[0]) || isNaN(args[1])) {
      msg.channel.send("Pls provide 2 numbers");
    }

    msg.reply(pythogras(parseInt(args[0]), parseInt(args[1])));
  }

  if (cmd === "herons") {
    if (args.length === 3) {
    } else return msg.reply("Please provide 3 numbers");

    if (isNaN(args[0]) || isNaN(args[1]) || isNaN(args[2])) {
      msg.channel.send("Pls provide 3 numbers");
    }

    if (
      parseInt(args[0]) + parseInt(args[1]) > parseInt(args[2]) ||
      parseInt(args[0]) + parseInt(args[2]) > parseInt(args[1])
    ) {
      msg.reply(
        herons(parseInt(args[0]), parseInt(args[1]), parseInt(args[2]))
      );
    } else {
      return msg.channel.send("Pls make sure the a + b > c and a + c > b");
    }
  }

  if (cmd == "ping") {
    msg.channel.send("Pinging to Servers....").then((message) => {
      message.edit(
        "Ping: " + (message.createdTimestamp - msg.createdTimestamp)
      );
    });
  }

  if (cmd === "aspeed" || cmd === "averagespeed") {
    if (args.length === 2) {
    } else return msg.reply("Please provide 2 numbers");

    if (isNaN(args[0]) || isNaN(args[1])) {
      msg.channel.send("Pls provide 2 numbers");
    }

    msg.reply(aspeed(parseInt(args[0]), parseInt(args[1])));
  }

  if (cmd === "add") {
    if (args.length < 2) {
      return msg.reply("Please provide at least 2 numbers");
    } else {
    }

    let res = 0;

    args.forEach((num) => {
      res = res + parseInt(num);
    });

    msg.reply(res.toString());
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
PYTHAGORAS*/

function pythogras(a, b) {
  let res = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
  if (res > 0) {
    return res.toFixed(2);
  } else {
    return Error;
  }
}

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

/*
AVERAGE SPEED
*/

function aspeed(dist, time) {
  let res = dist / time;
  return res.toString();
}
