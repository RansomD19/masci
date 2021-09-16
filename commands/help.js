const { MessageEmbed } = require("discord.js");
const pagination = require("discord.js-pagination");

module.exports = {
  name: "help",
  name2: "Help",
  description: "Your looking at it ",
  execute(msg, client, args) {
    let cmds = [
      "add",
      // "aspeed",
      // "binary",
      // "divide",
      // "help",
      // "herons",
      // "iss",
      // "mcstatus",
      // "multiply",
      // "ping",
      // "pythogras",
      // "sub",
      // "zodiac",
    ];

    let al = [
      { cmd: "animeinfo", alias: "ai" },
      { cmd: "animelist", alias: "al" },
      { cmd: "animelist", alias: "alist" },
      { cmd: "animeopening", alias: "aop" },
      { cmd: "animequestion", alias: "aq" },
      { cmd: "animequote", alias: "aquote" },
      { cmd: "avatar", alias: "av" },
      { cmd: "create-channel", alias: "ch" },
      { cmd: "delete-channel", alias: "dc" },
    ];
    if (!args.length) {
      // const cmds = `||cyclo go brr ** returns a random response ** \ncyclo r-add ** Add your own response to cyclo go brr**\ncyclo ping ** return your ping**\ncyclo ** just to annoy the bot ;))**\ncyclo purge {numberOfMsg} ** deletes the number of messages given**\ncyclo kick @User ** kicks the user mentioned**\n cyclo gif {search term} **provides a gif for the search term given** \n cyclo dm {text} **dm's the text given** \n cyclo channel-create {channel name} **Creates a channel with the given name** \n cyclo serverstats **Gives the stats of that server** \n cyclo spam **Spams with you** \n cyclo spam-go {number of msgs} **Spam's a message given number of times**||`;
      // msg.channel.send(`**Help yourselves** \n ${cmds}`);
      let emoji = ["⬅️", "➡️"];
      const timeout = "25000";

      const bmed1 = new MessageEmbed().setTitle("Help").setColor("BLUE");
      const bmed2 = new MessageEmbed().setTitle("Help").setColor("BLUE");
      const bmed3 = new MessageEmbed().setTitle("Help").setColor("BLUE");
      const bmed4 = new MessageEmbed().setTitle("Help").setColor("BLUE");
      const bmed5 = new MessageEmbed().setTitle("Help").setColor("BLUE");
      let pages = [bmed1];

      for (i = 0; i < cmds.length; i++) {
        console.log(cmds[i]);
        if (i > 9) {
          pages = [bmed1, bmed2];
        }
        if (i > 19) {
          pages = [bmed1, bmed2, bmed3];
        }
        if (i > 29) {
          pages = [bmed1, bmed2, bmed3, bmed4];
        }
        if (i > 39) {
          pages = [bmed1, bmed2, bmed3, bmed4, bmed5];
        }

        // console.log(client.commands.get(cmds[i]).name);
        if (i < 10) {
          bmed1.addField(
            "`" + client.commands.get(cmds[i]).name2 + "`",
            client.commands.get(cmds[i]).description
          );
        } else if (i > 9 && i < 20) {
          bmed2.addField(
            "`" + client.commands.get(cmds[i]).name2 + "`",
            client.commands.get(cmds[i]).description
          );
        } else if (i > 19 && i < 30) {
          bmed3.addField(
            "`" + client.commands.get(cmds[i]).name2 + "`",
            client.commands.get(cmds[i]).description
          );
        } else if (i > 29 && i < 40) {
          bmed4.addField(
            "`" + client.commands.get(cmds[i]).name2 + "`",
            client.commands.get(cmds[i]).description
          );
        } else if (i > 39 && i < 50) {
          bmed5.addField(
            "`" + client.commands.get(cmds[i]).name2 + "`",
            client.commands.get(cmds[i]).description
          );
        }
      }
      pagination(msg, pages, emoji, timeout);
    } else if (args[0]) {
      if (cmds.includes(args[0].toLowerCase())) {
        cmds.find((item) => {
          if (item === args[0].toLowerCase()) {
            const bmed = new MessageEmbed()
              .setTitle(client.commands.get(item).name2)
              .setColor("BLUE")
              .addField("Description", client.commands.get(item).description)
              .addField("Usage", "`" + client.commands.get(item).usage + "`");

            if (client.commands.get(item).options) {
              bmed.addField("Options", "ㅤ");
              let options = client.commands.get(item).options;
              let cmd = client.commands.get(item);
              for (i = 0; i < options.length; i++) {
                bmed.addField(
                  "`" + options[i].name + "`",
                  `**Description**: ${cmd.options[i].description} \n **Usage**: ${cmd.options[i].usage}`
                );
              }
            }

            if (client.commands.get(item).aliases) {
              bmed.addField("Aliases", client.commands.get(item).aliases);
            }
            msg.reply({ embeds: [bmed] });
          } else {
            return;
          }
        });
      }
    }
  },
};
