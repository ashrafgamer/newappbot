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


client.on('ready', () => {
client.user.setGame(`"%help"`,'https://www.twitch.tv/v5bz'); 
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
 

client.on('message', message => {
    if (message.author.id === client.user.id) return;
    if (message.guild) {
   let embed = new Discord.RichEmbed()
    let args = message.content.split(' ').slice(1).join(' ');
if(message.content.split(' ')[0] == prefix + 'bc') {
    if (!args[1]) {
return;
}
        message.guild.members.forEach(m => {
   if(!message.member.hasPermission('ADMINISTRATOR')) return;
            var bc = new Discord.RichEmbed()
            .addField(' » الرسالة : ', args)
            .setColor('#ff0000')
            // m.send(`[${m}]`);
            m.send(`${m}`,{embed: bc});
        });
    }
    } else {
        return;
    }
});
client.on('guildMemberAdd', member => {
    var embed = new Discord.RichEmbed()
    .setAuthor(member.user.username, member.user.avatarURL)
    .setThumbnail(member.user.avatarURL)
    .setTitle(`عضو جديد`)
    .setDescription(`اهلا بك في السيرفر`)
    .addField(' :bust_in_silhouette:  انت رقم',`**[ ${member.guild.memberCount} ]**`,true)
    .setColor('GREEN')
    .setFooter('X-Bot', 'https://cdn.discordapp.com/avatars/512898000088203274/a551b545cad7360bbdf9fb138db31297.png?size=2048')

var channel =member.guild.channels.find('name', 'welcome')
if (!channel) return;
channel.send({embed : embed});
});

client.on('guildMemberRemove', member => {
    var embed = new Discord.RichEmbed()
    .setAuthor(member.user.username, member.user.avatarURL)
    .setThumbnail(member.user.avatarURL)
    .setTitle(`خرج عضو`)
    .setDescription(`الى اللقاء...`)
    .addField(':bust_in_silhouette:   تبقي',`**[ ${member.guild.memberCount} ]**`,true)
    .setColor('RED')
    .setFooter(`X-Bot`, 'https://cdn.discordapp.com/avatars/512898000088203274/a551b545cad7360bbdf9fb138db31297.png?size=2048')

var channel =member.guild.channels.find('name', 'welcome')
if (!channel) return;
channel.send({embed : embed});
});

 client.on('message', msg => {
	var prefix = '%';
	if(msg.content.startsWith(prefix + 'server')) {
let embed = new Discord.RichEmbed()
.setThumbnail(msg.guild.iconURL)
.addField('Guild Name', msg.guild.name, true)
.addField('Guild ID', msg.guild.id, true)
.addField('Guild MemberCount', msg.guild.memberCount, true)
.addField('Guild Owner', msg.guild.owner, true)
.addField('Guild Channels', msg.guild.channels.size, true)
.addField('Guild Roles', msg.guild.roles.size, true)
.addField('Guild Created At',`${moment(msg.guild.createdAt).format('D/M/YYYY h:mm a')} **\n** \`${moment(msg.guild.createdAt).fromNow()}\``, true)
.addField('Guild Afk Room', msg.guild.afkChannel, true)
msg.channel.sendEmbed(embed);
	}
});

 

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
