const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('Dz Pro Gamers Community');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(NjA3MjY2NjczMzIxMzEyMjU3.XUXMzw.PUXu-6DDF7OUu9wtIoCf_lsv92s);
