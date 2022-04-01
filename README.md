# module-discord-toolbox

[Click here to add the module-discord-toolbox to your server.](https://discord.com/api/oauth2/authorize?client_id=959088156706238514&permissions=3072&scope=bot)

> WARNING: Make sure to **not** give the discord bot any important roles/permissions in the server. The bot is meant to only be able to read messages (commands) and send messages (respond to commands). If the bot asks for more permissions, it is possible that the bot is comprimised. Treat the bot as a user, do not give it advanced permissions.


## Bot Commands
Currently, the module discord toolbox supports the following commands:
- ~help 
    - Displays help screen
- ~collection [collection name]
    - Used to get collection info such as the website, twitter, and more.
- ~stats [collection name] 
    - Used to get collection stats such as the volume, number of owners, floor price, and more.



# Contribution

We welcome contributions and additions to the Module Discord toolbox. As the Module API develops, we plan to expand the toolbox. If there are any commands you would like to see, please fork this repository. [View the guide on contributing to projects](https://docs.github.com/en/get-started/quickstart/contributing-to-projects).


Below you will find information about how the project is structured.

### Events

Trigger actions on a new event by adding a new file that has the same name as a specific **event name** defined in the event section of the [documentation](https://discord.js.org/#/docs/main/stable/class/Client).

To properly initialize the event, this file has to be added to the event directory you specified in the configuration file of the bot: `config.ts`.

*Example of Event: **Ready***

*Ready.ts*

```typescript
import { Client } from '../Client';
import { Logger } from '../utils/Logger';
import { BotEvent } from '../types';

export default class Ready implements BotEvent {
    public client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    public async run(): Promise<void> {
        Logger.info('Execute an action when the Ready event is triggered');
    }
}
```

### Adding Commands

Execute commands when a specific keyword including the command prefix has been sent in a Discord channel.

To properly initialize the command, this file has to be added to the command directory you specified in the configuration file of the bot: `config.ts`.

*Example of Command: **Ping***

*Ping.ts*

```typescript
import { Message } from 'discord.js';
import { Command } from '../Command';
import { BotClient } from '../types';

export default class Ping extends Command {
    constructor(client: BotClient) {
        super(client, {
            name: 'ping',
            description: 'Pings the bot.',
            category: 'Information',
            usage: client.settings.prefix.concat('ping'),
            cooldown: 1000,
            requiredPermissions: ['SEND_MESSAGES']
        });
    }

    public async run(message: Message): Promise<void> {
        await super.respond(message.channel, 'Pong!');
    }
}
```

## Running

To run the bot, first create an application on the Discord developer portal. Then copy the `.env.example` and rename it into `.env`. A proper `.env` file should look like this:

*.env*
```
BOT_TOKEN=RANDOMTOKENYOURECEIVEDFROMTHEDEVELOPERPORTAL
```

After everything is configured, you can run the bot locally by executing the `yarn start` command.

## Documentation

During development, refer to the documentation served by [discord.js](https://discord.js.org/#/docs/main/stable/general/welcome).

## License
[MIT](LICENSE)