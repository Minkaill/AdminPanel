export interface Orders {
    data: OrdersDaum[]
    meta: OrdersMeta
}

export interface OrdersDaum {
    id: number
    attributes: OrdersAttributes
}

export interface OrdersAttributes {
    payment_method: "Банковская карта" | "Наличными"
    createdAt: string
    updatedAt: string
    products: OrdersProducts
    users_permissions_user: UsersPermissionsUser
}

export interface OrdersProducts {
    data: OrdersDaum2[]
}

export interface OrdersDaum2 {
    id: number
    attributes: OrdersAttributes2
}

export interface OrdersAttributes2 {
    name: string
    amount: number
    createdAt: string
    updatedAt: string
    is_on_sale: boolean
    price: number
    old_price: string
    sclad_id: string
}

export interface UsersPermissionsUser {
    data: OrdersData
}

export interface OrdersData {
    id: number
    attributes: OrdersAttributes3
}

export interface OrdersAttributes3 {
    username: string
    email: string
    provider: string
    confirmed: boolean
    blocked: boolean
    createdAt: string
    updatedAt: string
}

export interface OrdersMeta {
    pagination: OrdersPagination
}

export interface OrdersPagination {
    page: number
    pageSize: number
    pageCount: number
    total: number
}
