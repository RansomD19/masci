const { MessageEmbed } = require("discord.js");
const mc = require("minecraft-server-util");

module.exports = {
  name: "mcstatus",
  name2: "Mcstatus",
  usage: "m!mcstatus [server ip]",
  description: "Shows the current status of your minecraft server!",
  execute(msg, args) {
    mc.status(`${args[0]}`).then((res) => {
      emoji = "";
      if (res.version.slice(4) === "Offline") {
        emoji = ":octagonal_sign:";
      }
      if (res.version.slice(4) === "Online") {
        emoji = ":white_check_mark:";
      }
      msg.reply(`Name:${res.host}\nStatus: ${emoji} ${res.version.slice(4)}`);
    });
    // .catch((error) => {
    //   console.log(error);
    // })
  },
};
