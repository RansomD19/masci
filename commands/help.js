const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "help",
  name2: "Help",
  usage: "m!help (category) || m!help ",
  execute(msg, args, client) {
<<<<<<< HEAD
=======
    
>>>>>>> c745ef31b8fde88f52cf535644332b84bfe7636a
    if (
      args[0] === "maths" ||
      args[0] === "math" ||
      args[0] === "mathematics"
    ) {
      const embed = new MessageEmbed().setTitle("**Maths**");
      let desc = "";
      client.commands.forEach((cmd) => {
        if (cmd.category === "maths") {
          desc += `**${cmd.name}** | [*${cmd.aliases}*]\n \`${cmd.usage}\`\n\n`;
        }
      });
      embed.setDescription(desc);
<<<<<<< HEAD
      embed.setColor("#F7FFF7");
      msg.reply({ embeds: [embed] });
    } else if (args[0] === "sci" || args[0] === "science") {
=======
      embed.setColor("#F7FFF7")
      msg.reply({ embeds: [embed] });
    }
    else if (
      args[0] === "sci" ||
      args[0] === "science"
    ) {
>>>>>>> c745ef31b8fde88f52cf535644332b84bfe7636a
      const embed = new MessageEmbed().setTitle("**Science**");
      let desc = "";
      client.commands.forEach((cmd) => {
        if (cmd.category === "science") {
          desc += `**${cmd.name}** | [*${cmd.aliases}*]\n \`${cmd.usage}\`  \n\n`;
        }
      });
      embed.setDescription(desc);
      msg.reply({ embeds: [embed] });
<<<<<<< HEAD
    } else if (args[0] === "misc" || args[0] === "miscellanious") {
=======
    }
    else if (
      args[0] === "misc" ||
      args[0] === "miscellanious"
    ) {
>>>>>>> c745ef31b8fde88f52cf535644332b84bfe7636a
      const embed = new MessageEmbed().setTitle("**Misc**");
      let desc = "";
      client.commands.forEach((cmd) => {
        if (cmd.category === "misc") {
          desc += `**${cmd.name}** | [*${cmd.aliases}*]\n \`${cmd.usage}\`  \n\n`;
        }
      });
      embed.setDescription(desc);
      msg.reply({ embeds: [embed] });
<<<<<<< HEAD
    } else {
      //Math commands
      let ma = "";
      client.commands.forEach((cmd) => {
        if (cmd.category === "maths") {
          ma += `\n${cmd.name}`;
        }
      });
      //Science commands
      let sc = "";
      client.commands.forEach((cmd) => {
        if (cmd.category === "science") {
          sc += `\n${cmd.name}`;
        }
      });
      //Misc commands
      let m = "";
      client.commands.forEach((cmd) => {
        if (cmd.category === "misc") {
          m += `\n${cmd.name}`;
        }
      });
      const embed = new MessageEmbed()
        .setThumbnail(
          "https://cdn.discordapp.com/avatars/853681011308757042/28aba3295e149a01f90292b64f061a0c.webp?size=256"
        )
        .setTitle("Command List\n\n")
        .addFields(
          { name: "Maths", value: `\`\`\`${ma}\`\`\``, inline: true },
          { name: "Science", value: `\`\`\`${sc}\`\`\``, inline: true },
          { name: "Misc", value: `\`\`\`${m}\`\`\``, inline: true }
        )
        .setColor("#F7FFF7");
      msg.reply({ embeds: [embed] });
=======
    }else{
      //Math commands
      let ma = "";
      client.commands.forEach((cmd) => {
        if(cmd.category === "maths"){
          ma += `\n${cmd.name}`
        }
      })
      //Science commands
      let sc = "";
      client.commands.forEach((cmd) =>{
        if(cmd.category === "science"){
          sc += `\n${cmd.name}`
        }
      })
      //Misc commands
      let m = "";
      client.commands.forEach((cmd) => {
        if(cmd.category === "misc"){
          m += `\n${cmd.name}`
        }
      })
      const embed = new MessageEmbed()
      .setTitle("Command List")
      .addFields(
        {name:"Maths", value:`\`\`\`${ma}\`\`\``, inline:true},
        {name:"Science", value:`\`\`\`${sc}\`\`\``, inline:true},
        {name:"Misc", value:`\`\`\`${m}\`\`\``, inline:true}
      )
      .setColor("#F7FFF7")
      msg.reply({ embeds: [embed]});
>>>>>>> c745ef31b8fde88f52cf535644332b84bfe7636a
    }
  },
};
