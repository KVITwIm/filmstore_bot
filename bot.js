const { Telegraf, Markup } = require('telegraf')

const bot = new Telegraf("5240172130:AAGqQoln6Q0GyMTWcLFCp2W-3gGCjElsuKY")

var searched_films = ["Детхул","бравл квасик"];
var films = ["Кто я? - Крутейший фильм про хакера.","Гарфилд - юмористический фильм"];

bot.hears('Случайный Фильм', (ctx) => ctx.reply(`Ваш случайный фильм: ${films[Math.floor(Math.random() * films.length)]}`))

bot.command('start', (ctx) => {
    return ctx.reply(
      'ПРивет лилгаалала',
      Markup.keyboard([
        Markup.button.text('Случайный Фильм'),
        Markup.button.text('Поиск по номеру')
      ]).resize()
    )
  })

  bot.command('search', (ctx) => {
    var num = parseInt(ctx.message.text.replace(/\D+/g,""));
    if(num == num+1-1){
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