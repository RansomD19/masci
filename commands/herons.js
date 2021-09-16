const { MessageEmbed } = require("discord.js");
const errorembed = new MessageEmbed().setColor("#EE6352");

module.exports = {
  name: "herons",
  name2: "Herons",
  category: "maths",

  usage: "m!herons [side 1] [side 2] [side 3]",
  description: "Finds the area of the triangle using the herons formula!",
  execute(msg, args) {
    if (args.length === 3) {
    } else {
      errorembed.setDescription("Please provide 3 numbers");
      return msg.reply({ embeds: [errorembed] });
    }

    if (isNaN(args[0]) || isNaN(args[1]) || isNaN(args[2])) {
      errorembed.setDescription("Pls provide 3 numbers");
      return msg.reply({ embeds: [errorembed] });
    }

    if (
      parseInt(args[0]) + parseInt(args[1]) > parseInt(args[2]) &&
      parseInt(args[0]) + parseInt(args[2]) > parseInt(args[1])
    ) {
      console.log(parseInt(args[0]), parseInt(args[1]), parseInt(args[2]));
      const embed = new MessageEmbed()
        .setTitle(`Result`)
        .setColor("#57A773")
        .setDescription(
          herons(
            parseInt(args[0]),
            parseInt(args[1]),
            parseInt(args[2])
          ).toString()
        );
      msg.reply({ embeds: [embed] });
    } else {
      errorembed.setDescription("Pls make sure the a + b > c and a + c > b");
      msg.reply({ embeds: [errorembed] });
    }
  },
};

// HERONS FORMULA
function herons(a, b, c) {
  if (a + b > c) {
    s = (a + b + c) / 2;
    ar = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    return ar.toFixed(2);
  } else {
    return; //impossible to calculate
  }
}
