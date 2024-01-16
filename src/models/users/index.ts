export type Users = UsersDTO[]

export interface UsersDTO {
  id: number
  username: string
  email: string
  provider: string
  confirmed: boolean
  blocked: boolean
  createdAt: string
  updatedAt: string
  role: Role
}

export interface Role {
  id: number
  name: string
  description: string
  type: string
  createdAt: string
  updatedAt: string
}
