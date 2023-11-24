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
      const translated = await translate(query, { from:'en', to: 'ko' });//language code that uses ISO 639-1 so 'ko'-korean 'en'-english 'ja'-japanese(google ISO 639-1 codes for languages)
      await interaction.reply(translated.text);
    } catch (error) {
      console.error(error);
      await interaction.reply('An error occurred while translating the word.');
    }
  },
};
