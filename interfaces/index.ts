export interface PricesType {
    id: number
    isActive: boolean
}

export interface ProductsType {
    id: number
    sitesCount: number
    name: number
    prices: PricesType[]
}

export interface CommentType {
    id: string
    cardId: string
    commentText: string
}
