import { Client, GatewayIntentBits } from 'discord.js'

const bot = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMessageReactions,
    GatewayIntentBits.GuildMembers
  ]
})

bot.on('ready', () => {
  console.log('Bot is ready!')
})

bot.on('messageCreate', async (message) => {
  if (message.author.bot) return // If sender is a bot, ignore it

  if (message.content.startsWith('hello')) {
    message.reply('Hello there!')
  }
})

bot.login('BOT_TOKEN_HERE')