module.exports = {
  name: "ping",
  name2: "Ping",
  category: "misc",
  usage: "m!ping",
  description: "Gets your current ping!",
  execute(msg, args) {
    msg.channel.send("Pinging to Servers....").then((message) => {
      message.edit(
        "```Ping: " + (message.createdTimestamp - msg.createdTimestamp + "```")
      );
    });
  },
};
