const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "multiply",
  name2: "Multiply",
  usage: "m!multply [numbers to be multiplied separated by spaces",
  description: "Multiplies the numbers given",
  execute(msg, args) {
    if (args.length < 2) {
      return msg.reply("Please provide at least 2 numbers");
    } else {
    }

    let res = args[0];
    let nums = args.splice(1);

    nums.forEach((num) => {
      res = res * parseInt(num);
    });

    const embed = new MessageEmbed()
      .setTitle(`Result`)
      .setColor("#57A773")
      .setDescription(res.toString());
    msg.reply({ embeds: [embed] });
  },
};
