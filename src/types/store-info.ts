export interface StoreInfoType {
    storeDetails: Store[]
}

export interface Store {
    storeID: string;
    storeName: string;
    images: {banner: string}
}