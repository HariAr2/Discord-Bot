const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data:new SlashCommandBuilder()
		.setName('user')
		.setDescription('information about user'),
	async execute(interaction) {
		await interaction.reply(`This command was run by ${interaction.user.username},who joined on ${interaction.member.joinedAt}.`);
	},
};  
