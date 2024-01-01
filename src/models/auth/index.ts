export interface UserRG {
    username: string,
    email: string,
    password: string
}

export interface UserLG {
    identifier: string,
    password: string
}

export interface User {
    jwt: string
    user: UserDTO
}

export interface UserDTO {
    id: number
    username: string
    email: string
    provider: string
    confirmed: boolean
    blocked: boolean
    createdAt: string
    updatedAt: string
}