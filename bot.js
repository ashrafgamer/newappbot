const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = ("%")
client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

client.on('message', message => {
  if (message.content.startsWith(prefix +"avatar")) {
if(!message.channel.guild) return;
      var mentionned = message.mentions.users.first();
  var client;
    if(mentionned){
        var client = mentionned; } else {
        var client = message.author;
    }
      const embed = new Discord.RichEmbed()
                         .addField('Requested by:', "<@" + message.author.id + ">")
      .setColor(000000)
      .setImage(`${client.avatarURL}`)
    message.channel.sendEmbed(embed);
  }
});
 
client.on('ready', () => {                           
client.user.setGame(`"%help%`,'https://www.twitch.tv/tarikrs');                                                                                                                                                                                                                                                                                                                                                                                                              client.user.setGame(`-help | On 20 Servers`,'https://www.twitch.tv/v5bz');
});          


// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
