const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("twittervideo")
    .setDescription("convert twitter video trash player to good player")
    .addStringOption((option) =>
      option.setName("url").setDescription("ton url de merde").setRequired(true)
    ),
  async execute(interaction) {
    const url = interaction.options.getString("url") ?? "BESOIN D'UNE URL";

    // Récupération de l'URL Twitter (tout ce qui est après le "twitter.com")
    const matchRegex = url.match(
      /(http(s)?:\/\/(www.)?twitter.com\/(([@a-zA-Z0-9_-]+)\/status\/([@a-zA-Z0-9]+))\/?)/
    );

    if (matchRegex.length && matchRegex[4] && matchRegex[4].length) {
      await interaction.reply(`https://fxtwitter.com/${matchRegex[4]}`);
    } else {
      await interaction.reply("Url non reconnue bouhouhou");
    }
  },
};
