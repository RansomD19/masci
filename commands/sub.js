const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "sub",
  name2: "subtract",
  usage: "m!subtract [numebrs to be subtracted separated by spaces]",
  dessciption: "Subtracts the numbers given!",
  aliases: ["sub", "subtract"],
  execute(msg, args) {
    if (args.length < 2) {
      return msg.reply("Please provide at least 2 numbers");
    } else {
    }

    let res = args[0] * 2;

    args.forEach((num) => {
      res = res - parseInt(num);
    });

    const embed = new MessageEmbed()
      .setTitle(`Your answer!`)
      .setColor("#57A773")
      .setDescription(res.toString());
    msg.reply({ embeds: [embed] });
  },
};
