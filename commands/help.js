const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "help",
  name2: "Help",
  usage: "m!help (category) || m!help ",
  execute(msg, args, client) {
    // console.log(client.commands);
    // client.commands.forEach((cmd) => {
    //   // console.log(cmd);
    //   if (cmd.category === "maths") {
    //     console.log("math");
    //     console.log(cmd.name2);
    //   }

    //   if (cmd.category === "science") {
    //     console.log("Science");
    //     console.log(cmd.name2);
    //   }

    //   if (cmd.category === "misc") {
    //     console.log("Misc");
    //     console.log(cmd.name2);
    //   }
    // });
    
    if (
      args[0] === "maths" ||
      args[0] === "math" ||
      args[0] === "mathematics"
    ) {
      const embed = new MessageEmbed().setTitle("**Maths**");
      let desc = "";
      client.commands.forEach((cmd) => {
        if (cmd.category === "maths") {
          desc = desc + `**${cmd.name}** | [*${cmd.aliases}*]\n \`${cmd.usage}\`\n\n`;
        }
      });
      embed.setDescription(desc);
      embed.setColor("#F7FFF7")
      msg.reply({ embeds: [embed] });
    }
    if (
      args[0] === "sci" ||
      args[0] === "science"
    ) {
      const embed = new MessageEmbed().setTitle("**Science**");
      let desc = "";
      client.commands.forEach((cmd) => {
        if (cmd.category === "science") {
          desc = desc + `**${cmd.name}** | [*${cmd.aliases}*]\n \`${cmd.usage}\`  \n\n`;
        }
      });
      embed.setDescription(desc);
      msg.reply({ embeds: [embed] });
    }else{
      const embed = new MessageEmbed()
      .setTitle("Command List")
      msg.reply({ embeds: [embed]});
    }
  },
};
