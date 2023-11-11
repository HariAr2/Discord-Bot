const { SlashCommandBuilder } = require('discord.js');
const translate = require('@iamtraction/google-translate');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('translate')
    .setDescription('Translation')
    .addStringOption((option) =>
      option
        .setName('word')
        .setDescription('Word to translate')
        .setRequired(true)
    ),
  async execute(interaction) {
    const query = interaction.options.getString('word');
    if (!query) return await interaction.reply('Please enter a word to translate');

    try {
      const translated = await translate(query, { from:'en', to: 'fr' });
      await interaction.reply(translated.text);
    } catch (error) {
      console.error(error);
      await interaction.reply('An error occurred while translating the word.');
    }
  },
};
