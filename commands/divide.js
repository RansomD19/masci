const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "divide",
  name2: "Divide",
  usage: "m!divide [number 1] [number 2]",
  description: "Divides the 2 numbers given!",
  execute(msg, args) {
    if (args.length === 2) {
    } else {
      msg.reply("Please provide 2 numbers");
    }
    const embed = new MessageEmbed()
      .setTitle(`Your answer!`)
      .setColor("#57A773")
      .setDescription(aspeed(parseInt(args[0]), parseInt(args[1])));
    msg.reply({ embeds: [embed] });
  },
};

function aspeed(dist, time) {
  let res = dist / time;
  return res.toString();
}
