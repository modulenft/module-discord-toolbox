import { MessageEmbed } from 'discord.js';
import { SearchResult } from './interfaces';
import { formatData } from './utils';


export function StatsHelpEmbed() {
  const embed = new MessageEmbed()
    .setAuthor(
      "Module Toolbox",
      "https://cdn.discordapp.com/attachments/951265974961721404/953071785627226162/PFP-1.png",
      "https://twitter.com/module"
    )
    .setDescription(
      "**Stats Command**\n The stats command returns statistics about a collection from NFT Marketplaces. This data includes floor price, number of owners, supply, and volume."
    )
    .setThumbnail(
      "https://cdn.discordapp.com/attachments/951265974961721404/953071785627226162/PFP-1.png"
    )
    .addFields(
      { name: "Usage", value: "`~stats [name]`", inline: true },
      { name: "Arguments", value: "`Name: Collection name`", inline: true }
    )
    .setFooter(
      "Powered By Module",
      "https://cdn.discordapp.com/attachments/951265974961721404/953071785627226162/PFP-1.png"
    );
  return embed;
};
export const StatsResult = function (result: SearchResult) {
  const collection = formatData(result.data);
  const resultEmbed = new MessageEmbed()
    .setAuthor(
      'Module Toolbox',
      'https://cdn.discordapp.com/attachments/951265974961721404/953071785627226162/PFP-1.png',
      'https://modulenft.xyz'
    )
    .setTitle(`Stats for ${collection.name}`)
    .addFields(
      {
        name: 'Floor Price',
        value: `\`${collection.statistics.floorPrice.unit}\` ETH`,
        inline: true
      },
      {
        name: 'Unique Owners',
        value: `\`${collection.statistics.numOwners}\``,
        inline: true
      },
      {
        name: 'Total Volume',
        value: `\`${collection.statistics.totalVolume.unit}\` ETH`,
        inline: true
      },
      {
        name: 'Total Supply',
        value: `\`${collection.statistics.totalSupply}\``,
        inline: true
      },
      {
        name: 'Official Links',
        value: `> [Website](${collection.externalUrl})\n> [Twitter](https://twitter.com/${collection.twitterUsername})\n> [Discord](${collection.discordUrl})`,
        inline: true
      }
    )
    .setImage(collection.bannerImageUrl)
    .setThumbnail(collection.imageUrl)
    .setFooter(
      'Powered By Module',
      'https://pbs.twimg.com/profile_images/1499817119831269376/ZU9kV8Pn_400x400.jpg'
    );
  return resultEmbed;
};
export const statsCommandError = function (error: string) {
  const errorEmbed = new MessageEmbed()
    .setAuthor(
      'Module Toolbox',
      'https://cdn.discordapp.com/attachments/951265974961721404/953071785627226162/PFP-1.png',
      'https://modulenft.xyz'
    )
    .setDescription('**Stats Error**')
    .addFields(
      { name: 'Stats', value: '`~stats [type]`', inline: true },
      { name: 'Error', value: `\`${error}\``, inline: true },
      { name: 'Help', value: '`~help stats`', inline: true }
    )
    .setImage(
      'https://cdn.discordapp.com/attachments/951265974961721404/953071786248007720/Banner-1.png'
    )
    .setFooter(
      'Powered By Module',
      'https://pbs.twimg.com/profile_images/1499817119831269376/ZU9kV8Pn_400x400.jpg'
    );
  return errorEmbed;
};
export const CollectionInternalError = function () {
  return statsCommandError('test');
};
export const CollectionNotFound = function (
  collection: string,
  market: string
) {
  const notFoundEmbed = new MessageEmbed()
    .setAuthor(
      'Module Toolbox',
      'https://cdn.discordapp.com/attachments/951265974961721404/953071785627226162/PFP-1.png',
      'https://modulenft.xyz'
    )
    .setTitle(`Collection: ${collection}`)
    .setDescription(`\n**Collection Not Found**`)
    .addFields(
      { name: 'Market', value: `\`${market}\``, inline: true },
      { name: 'Collection Name', value: `\`${collection}\``, inline: true },
      { name: 'Floor Price', value: '`N/A`', inline: true },
      { name: 'Unique Owners', value: '`N/A`', inline: true },
      { name: 'Total Volume', value: '`N/A`', inline: true },
      { name: 'Total Supply', value: '`N/A`', inline: true },
      { name: 'Official Links', value: '`N/A`', inline: true }
    )
    .setImage(
      'https://cdn.discordapp.com/attachments/951265974961721404/953071786248007720/Banner-1.png'
    )
    .setFooter(
      'Powered By Module',
      'https://pbs.twimg.com/profile_images/1499817119831269376/ZU9kV8Pn_400x400.jpg'
    );
  return notFoundEmbed;
};
export const StatsError = function (
  code: number,
  collection: string,
  market: string
) {
  if (code === 404) {
    return CollectionNotFound(collection, market);
  } else {
    return CollectionInternalError();
  }
};

