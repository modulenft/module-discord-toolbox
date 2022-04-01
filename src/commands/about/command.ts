import { Message } from 'discord.js';
import { Command } from '../../Command';
import { BotClient } from '../../types';
import { AboutEmbed } from './embeds';

export default class About extends Command {
  constructor(client: BotClient) {
    super(client, {
      name: 'about',
      description: 'Gets information about the bot.',
      category: 'Information',
      usage: client.settings.prefix.concat('about'),
      cooldown: 1000,
      requiredPermissions: ['SEND_MESSAGES']
    });
  }

  public async run(message: Message): Promise<void> {
    await super.respond(message.channel, AboutEmbed());
  }
}
