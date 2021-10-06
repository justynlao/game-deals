export interface GameInfo {
  info: Info;
  cheapestPriceEver: CheapestPrice;
  deals: StoreInfo[];
}

interface Info {
  title: string;
  steamAppID: string;
  thumb: string;
}

interface CheapestPrice {
  price: string;
  date: number;
}

interface StoreInfo {
  storeID: string;
  price: string;
  retailPrice: string;
  savings: string;
}
