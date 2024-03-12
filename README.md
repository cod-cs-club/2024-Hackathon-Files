# 2024 COD Hackathon Files

See the `NodeJS-Template.js` or `Python-Template.py` file to get a simple bot template.

Both templates show how to initialize a Discord bot with the most commonly needed intentions, and how to listen to events like 'on ready' and 'on message'.

Below are instructions for initializing a simple Discord Bot project in both languages.

# Node.js

Step 1. Download and install [Node.js](https://nodejs.org/en).

Step 2. Create a new folder, and open a terminal window (Command prompt, Powershell, etc) in the new folder.
> TIP: Pressing ``CTRL +  ` `` in Visual Studio Code will open the terminal in the currently open folder.

Step 3. Initialize a new Node.js project using the `npm init` command. Answer the prompts accordingly.

Step 4. Run the command `npm install discord.js` to install the Discord.js library.

Step 5. Create a `index.js` file, and paste the code from the `NodeJS-Template.js` file from this repository into it.

Step 6. On the last line of the `index.js` file, replace "BOT_TOKEN_HERE" text with the actual bot token provided to your team.
```js
bot.login('BOT_TOKEN_HERE')
```

Step 7. Run the command `node index.js` to run your code and start the bot!

# Python
Step 1. Download and install [Python](https://www.python.org/downloads/).

Step 2. Create a new folder, and open a terminal window (Command prompt, Powershell, etc) in the new folder.
> TIP: Pressing ``CTRL +  ` `` in Visual Studio Code will open the terminal in the currently open folder.

Step 3: Type `pip install discord.py` into the terminal to install Discord.py

Step 4: Create a file called `bot.py`, and paste the code from the `Python-Template.py` file from this repository into it.

Step 5. On the last line of the `bot.py` file, replace "BOT_TOKEN_HERE" text with the actual bot token provided to your team.
```js
client.run('BOT_TOKEN_HERE')
```

Step 6. Run the command `py bot.py` to run your code and start the bot!

# Other Links
- [Discord.js documentation]https://discord.js.org/
- [Discord.py documentation](https://discordpy.readthedocs.io/en/stable/)