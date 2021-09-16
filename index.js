const Discord = require("discord.js");
const fetch = require("node-fetch");
const { MessageEmbed } = require("discord.js");
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });
require("dotenv").config();
//defining for slash commands
const { SlashCommandBuilder } = require("@discordjs/builders");
const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v9");

const prefix = "m!";

client.commands = new Discord.Collection();
const fs = require("fs");

const commandFiles = fs
  .readdirSync("./commands")
  .filter((file) => file.endsWith(".js"));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);

  client.commands.set(command.name, command);
}

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
  // console.log(cmd, args);

  if (cmd === "help") {
    client.commands.get("help").execute(msg, args, client);
  }

  //

  if (cmd === "binary") {
    client.commands.get("binary").execute(msg, args);
  }

  //

  if (cmd === "pythogras") {
    client.commands.get("pythogras").execute(msg, args);
  }

  //

  if (cmd === "herons") {
    client.commands.get("herons").execute(msg, args);
  }

  //

  if (cmd == "ping") {
    client.commands.get("ping").execute(msg, args);
  }

  //

  if (cmd === "aspeed" || cmd === "averagespeed") {
    client.commands.get("aspeed").execute(msg, args);
  }

  //

  if (cmd === "add") {
    client.commands.get("add").execute(msg, args);
  }

  //

  if (cmd === "sub") {
    client.commands.get("sub").execute(msg, args);
  }

  //

  if (cmd === "multiply") {
    client.commands.get("multiply").execute(msg, args);
  }

  if (cmd === "divide") {
    client.commands.get("divide").execute(msg, args);
  }

  //

  if (cmd === "zodiac" || cmd === "zodiacsign") {
    client.commands.get("zodiac").execute(msg, args);
  }

  //

  if (cmd === "iss") {
    client.commands.get("iss").execute(msg, args);
  }

  //

  if (cmd == "mcstatusj") {
    client.commands.get("mcstatus").execute(msg, args);
  }

  //
  // console.log(client.commands.Maths);
});
client.login(process.env.TOKEN);
