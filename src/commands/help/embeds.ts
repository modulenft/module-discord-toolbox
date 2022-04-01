import { MessageEmbed } from "discord.js";

export function HelpEmbed() {
  const embed = new MessageEmbed()
    .setAuthor(
      "Module Toolbox",
      "https://cdn.discordapp.com/attachments/951265974961721404/953071785627226162/PFP-1.png",
      "https://twitter.com/module"
    )
    .setThumbnail(
      "https://cdn.discordapp.com/attachments/951265974961721404/953071785627226162/PFP-1.png"
    )
    .addFields(
      // { name: "Listings", value: "`~help listings`", inline: true },
      // { name: "Sales", value: "`~help sales`", inline: true },
      { name: "Collection", value: "`~help collection`", inline: true },
      { name: "Stats", value: "`~help stats`", inline: true },
    )
    .setFooter(
      "Powered By Module",
      "https://cdn.discordapp.com/attachments/951265974961721404/953071785627226162/PFP-1.png"
    );
  return embed;
}

export function StatsEmbed() {
  const embed = new MessageEmbed()
    .setAuthor(
      "Module Toolbox",
      "https://cdn.discordapp.com/attachments/951265974961721404/953071785627226162/PFP-1.png",
      "https://twitter.com/module"
    )
    .setDescription(
      "The collection command returns data about a collection from NFT Marketplaces. This data includes contract details as well as data added by the contract owner, such as their twitter, discord, or Instagram."
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
}

export function ListingsHelpEmbed() {
  const embed = new MessageEmbed()
    .setAuthor(
      "Module Toolbox",
      "https://cdn.discordapp.com/attachments/951265974961721404/953071785627226162/PFP-1.png",
      "https://twitter.com/module"
    )
    .setDescription(
      "**Listings Command**\n The listings command returns data about a listing from an NFT Marketplace. This data includes the token, price, and when the item was listed."
    )
    .setThumbnail(
      "https://cdn.discordapp.com/attachments/951265974961721404/953071785627226162/PFP-1.png"
    )
    .addFields(
      { name: "Usage", value: "`~listings [name]`", inline: true },
      { name: "Arguments", value: "`Name: Collection name`", inline: true },
    )
    .setFooter(
      "Powered By Module",
      "https://cdn.discordapp.com/attachments/951265974961721404/953071785627226162/PFP-1.png"
    );
  return embed;
}

export function CollectionHelpEmbed() {
  const embed = new MessageEmbed()
    .setAuthor(
      "Module Toolbox",
      "https://cdn.discordapp.com/attachments/951265974961721404/953071785627226162/PFP-1.png",
      "https://twitter.com/module"
    )
    .setDescription(
      "**Collection Command**\n The collection command returns data about a collection from NFT Marketplaces. This data includes contract details as well as data added by the contract owner, such as their twitter, discord, or Instagram."
    )
    .setThumbnail(
      "https://cdn.discordapp.com/attachments/951265974961721404/953071785627226162/PFP-1.png"
    )
    .addFields(
      { name: "Usage", value: "`~collection [name]`", inline: true },
      { name: "Arguments", value: "`Name: Collection name`", inline: true }
    )
    .setFooter(
      "Powered By Module",
      "https://cdn.discordapp.com/attachments/951265974961721404/953071785627226162/PFP-1.png"
    );
  return embed;
}
