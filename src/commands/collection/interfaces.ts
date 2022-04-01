export interface Statistics {
  numOwners: number;
  totalSupply: number;
  totalVolume: {
    unit: string;
  };
  floorPrice: {
    unit: string;
  };
}

export interface Owner {
  address: string;
  config: string;
  isCompromised: boolean | string;
  user: {
    publicUsername: string;
  };
  displayName: string;
  imageUrl: string;
}

export interface Collection {
  bannerImageUrl: string;
  name: string;
  description: string;
  imageUrl: string;
  connectedTwitterUsername: string;
  slug: string;
  isVerified: boolean;
  owner: Owner;
  discordUrl: string;
  externalUrl: string;
  instagramUsername: string;
  mediumUsername: string;
  telegramUrl: string;
  twitterUsername: string;
  statistics: Statistics;
}

export interface SearchResult {
  collection: string;
  market: string;
  data: Collection;
}
