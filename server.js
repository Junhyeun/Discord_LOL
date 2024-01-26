const { Client, GatewayIntentBits, Partials } = require('discord.js');
const Command = require('./command');
require('dotenv').config();

const id_bot = process.env.BOT_ID;
const token_bot = process.env.BOT_TOKEN;

Command.ReloadCommand(id_bot, token_bot);

const client = new Client({ intents: [GatewayIntentBits.Guilds], partials: [Partials.Channel] });

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('interactionCreate', async interaction => {
    if(!interaction.isCommand()) return;

    if(interaction.commandName === 'user'){
        await interaction.reply('Pong!');
    }
    else{
        await interaction.reply('등록되지 않은 명령어입니다.');
    }
});

client.login(token_bot);