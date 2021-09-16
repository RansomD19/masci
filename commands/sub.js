const { MessageEmbed } = require("discord.js");
const errorembed = new MessageEmbed().setColor("#EE6352");

module.exports = {
  name: "sub",
  name2: "subtract",
  category: "maths",

  usage: "m!subtract [numebrs to be subtracted separated by spaces]",
  dessciption: "Subtracts the numbers given!",
  aliases: ["sub", "subtract"],
  execute(msg, args) {
    if (args.length < 2) {
      errorembed.setDescription("Please provide at least 2 numbers");
      return msg.reply({ embeds: [errorembed] });
    } else {
    }

    let res = args[0] * 2;

    args.forEach((num) => {
      res = res - parseInt(num);
    });

    const embed = new MessageEmbed()
      .setTitle(`Result`)
      .setColor("#57A773")
      .setDescription(res.toString());
    msg.reply({ embeds: [embed] });
  },
};
