```markdown

 My Simple Discord Bot with Slash Commands

  
 Description:

This is a simple Discord bot that performs basic functions in your Discord server using slash (/) commands. It's designed to be easy to use and a great starting point for building more complex bots with slash commands.

 
 Features: 
 
- [ /hi ] Command 1: Says Hello.
- [ /intro ] Command 2: Introduces itself.
- [ /server ] Command 3: Describes the server details.
- [ /user ] Command 4: Describes info about the user. 
- [ /bye ] Command 5: Says Bye.
- [ /spam ] Command 6: Spams a Word for 20 times.
- [ /translate ] Command 7: Translate a word from English to French

 Getting Started:

  Prerequisites

- [Node.js](https://nodejs.org/) installed on your system.
- A Discord bot token. You can create a bot and obtain its token from the [Discord Developer Portal](https://discord.com/developers/applications).
```
  Installation

1. Clone this repository to your local machine: 

   ```bash
   git clone https://github.com/yourusername/your-discord-bot.git
   ```

2. Navigate to the bot's directory:

   ```bash
   cd your-discord-bot
   ```


3. Create a `.json` file in the project root and add your Discord bot token:

   ```
   DISCORD_BOT_TOKEN=your-bot-token-here
   ```

### Usage

1. Start the bot:

   ```bash
   node index.js
   node deploy-commands.js
   ```

2. The bot will be online in your Discord server and ready to respond to slash commands.

### Slash Commands

To interact with the bot, simply type `/` in the chat and select the appropriate slash command:

- Use `/hi` to say hello.
- Use `/bye` to say bye.

### Configuration

You can customize the bot's behavior by editing the `config.json` file. 

```json
{
  "clientId": "THE_CLIENT_ID",
  "token": "THE_TOKEN_ID _OF_THE_BOT"
}
```

### Result

This is how the bot will be once it is finished
![OUTPUT](https://github.com/HariAr2/Discord-Bot/blob/main/bot.png)


### Contribute

If you'd like to contribute to this project, feel free to fork the repository, make your changes, and submit a pull request.


## Acknowledgments

- Thanks to the [Discord.js](https://discord.js.org/) library for making it easy to build Discord bots with slash commands.

Happy Botting with Slash Commands!


```
By
    -Hari Aravindh
```
