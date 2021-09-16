const { MessageEmbed } = require("discord.js");
const errorembed = new MessageEmbed().setColor("#EE6352");
module.exports = {
  name: "aspeed",
  name2: "AverageSpeed",
  usage: "m!averagespeed [distance] [time]",
  category: "science",
  description: "Gets the average speed with the given distance and time!",
  aliases: ["aspeed", "averagespeed"],
  execute(msg, args) {
    if (args.length === 2) {
    } else {
      errorembed.setDescription("Please provide 2 numbers");
      return msg.reply({ embeds: [errorembed] });
    }

    if (isNaN(args[0]) || isNaN(args[1])) {
      errorembed.setDescription("Pls provide 2 numbers");
      return msg.reply({ embeds: [errorembed] });
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
