export interface UserType {
    id: null | number;
    username: string;
    email: string
}

export interface UserInfoType {
    token: string;
    user: UserType
}
