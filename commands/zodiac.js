const { MessageEmbed } = require("discord.js");

module.exports = {
  category: "science",
  name: "zodiac",
  name2: "Zodiacsign",
  aliases: ["zodiac", "zodiacsign"],
  usage: "m!zodiacsign [birth month] [birth day]",
  description: "Gives your zodiac sign based on your month and day",
  execute(msg, args) {
    const errorembed = new MessageEmbed().setColor("#EE6352");
    if (args.length === 2) {
    } else {
      errorembed.setDescription(
        "Please provide your `month and date` respectively, **example** m!zodiac 08 01 (august 1st)"
      );
      return msg.reply({ embeds: [errorembed] });
    }

    if (isNaN(args[0]) || isNaN(args[1])) {
      errorembed.setDescription(
        "Please provide your `month and date` respectively, **example** m!zodiac 08 01 (august 1st)"
      );
      return msg.reply({ embeds: [errorembed] });
    }

    if (args[0] < 0 || args[0] > 12) {
      errorembed.setDescription(
        "Please provide your `month and date` respectively, **example** m!zodiac 08 01 (august 1st)"
      );
      return msg.reply({ embeds: [errorembed] });
    }

    if (args[1] < 1 || args[1] > 31) {
      errorembed.setDescription(
        "Please provide your `month and date` respectively, **example** m!zodiac 08 01 (august 1st)"
      );
      return msg.reply({ embeds: [errorembed] });
    }

    let sign = zodiac(parseInt(args[1]), parseInt(args[0]));
    let image;
    if (sign === "Leo") {
      image =
        "https://cdn.discordapp.com/attachments/887573194947575868/887618271258480640/leo.png";
    }

    if (sign === "Aquarius") {
      image =
        "https://cdn.discordapp.com/attachments/887573194947575868/887618127993667594/aquarius.png";
    }

    if (sign === "Capricorn") {
      image =
        "https://cdn.discordapp.com/attachments/887619841031307274/887620013329088572/capricorn.png";
    }

    if (sign === "Pisces") {
      image =
        "https://cdn.discordapp.com/attachments/887619841031307274/887620033411448892/pisces.png";
    }

    if (sign === "Aries") {
      image =
        "https://cdn.discordapp.com/attachments/887619841031307274/887620009159983114/aries.png";
    }

    if (sign === "Taurus") {
      image =
        "https://cdn.discordapp.com/attachments/887619841031307274/887620153766985748/taurus.png";
    }
    if (sign === "Gemini") {
      image =
        "https://cdn.discordapp.com/attachments/887619841031307274/887620016453857280/gemini.png";
    }

    if (sign === "Cancer") {
      image =
        "https://cdn.discordapp.com/attachments/887619841031307274/887620011718488064/cancer.png";
    }

    if (sign === "Virgo") {
      image =
        "https://cdn.discordapp.com/attachments/887619841031307274/887620063308447774/virgo.png";
    }

    if (sign === "Libra") {
      image =
        "https://cdn.discordapp.com/attachments/887619841031307274/887620028407631932/libra.png";
    }

    if (sign === "Scorpio") {
      image =
        "https://cdn.discordapp.com/attachments/887619841031307274/887620043419037696/scorpio.png";
    }

    if (sign === "Sagittarius") {
      image =
        "https://cdn.discordapp.com/attachments/887619841031307274/887620038989865000/sagittarius.png";
    }
    if (args[0]) {
      const embed = new MessageEmbed()
        // <<<<<<< HEAD
        .setImage(image)
        .setTitle(`You Zodiac Sign!`)
        .setColor("#FFA400");
      msg.reply({ embeds: [embed] });
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
