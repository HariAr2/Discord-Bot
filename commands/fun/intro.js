const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data:new SlashCommandBuilder()
		.setName('intro')
		.setDescription('introduce itself'),
	async execute(interaction) {
		await interaction.reply(`Hello there good ${interaction.user.username} my name is brook nice to meet you.`);
	},
};