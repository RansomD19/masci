const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "herons",
  name2: "Herons",
  usage: "m!herons [side 1] [side 2] [side 3]",
  description: "Finds the area of the triangle using the herons formula!",
  execute(msg, args) {
    if (args.length === 3) {
    } else return msg.reply("Please provide 3 numbers");

    if (isNaN(args[0]) || isNaN(args[1]) || isNaN(args[2])) {
      msg.channel.send("Pls provide 3 numbers");
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
      return msg.channel.send("Pls make sure the a + b > c and a + c > b");
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
