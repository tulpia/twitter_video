const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder().setName("quoi").setDescription("peak humour"),
  async execute(interaction) {
    await interaction.reply("Feur");
  },
};
