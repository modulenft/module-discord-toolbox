import { Message } from 'discord.js';
import { Command } from '../../Command';
import { BotClient } from '../../types';
import { handleCommand } from './handler';

export default class Help extends Command {
    constructor(client: BotClient) {
        super(client, {
            name: 'help',
            description: 'Gets help for commands.',
            category: 'Information',
            usage: client.settings.prefix.concat('help'),
            cooldown: 1000,
            requiredPermissions: ['SEND_MESSAGES']
        });
    }

    public async run(message: Message, args: string[]): Promise<void> {
        const commandResponse = handleCommand(args)
        await super.respond(message.channel, commandResponse);
    }
}
