const { MessageEmbed } = require("discord.js");
const errorembed = new MessageEmbed().setColor("#EE6352");

module.exports = {
  name: "divide",
  name2: "Divide",
  usage: "m!divide [number 1] [number 2]",
  description: "Divides the 2 numbers given!",
  execute(msg, args) {
    if (args.length === 2) {
    } else {
      errorembed.setDescription("Please provide 2 numbers");
      return msg.reply({ embeds: [errorembed] });
    }
    const embed = new MessageEmbed()
      .setTitle(`Result`)
      .setColor("#57A773")
      .setDescription(aspeed(parseInt(args[0]), parseInt(args[1])));
    msg.reply({ embeds: [embed] });
  },
};

function aspeed(dist, time) {
  let res = dist / time;
  return res.toString();
}
