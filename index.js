const {Telegraf} = require('telegraf') 
const CronJob = require('cron').CronJob;
const generateHour = require('./generateTextHour')
require('dotenv').config()

const bot = new Telegraf(process.env.BOT_TOKEN) 

bot.start((ctx) => {
  ctx.reply(`Olá, ${ctx.from.first_name}, bem-vindo ao bot da liturgia das horas`)
  
  const job = new CronJob('0 4,9,12,15,18 * * * ', function() {
    const currentHour = new Date().getHours()
    const currentPrayer = generateHour(currentHour)
    
    ctx.reply(`${currentHour}: rezar ${currentPrayer}`)
  }, null, true, 'America/Sao_Paulo');

  job.start();

}) 

bot.launch()

process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))
