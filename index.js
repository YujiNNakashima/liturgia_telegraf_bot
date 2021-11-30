const {Telegraf} = require('telegraf') 
const CronJob = require('cron').CronJob;
const generateHour = require('./generateTextHour')
const {  zonedTimeToUtc } = require('date-fns-tz')

require('dotenv').config()

const bot = new Telegraf(process.env.BOT_TOKEN) 
bot.start((ctx) => {

  ctx.reply(`Olá, ${ctx.from.first_name}, bem-vindo ao bot da liturgia das horas`)
  const tz = 'America/Sao_Paulo'

  const job = new CronJob('0 4,9,12,15,18 * * *', function() {
    const currentHour = zonedTimeToUtc(new Date(), tz).getHours()
    const currentPrayer = generateHour(currentHour)
    ctx.reply(`${currentHour}h: rezar ${currentPrayer}`)
  }, null, true, tz);

  job.start();

}) 

bot.launch()

process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))
