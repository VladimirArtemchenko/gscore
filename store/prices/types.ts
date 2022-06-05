export interface ProductsPricesType {
    id: number;
    isActive: boolean;
    price: string
    productId: number;
    sitesCount: number;
}

export interface ProductsListType {
    id: number;
    name: string;
    prices: ProductsPricesType[];
    sitesCount: number;
}
