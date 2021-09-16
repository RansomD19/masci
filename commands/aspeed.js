const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "aspeed",
  name2: "AverageSpeed",
  usage: "m!averagespeed [distance] [time]",
  description: "Gets the average speed with the given distance and time!",
  aliases: ["aspeed", "averagespeed"],
  execute(msg, args) {
    if (args.length === 2) {
    } else return msg.reply("Please provide 2 numbers");

    if (isNaN(args[0]) || isNaN(args[1])) {
      msg.channel.send("Pls provide 2 numbers");
    }
    const embed = new MessageEmbed()
      .setTitle(`Result`)
      .setColor("#57A773")
      .setDescription(aspeed(parseInt(args[0]), parseInt(args[1])));
    msg.reply({ embeds: [embed] });
  },
};

// AVERAGE SPEED
function aspeed(dist, time) {
  let res = dist / time;
  return res.toString();
}
