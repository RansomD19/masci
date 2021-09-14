const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "add",
  name2: "Add",
  usage: "m!add [numbers to be added separated by spaces]",
  description: "Adds all the numbers given!",
  execute(msg, args) {
    if (args.length < 2) {
      return msg.reply("Please provide at least 2 numbers");
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
