import { SearchResult, Collection } from './interfaces';
import fetch from 'node-fetch';
import { Logger } from '../../utils/Logger';

export async function getCollection(collection: string) {
  Logger.info(`Searching for Type: ${collection}`);
  const options = {
    headers: {
      Accept: 'application/json',
      'X-API-KEY': process.env.API_KEY || '',
    },
    method: 'GET'
  };
  const response = await fetch(
    `https://api.modulenft.xyz/api/v1/opensea/collection/info?type=${collection}`,
    options
  );

  if (response.status === 200) {
    Logger.info(`Found Type: ${collection}`);
    const body = await response.json() as {
      info: Collection;
    }
    console.log(body);
    const data: SearchResult = {
      market: 'OpenSea',
      collection,
      data: body.info
    };
    return data;
  } else if (response.status === 404) {
    Logger.info(`Did not find Type: ${collection}`);
    return 404;
  } else {
    return 500;
  }
}
