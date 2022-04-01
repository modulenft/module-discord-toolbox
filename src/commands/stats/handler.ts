import { getCollection } from './requests';
import { StatsResult, StatsError, StatsHelpEmbed } from './embeds';

export async function handleCommand(args: string[]) {
  if (args.length === 0) {
    return StatsHelpEmbed();
  } else {
    const collectionData = await getCollection(args[0]);
    if (collectionData === 404 || collectionData === 500) {
      return StatsError(collectionData, args[0], 'OpenSea');
    } else {
      return StatsResult(collectionData);
    }
  }
}
