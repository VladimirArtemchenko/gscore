export interface CodesType {
    id: number
    code: string
    origin: string
    status: string
    subscribeId: number
    userId: number
}

export interface PricesType {
    id: number
    isActive: boolean
    price: string
    productId: number
}

export interface ProductsType {
    id: number
    name: string
    prices: PricesType[]
    sitesCount: number
}

export interface SubscriptionsListType {
    codes: CodesType[];
    currentPeriodEnd: string
    currentPeriodStart: string
    status: string
    product: ProductsType;
    id: number;
    productId: number;
    userId: number;
}
