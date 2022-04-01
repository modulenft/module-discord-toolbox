import { Collection, Owner, Statistics } from './interfaces';

export function formatData(data: Collection) {
  const result: Collection = {
    bannerImageUrl: data.bannerImageUrl
      ? data.bannerImageUrl
      : 'https://cdn.discordapp.com/attachments/951265974961721404/953071786248007720/Banner-1.png',
    name: data.name ? data.name : 'N/A',
    description: data.description ? data.description : 'N/A',
    imageUrl: data.imageUrl
      ? data.imageUrl
      : 'https://cdn.discordapp.com/attachments/951265974961721404/953071785627226162/PFP-1.png',
    connectedTwitterUsername: data.connectedTwitterUsername
      ? data.connectedTwitterUsername
      : 'N/A',
    slug: data.slug ? data.slug : 'N/A',
    isVerified: data.isVerified ? true : false,
    owner: hasOwner(data.owner),
    discordUrl: data.discordUrl ? data.discordUrl : 'N/A',
    externalUrl: data.externalUrl ? data.externalUrl : 'N/A',
    instagramUsername: data.instagramUsername ? data.instagramUsername : 'N/A',
    mediumUsername: data.mediumUsername ? data.mediumUsername : 'N/A',
    telegramUrl: data.telegramUrl ? data.telegramUrl : 'N/A',
    twitterUsername: data.twitterUsername ? data.twitterUsername : 'N/A',
    statistics: hasStatistics(data.statistics)
  };
  return result;
}

function hasOwner(data: Owner) {
  if (!data) {
    const ownerData: Owner = {
      address: 'N/A',
      config: 'N/A',
      isCompromised: 'N/A',
      user: {
        publicUsername: 'N/A'
      },
      displayName: 'N/A',
      imageUrl: 'N/A'
    };
    return ownerData;
  } else {
    const ownerData: Owner = {
      address: data.address ? data.address : 'N/A',
      config: data.config ? data.config : 'N/A',
      isCompromised: Object.values(data).includes('isCompromised')
        ? data.isCompromised
        : 'N/A',
      user: {
        publicUsername: data.user ? data.user.publicUsername : 'N/A'
      },
      displayName: data.displayName ? data.user.publicUsername : 'N/A',
      imageUrl: data.imageUrl ? data.imageUrl : 'N/A'
    };
    return ownerData;
  }
}

function hasStatistics(data: Statistics) {
  if (!data) {
    const statisticsData: Statistics = {
      numOwners: 0,
      totalSupply: 0,
      totalVolume: {
        unit: 'N/A'
      },
      floorPrice: {
        unit: 'N/A'
      }
    };
    return statisticsData;
  } else {
    const statisticsData: Statistics = {
      numOwners: data.numOwners ? data.numOwners : 0,
      totalSupply: data.totalSupply ? data.totalSupply : 0,
      totalVolume: {
        unit: data.totalVolume
          ? data.totalVolume.unit
            ? data.totalVolume.unit
            : 'N/A'
          : 'N/A'
      },
      floorPrice: {
        unit: data.floorPrice
          ? data.floorPrice.unit
            ? data.floorPrice.unit
            : 'N/A'
          : 'N/A'
      }
    };
    return statisticsData;
  }
}
