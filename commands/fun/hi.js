const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('hi')
		.setDescription('replies with hello!'),
	async execute(interaction) {
		await interaction.reply('hello!');
	},
};