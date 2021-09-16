const { MessageEmbed } = require("discord.js");
const errorembed = new MessageEmbed().setColor("#EE6352");

module.exports = {
  name: "binary",
  name2: "Binary",
  usage: "m!binary [text]",
  category: "maths",

  description: "Changes the given text from english to binary!",
  execute(msg, args) {
    let sentence = args.slice(0).join(" ");

    binary = "";
    for (i = 0; i < sentence.length; i++) {
      var e = sentence[i].charCodeAt(0);
      var s = "";
      do {
        var a = e % 2;
        e = (e - a) / 2;
        s = a + s;
      } while (e != 0);
      while (s.length < 8) {
        s = "0" + s;
      }
      binary += s + " ";
    }
    const embed = new MessageEmbed()
      .setTitle(`Translation`)
      .setColor("#FFA400")
      .setDescription("```" + binary + "```");
    msg.reply({ embeds: [embed] });
  },
};
