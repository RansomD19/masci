const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "iss",
  name2: "Iss",
  category: "science",

  aliases: ["iss", "isslocation"],
  usage: "m!iss",
  description: "Returns the current location of the ISS satellite!",
  execute(msg, args) {
    fetch("https://api.wheretheiss.at/v1/satellites/25544")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        msg.reply(
          `The ISS is currently at ${data.latitude.toFixed(
            3
          )} latitude and ${data.longitude.toFixed(3)} longitude `
        );
      });
  },
};
