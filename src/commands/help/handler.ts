import {
  HelpEmbed,
  CollectionHelpEmbed,
} from "./embeds";

import {StatsHelpEmbed} from '../stats/embeds'

export function handleCommand(args: string[]) {
  switch (args[0]) {
    case "collection":
      return CollectionHelpEmbed();
    case 'stats':
      return StatsHelpEmbed();
    default:
      return HelpEmbed();
  }
}
