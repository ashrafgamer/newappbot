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
  if (message.content === '%help') {
      
    message.author.send(`
×=======================================×
             "prefix -> (%)"
×=======================================×
             " اوامر الادارة"
×=======================================×
📛 -> %bc {message} | لرسلل رسال لكل اعضاء سيرفر
📛 -> %Addrole {menton} {name role} | حتة تعطي احد رتبة
📛 -> %
×=======================================×
             "اوامر عامة"
×=======================================×
📛 -> %avatar | حتة تضهر لك صورا حسابك
📛 -> %server | حتة تضهر لك معلومات عن سيرفر
📛 -> %roles | حتة يضهر لك جميع اسماء رتب سيرفر
📛 -> %id | حتة تضهر لك معلومات عن حسابك
×=======================================×

Bot By | AsHraF#4347

×=======================================×
`);
    message.react('✉');
  }
});

client.on('ready', () => {
client.user.setGame(`"%help"`,'https://www.twitch.tv/wlccc'); 
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


client.on('message', message => { //by Honrar
 if (message.content.startsWith("%server")) { //by Honrar
 let embed = new Discord.RichEmbed() //by Honrar
.setAuthor(message.author.username, message.guild.iconrURL) //by Honrar
 .addField('**====>   معلومات السيرفر   <====**') //by Honrar
.addField('اسم السيرفر | 🏁',`**[ ${message.guild.name} ]**`) //by Honrar
.addField('عدد اعضاء السيرفر | 👤',`**[ ${client.users.size} ]**`) //by Honrar
.addField('عدد بوتات السيرفر | 🤖',`**[ ${message.guild.members.filter(m=>m.user.bot).size} ]**`) //by Honrar
.addField('عدد رومات السيرفر | 📚',`**[ ${message.guild.channels.size} ]**`) //by Honrar
.addField("**عدد رتب السيرفر | 🔐**",`**[ ${message.guild.roles.size} ]**`) //by Honrar
.setColor('RANDOM') //by Honrar
  message.channel.sendEmbed(embed); //by Honrar
    } //by Honrar
}); //by Honrar

client.on('message', message => {
   if (message.content === "%id") {
   let embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setThumbnail(message.author.avatarURL)
  .addField("Name:",`${message.author.username}`, true)
  .addField('Discrim:',"#" +  message.author.discriminator, true)
  .addField("ID:", message.author.id, true)
  .addField("Create At:", message.author.createdAt, true)
     
     
  message.channel.sendEmbed(embed);
    }
});

client.on('message', message => { 
    var prefix = "%";
    if (message.author.boss) return;
    if (!message.content.startsWith(prefix)) return;
    let command = message.content.split(" ")[0];
    command = command.slice(prefix.length);
    if (command == "Roleadd") {
    if (!message.channel.guild) return;
    if(!message.guild.member(message.author).hasPermission("MANAGE_ROLES")) return message.reply("**:no_entry_sign:انت لا تملك صلاحيات **").then(msg => msg.delete(5000));;
    if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply("البوت لايملك صلاحيات ").then(msg => msg.delete(5000));;
    let user = message.mentions.users.first();
    if (message.mentions.users.size < 1) return message.reply('**ضع منشن الشخص!!**').then(msg => {msg.delete(5000)});
    let MRole = message.content.split(" ").slice(2).join(" ");
    if(!MRole)return message.reply("يجب عليك وضع اسم الرتبة").then(msg => {msg.delete(5000)});
    message.guild.member(user).addRole(message.guild.roles.find("name", MRole));
    message.reply('*** Done :white_check_mark:  ***').then(msg => {msg.delete(10000)});
    }
    });

client.on('message', message => {
    var prefix = "%";
    
        if (message.author.id === client.user.id) return;
        if (message.guild) {
       let embed = new Discord.RichEmbed()
        let args = message.content.split(' ').slice(1).join(' ');
    if(message.content.split(' ')[0] == prefix + 'bc') {
        if (!args[1]) {
    message.channel.send("**%bc <message>**");
    return;
    }
            message.guild.members.forEach(m => {
       if(!message.member.hasPermission('ADMINISTRATOR')) return;
                var bc = new Discord.RichEmbed()
                .addField('» السيرفر :', `${message.guild.name}`)
                .addField('» المرسل : ', `${message.author.username}#${message.author.discriminator}`)
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

client.on('message', message => {
    if (message.content === "%roles") {
        var roles = message.guild.roles.map(roles => `${roles.name}, `).join(' ')
        const embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .addField('الرتب:',`**[${roles}]**`)
        message.channel.sendEmbed(embed);
    }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
