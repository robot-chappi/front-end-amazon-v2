export const PRODUCTS = 'products'

export enum EnumProductSort {
    HIGH_PRICE = 'high-price',
    LOW_PRICE = 'low-price',
    NEWEST = 'newest',
    OLDEST = 'oldest'
}

export type TypeProductData = {
    name: string
    price: number
    description?: string
    images: string[]
    categoryId: number
}

export interface TypeUpdateProductData extends TypeProductData {
    id: number
}

export type TypeProductDataFilters = {
    sort?: EnumProductSort | string
    searchTerm?: string
    page?: string | number
    perPage: string | number
    ratings: string
    minPrice?: string
    maxPrice?: string
    categoryId?: string
}

export type TypeParamsFilters = {
    searchParams: TypeProductDataFilters
}