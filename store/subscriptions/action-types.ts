import { SubscriptionsListType } from './types';

export type GetSubscriptions = SubscriptionsListType[]
export type ActivateCode = {
    id: number
    code: string
    origin: string
    status: string
    subscribeId: number
    userId: number
}
