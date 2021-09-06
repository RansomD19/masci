const Discord = require("discord.js");
const fetch = require("node-fetch")
const client = new Discord.Client({intents:["GUILDS", "GUILD_MESSAGES"]});
require("dotenv").config();

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
    if(msg.content === "m!binary"){
        msg.reply("ok")
    }
})

client.on("message", msg => {
    if(msg.content === "m!herons"){
        msg.reply("ok")
    }
})

client.on("message", msg => {
    if(msg.content === "m!pythagoras"){
        msg.reply("ok")
    }
})


// client.login(process.env.TOKEN)
client.login(process.env.TOKEN)
