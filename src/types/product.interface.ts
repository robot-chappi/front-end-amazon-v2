import { ICategory } from "./category.interface"
import { IReview } from "./review.interface"

export interface IProduct {
    id: number
    name: string
    slug: string
    images: string[]
    description: string
    price: number
    reviews: IReview[]
    createdAt: string
    category: ICategory
}

export interface IProductDetails {
    product: IProduct
}

export type TypeProducts = {
    products: IProduct[]
}

export type TypePaginationProducts = {
    length: number
    products: IProduct[]
}