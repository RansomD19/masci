const { MessageEmbed, MessageFlags } = require("discord.js");
const fetch = require("node-fetch");
const { get } = require("request-promise-native");
const request = require("request");
const errorembed = new MessageEmbed().setColor("#EE6352");
let day = "today";
let image;
module.exports = {
  name: "horoscope",
  name2: "Horoscope",
  usage: "m!horoscope [zodiac sign]",
  category: "science",
  aliases: ["horoscope"],
  execute(msg, args) {
    let zodiacs = [
      "capricorn",
      "aquarius",
      "pisces",
      "aries",
      "taurus",
      "gemini",
      "cancer",
      "leo",
      "virgo",
      "libra",
      "scorpio",
      "sagittarius",
      "capricorn",
    ];
    if (zodiacs.includes(args[0].toLowerCase())) {
    } else {
      errorembed.setDescription("Please provide a zodiac sign");
      errorembed.setFooter(
        " You can use `m!zodiac [month] [date]` to find your zodiac"
      );
      return msg.reply({ embeds: [errorembed] });
    }

    if (args[1] === "tomorrow") {
      day = "tomorrow";
    }
    if (args[1] === "yesterday") {
      day = "yesterday";
    }
    if (args[1] === "today") {
      day = "today";
    }
    fetch(
      `https://sameer-kumar-aztro-v1.p.rapidapi.com/?sign=${args[0]}&day=${day}`,
      {
        method: "POST",
        headers: {
          "x-rapidapi-host": "sameer-kumar-aztro-v1.p.rapidapi.com",
          "x-rapidapi-key":
            "0094e5d259mshb2b4540f4b5de06p168b8bjsnee8992d415cd",
        },
      }
    )
      .then((response) => response.json())
      .then((body) => {
        if (args[0] === "leo") {
          image =
            "https://cdn.discordapp.com/attachments/887573194947575868/887618271258480640/leo.png";
        }

        if (args[0] === "aquarius") {
          image =
            "https://cdn.discordapp.com/attachments/887573194947575868/887618127993667594/aquarius.png";
        }

        if (args[0] === "capricorn") {
          image =
            "https://cdn.discordapp.com/attachments/887619841031307274/887620013329088572/capricorn.png";
        }

        if (args[0] === "pisces") {
          image =
            "https://cdn.discordapp.com/attachments/887619841031307274/887620033411448892/pisces.png";
        }

        if (args[0] === "aries") {
          image =
            "https://cdn.discordapp.com/attachments/887619841031307274/887620009159983114/aries.png";
        }

        if (args[0] === "taurus") {
          image =
            "https://cdn.discordapp.com/attachments/887619841031307274/887620153766985748/taurus.png";
        }
        if (args[0] === "gemini") {
          image =
            "https://cdn.discordapp.com/attachments/887619841031307274/887620016453857280/gemini.png";
        }

        if (args[0] === "cancer") {
          image =
            "https://cdn.discordapp.com/attachments/887619841031307274/887620011718488064/cancer.png";
        }

        if (args[0] === "virgo") {
          image =
            "https://cdn.discordapp.com/attachments/887619841031307274/887620063308447774/virgo.png";
        }

        if (args[0] === "libra") {
          image =
            "https://cdn.discordapp.com/attachments/887619841031307274/887620028407631932/libra.png";
        }

        if (args[0] === "scorpio") {
          image =
            "https://cdn.discordapp.com/attachments/887619841031307274/887620043419037696/scorpio.png";
        }

        if (args[0] === "sagittarius") {
          image =
            "https://cdn.discordapp.com/attachments/887619841031307274/887620038989865000/sagittarius.png";
        }
        const embed = new MessageEmbed()
          .setThumbnail(image)
          .setTitle(`Horoscope - ${args[0]} for ${day}`)
          .setColor("#57A773")
          .setFields(
            { name: "Description", value: "\n" + body.description },
            { name: "Mood", value: body.mood },
            { name: "Lucky Colour", value: body.color },
            { name: "Lucky Number", value: body.lucky_number },
            { name: "Lucky Time", value: body.lucky_time },
            { name: "Compatibility", value: body.compatibility }
          )
          .setFooter(
            "You can check yesterdays and tomorrows too with m!horoscope [sign] yesterday/tomorrow"
          );
        msg.reply({ embeds: [embed] });
      })
      .catch((err) => {
        console.error(err);
      });
  },
};
