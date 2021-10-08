export interface DealInfoType {
  title: string;
  salePrice: string;
  normalPrice: string;
  savings: string;
  dealID: string;
  gameID: string;
  steamAppID: string;
  thumb: string;
  metacriticScore: string;
  steamRatingText: string;
  steamRatingPercent: string;
  steamRatingCount: string;
}

export interface IndividualDealType {
  gameInfo: IndividualGameInfo;
}

export interface IndividualGameInfo {
  steamAppID: string;
  retailPrice: string;
  steamRatingPercent: string;
  steamRatingCount: string;
}
