const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'hi') {
    	message.reply('hii');
  	}
});

client.on('ready', () => {                           
client.user.setGame(`"%help"`,'https://www.twitch.tv/tarikrs');                                                                                                                                                                                                                                                                                                                                                                                                                             client.user.setGame(`-help | On 20 Servers`,'https://www.twitch.tv/v5bz');
});          

client.on('message', message => {
     if (message.content === "") {
message.author.send("**%help**" + `  **
-ash
 

**`);
    }
});     


// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
