import { Client } from '../Client';
import { Logger } from '../utils/Logger';
import { BotEvent } from '../types';

export default class Ready implements BotEvent {
  constructor(private client: Client) {}

  public async run(): Promise<void> {
    if (this.client.user) {
      Logger.info(`${this.client.user.username} is running.`);
      this.client.user.setPresence(this.client.settings.presence);
    }
    
    setInterval(()=>{
      if (this.client.user) {
        this.client?.user.setActivity(`Currently in ${this.client.guilds.cache.size} servers`);
      }
    }, 5000)
  }
}
