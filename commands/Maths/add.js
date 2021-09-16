const { MessageEmbed } = require("discord.js");
const errorembed = new MessageEmbed().setColor("#EE6352");

module.exports = {
  name: "add",
  name2: "Add",
  usage: "m!add [numbers to be added separated by spaces]",
  description: "Adds all the numbers given!",
  execute(msg, args) {
    if (args.length < 2) {
      errorembed.setDescription("Please provide at least 2 numbers");
      return msg.reply({ embeds: [errorembed] });
    } else {
    }

    let res = 0;

    args.forEach((num) => {
      res = res + parseInt(num);
    });
    const embed = new MessageEmbed()
      .setTitle(`Result`)
      .setColor("#57A773")
      .setDescription(res.toString());
    msg.reply({ embeds: [embed] });
  },
};
