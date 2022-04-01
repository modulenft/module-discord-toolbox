import { Message } from 'discord.js';
import { Command } from '../../Command';
import { BotClient } from '../../types';
import { handleCommand } from './handler';

export default class Colleciton extends Command {
  constructor(client: BotClient) {
    super(client, {
      name: 'stats',
      description: 'Module Toolbox stats command.',
      category: 'Information',
      usage: client.settings.prefix.concat('about'),
      cooldown: 2500,
      requiredPermissions: ['SEND_MESSAGES']
    });
  }

  public async run(message: Message, args: string[]): Promise<void> {
    const commandReponse = await handleCommand(args);
    await super.respond(message.channel, commandReponse);
  }
}
