import discord

# Define your intents
intents = discord.Intents.default()

# Initialize the bot client with intents
client = discord.Client(intents=intents)

# Channel ID where the bot will respond
channel_id = 1199907582307999795 #change to whatever channel ID you're on

@client.event
async def on_ready():
    # Find the channel object by ID
    channel = client.get_channel(channel_id)
    if channel:
        # Send a message to the channel
        await channel.send("Bot is ready!")

    print(f'We have logged in as {client.user}')

@client.event
async def on_message(message):
    # Check if the message is in the specified channel and not sent by the bot itself
    if message.channel.id == channel_id and message.author != client.user:
        # Respond to the message
        await message.channel.send(f'Hello {message.author.mention}! I am a basic Discord bot.')

# Run the bot with your Discord bot token
client.run('MTIwMDE2MDE3MTk2MDMxNTkyNA.GdkNY5.vBeQWUlJaaCDb17c6OJNdt-RVF36FpBWY3n3uY')
