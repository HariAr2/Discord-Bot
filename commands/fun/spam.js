const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('spam')
    .setDescription('Spam a word')
    .addStringOption(option =>
      option
        .setName('word')
        .setDescription('The word to spam')
        .setRequired(true)
    ),
  async execute(interaction) {
    const word = interaction.options.getString('word');
    const spamText = (word + ' ').repeat(20).trim();
    await interaction.reply(spamText);
  },
};