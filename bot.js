//Автор данного бота - Бикбай (bicbai.ru)
const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json");


var canalbot = 'бот-чат'

client.on('ready', () => {
  console.log(`Бот авторизировался как ${client.user.tag}!`);
});





client.on('message', message => {//Пишет текст в чат
	if(message.author.id !== config.ownerID) return;//админ
    if(message.content.startsWith(config.prefix + 'лаф')) {
        message.channel.sendMessage('Создатель данного сервера, пускает свой слюнки по тянкам, только это секрет :)');
     }
});
//---------------------------- Команды --------------------------------
client.on('message', message => {//Пишет текст в чат
    if(message.author === client.user) return;
    if(message.content.startsWith(config.prefix + 'автор')) {
        message.channel.sendMessage('Мой разработчик, это NiProject :)');
     }
});

client.on('message', message => {//Пишет текст в чат
  if(message.author === client.user) return;
  if(message.content.startsWith(config.prefix + 'команды')) {
      message.channel.sendMessage('!автор - автор бота, то есть мы; !скачать - можно скачать сборку; n>play [трек] - запустить музыку;');
   }
});

client.on('message', message => {//Пишет текст в чат
    if(message.author === client.user) return;
    if(message.content.startsWith(config.prefix + 'скачать')) {
        message.channel.sendMessage('Скачать Scary-Tech — https://yadi.sk/d/bY9E9CJKkG3OHQ');
     }
});

//---------------------------- Ответы --------------------------------
client.on('message', msg => {//Отвечает игроку
  if (msg.content === config.prefix + 'привет') {
    msg.reply('привет :)');
  }
});

client.on('message', msg => {//Отвечает игроку
  if (msg.content === config.prefix + 'пока') {
    msg.reply('пока :(');
  }
});

//------------------------ Сообщения от бота -------------------------------
// Создать слушателя событий для новых членов гильдии
client.on('guildMemberAdd', member => {
  // Отправьте сообщение на указанный канал на сервере:
  const channel = member.guild.channels.find('main', canalbot);
  // Не делайте ничего, если канал не найден на этом сервере
  if (!channel) return;
  // Отправить сообщение, указав участника
  channel.send(`Добро пожаловать, ${member}`);
});

// Создать слушателя событий для новых членов гильдии
client.on('guildMemberRemove', member => {
  // Отправьте сообщение на указанный канал на сервере:
  const channel = member.guild.channels.find('main', canalbot);
  // Не делайте ничего, если канал не найден на этом сервере
  if (!channel) return;
  // Отправить сообщение, указав участника
  channel.send(`Очень жаль, но ${member} покинул сервер!`);
});
//--------------------------------------------------------------------

var i = 0;
var timer = client.setInterval(function () {    
    var gamePresence = ["!лаф", "!скачать"];//каждое слово через запятую - отдельный статус
    client.user.setPresence({ game: { name: gamePresence[i%gamePresence.length], type: 1, url: "https://vk.com/ni.minecraft" } });
    i++;
},5000)//время

client.login(config.token);