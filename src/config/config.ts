import { BotSettings } from '../types/bot/Bot';

export const settings: BotSettings = {
  presence: {
    activity: {
      name: '~help for commands',
      type: 'LISTENING'
    }
  },
  prefix: '~',
  paths: {
    commands: 'src/commands',
    events: 'src/events'
  }
};
