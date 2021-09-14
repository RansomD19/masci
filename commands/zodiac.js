const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "zodiac",
  name2: "Zodiacsign",
  aliases: ["zodiac", "zodiacsign"],
  usage: "m!zodiacsign [birth month] [birth day]",
  description: "Gives your zodiac sign based on your month and day",
  execute(msg, args) {
    if (args.length === 2) {
    } else
      return msg.reply(
        "Please provide your `month and date` respectively, **example** m!zodiac 08 01 (august 1st)"
      );

    if (isNaN(args[0]) || isNaN(args[1])) {
      return msg.reply(
        "Please provide your `month and date` respectively, **example** m!zodiac 08 01 (august 1st)"
      );
    }

    if (args[0] < 0 || args[0] > 12) {
      return msg.reply(
        "Please provide your `month and date` respectively, **example** m!zodiac 08 01 (august 1st)"
      );
    }

    if (args[1] < 1 || args[1] > 31) {
      return msg.reply(
        "Please provide your `month and date` respectively, **example** m!zodiac 08 01 (august 1st)"
      );
    }
    if (args[0]) {
      const embed = new MessageEmbed()
        .setTitle(`Welcome to the Club!`)
        .setColor("#FFA400")
        .setDescription(zodiac(parseInt(args[1]), parseInt(args[0])));
      msg.reply({ embeds: [embed] });

      // msg.reply(zodiac(parseInt(args[1]), parseInt(args[0])));
    }
  },
};

// ZODIAC
function zodiac(day, month) {
  var zodiac = [
    "",
    "Capricorn",
    "Aquarius",
    "Pisces",
    "Aries",
    "Taurus",
    "Gemini",
    "Cancer",
    "Leo",
    "Virgo",
    "Libra",
    "Scorpio",
    "Sagittarius",
    "Capricorn",
  ];
  var last_day = ["", 19, 18, 20, 20, 21, 21, 22, 22, 21, 22, 21, 20, 19];
  return day > last_day[month] ? zodiac[month * 1 + 1] : zodiac[month];
}
