import { UserType } from './types';

export type SetToken = {
    token: string
    user: UserType
}
export type SetUserInfo = {
    email: string
    id: number
    username: string
}
