import { MessageEmbed } from 'discord.js';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function AboutEmbed() {
  const embed = new MessageEmbed()
    .setAuthor(
      'Module Toolbox',
      'https://cdn.discordapp.com/attachments/951265974961721404/953071785627226162/PFP-1.png',
      'https://twitter.com/module'
    )
    .setDescription(
      `
    **What is Module Toolbox?**
    Module Toolbox is a Discord bot that showcases the usages of Modules API. It gives your community access to listings, sales, and collections from popular NFT Marketplaces.
    
    **What is Module**
    Module provides API's to make it easier for developers to access important and useful data regarding NFTs & the blockchain. This includes sales, mints, price history, floor price, NFT metadata and more.
    
    **Get started with Module**
    > [Documentation](https://module.readme.io/reference/getting-started-with-your-api)
    > [Website](https://modulenft.xyz)
    > [Discord](https://discord.gg/bG28DwT7)
    > [Twitter](https://twitter.com/module)
    `
    )
    .setImage(
      'https://cdn.discordapp.com/attachments/951265974961721404/953071786248007720/Banner-1.png'
    )
    .setFooter(
      'Powered By Module',
      'https://cdn.discordapp.com/attachments/951265974961721404/953071785627226162/PFP-1.png'
    );
  return embed;
}
