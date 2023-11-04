const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data:new SlashCommandBuilder()
		.setName('bye')
		.setDescription('says bye'),
	async execute(interaction) {
		await interaction.reply('Ohh Oyasumi!!');
	},
};