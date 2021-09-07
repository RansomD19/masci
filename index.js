const Discord = require("discord.js");
const fetch = require("node-fetch")
const client = new Discord.Client({intents:["GUILDS", "GUILD_MESSAGES"]});
require("dotenv").config();

let prefix = "m!";

function getQoute(){
    return fetch("https://zenqoutes.io/api/random")
    .then(res => {
        return res.json();
    })
    .then(data => {
        return data[0]["q"] + " -" + data[0]["a"];
    })
}

client.on("ready", () => {
    console.log("[STATUS:BOT IS ONLINE]");
})

client.on("message", msg => {
      if (
    !msg.content.toLowerCase().startsWith(prefix.toLowerCase()) ||
    msg.author.bot
  )
    return;

  const args = msg.content.slice(prefix.length).trim().split(" ");
  const cmd = args.shift().toLowerCase();
  console.log(cmd, args);
    
    if(cmd === "binary"){
        msg.reply("ok")
    }



    if(cmd === "herons"){
        if(args.length === 3){
        } else return msg.reply("Please provide 3 numbers");
        
        if(isNaN(args[0]) || isNaN(args[1]) || isNaN(args[2]){
           return msg.reply("Please provide 3 **numbers**");
           }
        herons(args[0], args[1], args[2]);
    }



    if(cmd === "pythagoras"){
        msg.reply("ok")
    }
})


// client.login(process.env.TOKEN)
client.login(process.env.TOKEN)
