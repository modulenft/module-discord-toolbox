import { getCollection } from './requests';
import { CollectionResult, CollectionError, CollectionHelpEmbed } from './embeds';

export async function handleCommand(args: string[]) {
  if (args.length === 0) {
    return CollectionHelpEmbed();
  } else {
    const collectionData = await getCollection(args[0]);
    if (collectionData === 404 || collectionData === 500) {
      return CollectionError(collectionData, args[0], 'OpenSea');
    } else {
      return CollectionResult(collectionData);
    }
  }
}
