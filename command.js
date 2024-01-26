const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');

const commands = require('./command.json');

const ReloadCommand = async (id, token) => {
    try{
        const rest = new REST({ version: '10' }).setToken(token);

        console.log('Started refreshing application (/) commands.');
    
        await rest.put(
            Routes.applicationCommands(id),
            { body: commands },
        );
    
        console.log('Successfully reloaded application (/) commands.');
    }
    catch(error){
        console.error(error);
    }
}

module.exports = {
    ReloadCommand
}