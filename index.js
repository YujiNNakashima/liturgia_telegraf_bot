const {Telegraf} = require('telegraf') 
const CronJob = require('cron').CronJob;
require('dotenv').config()

const bot = new Telegraf(process.env.BOT_TOKEN) 
bot.start((ctx) => {
  ctx.reply(`Olá, ${ctx.from.first_name}, bem-vindo ao bot da liturgia das horas`)
  
  const job = new CronJob('* * * * * *', function() {
    ctx.reply('Welcome')
  }, null, true, 'America/Sao_Paulo');

  job.start();

}) 
bot.hears('hi', (ctx) => ctx.reply('Hey iiiii'))





bot.launch() // start

process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))


