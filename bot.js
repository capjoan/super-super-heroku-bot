const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.NTAzNTg2NzYzNDI4ODU1ODI5.Dq4wQg.NebnqCPJQ7EcuDZdZ67fEHJ7WYY);
