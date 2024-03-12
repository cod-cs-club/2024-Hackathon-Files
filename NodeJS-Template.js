import { Client, GatewayIntentBits } from 'discord.js'

// Initialize bot with it's intents/permissions
const bot = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMessageReactions,
    GatewayIntentBits.GuildMembers
  ]
})

// Triggered when bot is ready
bot.on('ready', () => {
  console.log(`Bot logged in as: ${bot.user.tag}`)
})

// Triggered when anyone sends a message
bot.on('messageCreate', async (message) => {
  if (message.author.bot) return // If sender is a bot, ignore it

  // If message starts with 'hello', bot will respond
  if (message.content.startsWith('hello')) {
    message.channel.send(`Hello ${message.author.username}! I am a basic Discord bot.`)
  }
})

bot.login('BOT_TOKEN_HERE')