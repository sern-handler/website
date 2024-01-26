```sh
Usage: sern commands clear [options]

Clear and reset commands-data-remote.json and the api

Options:
  -y, --yes         Say yes to all prompts
  -e, --env [path]  Supply a path to a .env
  -h, --help        display help for command
```
## Implicits
- Automatically reads a .env in the working directory. For seamless integration, your .env file should look like this:
```txt title=".env" 
DISCORD_TOKEN=<YOUR_TOKEN>
APPLICATION_ID=<YOUR_APPLICATION_ID>
NODE_ENV=<development|production>
```
- Calls the discord API with the [PUT route](https://discord.com/developers/docs/interactions/application-commands#bulk-overwrite-global-application-commands) with an EMPTY array, essentially setting all registered commands to nothing. 

- Optionally override an .env path as a command line argument as well. **CLI arguments take precedence.**
If you do not know how to obtain either of these credentials, [click here](https://github.com/reactiflux/discord-irc/wiki/Creating-a-discord-bot-&-getting-a-token)

- Automatically confirm with the **-y** flag.

## Features
- Clears all application data and sern-commands-data.json 


