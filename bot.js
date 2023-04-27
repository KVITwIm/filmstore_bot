const { Telegraf, Markup } = require('telegraf')

const bot = new Telegraf(token)

var searched_films = ["План Побега - фильм, про человека, который сбегает из тюрем за деньги."];
var films = ["Кто я? - Крутейший фильм про хакера.","Гарфилд - юмористический фильм про кота","Кремниевая Долина - сериал, про программиста, который создал уникальный алгоритм сжатие.","Джуманджи - герои фильма попали в игру и пытаются выбраться из нее.","План Побега - фильм, про человека, который сбегает из тюрем за деньги."];

bot.hears('Случайный Фильм', (ctx) => ctx.reply(`Ваш случайный фильм: ${films[Math.floor(Math.random() * films.length)]}`))

bot.command('start', (ctx) => {
    return ctx.reply(
      'Привет! Данный Telegram Bot поможет тебе найти новый фильм или дать названия фильма о котором мы сняли Tik-Tok!',
      Markup.keyboard([
        Markup.button.text('Случайный Фильм'),
        Markup.button.text('Поиск по номеру')
      ]).resize()
    )
  })

  bot.command('search', (ctx) => {
    var num = parseInt(ctx.message.text.replace(/\D+/g,""));
    if(num == 0){
      ctx.reply("Под данным номером нет фильма.")
    } else if(num > 1){
      ctx.reply("Под данным номером нет фильма.")
    } else if(num == num+1-1){
      ctx.reply(searched_films[num-1]);
    } else{
      ctx.reply("Вы не написали номер! Пример: /search 10")
    }
  })

bot.hears('Поиск по номеру', (ctx) => {
    ctx.reply("Легко! Введите /search (номер)");
  })

bot.launch()

process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))
