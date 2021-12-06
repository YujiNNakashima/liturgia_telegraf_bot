const {Telegraf} = require('telegraf') 
const cron = require('node-cron');
const CronJob = require('cron').CronJob;

const generateHour = require('./generateTextHour')
const {  utcToZonedTime  } = require('date-fns-tz')

require('dotenv').config()

const bot = new Telegraf(process.env.BOT_TOKEN)
bot.start((ctx) => {

  ctx.reply(`Olá, ${ctx.from.first_name}, bem-vindo ao bot da liturgia das horas. v1.0.8`)
  const tz = 'America/Sao_Paulo'

  const job = new CronJob('0 4,9,12,15,18 * * 0-6', function() {
    const currentHour = utcToZonedTime(new Date(), tz).getHours()
    const currentPrayer = generateHour(currentHour)
    ctx.reply(`${currentHour}h - rezar ${currentPrayer}`)
  }, null, true, tz);

  job.start();


  const task = cron.schedule('0 4,9,12,15,18 * * 0-7', () => {
    const currentHour = utcToZonedTime(new Date(), tz).getHours()
    const currentPrayer = generateHour(currentHour)
    ctx.reply(`${currentHour}h - rezar ${currentPrayer}`)  }, {
    scheduled: true,
    timezone: tz
  });

  task.start();


}) 

bot.launch()

