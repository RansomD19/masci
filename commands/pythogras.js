const { MessageEmbed } = require("discord.js");
const errorembed = new MessageEmbed().setColor("#EE6352");

module.exports = {
  name: "pythogras",
  name2: "Pythogras",
  category: "maths",

  usage: "m!pythogras [side 1] [side 2]",
  description: "Returns the value of the hypotenuse of the sides given!",
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
      .setDescription(pythogras(parseInt(args[0]), parseInt(args[1])));
    msg.reply({ embeds: [embed] });
  },
};

// PYTHAGORAS
function pythogras(a, b) {
  let res = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
  if (res > 0) {
    return res.toFixed(2);
  } else {
    return Error;
  }
}
