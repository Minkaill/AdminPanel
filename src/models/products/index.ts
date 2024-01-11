export interface Products {
    data: ProductsDTO[]
    meta: Meta
}

export interface ProductsDTO {
    id: number
    attributes: Attributes
}

export interface Attributes {
    name: string
    amount: number
    createdAt: string
    updatedAt: string
    is_on_sale: boolean
    price: string
    old_price: string
    image: Image
    categories: Categories
    brend: Brends
}

export interface Image {
    data: Daum2[]
}

export interface Daum2 {
    id: number
    attributes: Attributes2
}

export interface Attributes2 {
    name: string
    alternativeText: any
    caption: any
    width: number
    height: number
    formats: Formats
    hash: string
    ext: string
    mime: string
    size: number
    url: string
    previewUrl: any
    provider: string
    provider_metadata: any
    createdAt: string
    updatedAt: string
}

export interface Formats {
    thumbnail: Thumbnail
    medium?: Medium
    small?: Small
}

export interface Thumbnail {
    name: string
    hash: string
    ext: string
    mime: string
    path: any
    width: number
    height: number
    size: number
    url: string
}

export interface Medium {
    name: string
    hash: string
    ext: string
    mime: string
    path: any
    width: number
    height: number
    size: number
    url: string
}

export interface Small {
    name: string
    hash: string
    ext: string
    mime: string
    path: any
    width: number
    height: number
    size: number
    url: string
}

export interface Categories {
    data: Daum3[]
}

export interface Daum3 {
    id: number
    attributes: Attributes3
}

export interface Attributes3 {
    name: string
    createdAt: string
    updatedAt: string
}

export interface Brends {
    data: BrendsDTO
}

export interface BrendsDTO {
    id: number,
    attributes: Attributes3
}

export interface Meta {
    pagination: Pagination
}

export interface Pagination {
    page: number
    pageSize: number
    pageCount: number
    total: number
}
