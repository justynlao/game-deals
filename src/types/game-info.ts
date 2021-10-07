export interface GameInfoType {
  info: Info;
  cheapestPriceEver: CheapestPrice;
  deals: StoreInfo[];
}

export interface Info {
  title: string;
  steamAppID: string;
  thumb: string;
}

export interface CheapestPrice {
  price: string;
  date: number;
}

export interface StoreInfo {
  storeID: string;
  price: string;
  retailPrice: string;
  savings: string;
}
