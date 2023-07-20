import { axiosClassic, instance } from "@/api/api.interceptor"
import { IProduct, TypePaginationProducts } from "@/types/product.interface"
import { AxiosResponse } from "axios"
import { PRODUCTS, TypeProductData, TypeProductDataFilters } from "./product.types"

export const ProductService = {
    async getAll(queryData = {} as TypeProductDataFilters) {
        // const {data} = await axiosClassic<TypePaginationProducts[]>(
        const {data} = await axiosClassic<TypePaginationProducts>(
            {
                url: PRODUCTS,
                method: 'GET',
                params: queryData
            }
        )
        return data
    },

    async getSimilar(productId: string | number) {
        return axiosClassic<IProduct[]>(
            {
                url: `${PRODUCTS}/similar/${productId}`,
                method: 'GET'
            }
        )
    },

    async getBySlug(slug: string) {
        const {data} = await axiosClassic<IProduct>(
            {
                url: `${PRODUCTS}/by-slug/${slug}`,
                method: 'GET'
            }
        )

        return data
    },

    async getByCategory(categorySlug: string) {
        return axiosClassic<IProduct[]>(
            {
                url: `${PRODUCTS}/by-category/${categorySlug}`,
                method: 'GET'
            }
        )
    },

    async getById(productId: string | number) {
        const {data} =  await axiosClassic<IProduct>(
            {
                url: `${PRODUCTS}/${productId}`,
                method: 'GET'
            }
        )
        
        return data
    },
    

    async create() {
        return instance<IProduct>(
            {
                url: PRODUCTS,
                method: 'POST'
            }
        )
    },

    async update(id: string | number, data: TypeProductData): Promise<AxiosResponse> {
        const product = await instance<IProduct>(
            {
                url: `${PRODUCTS}/${id}`,
                method: 'PUT',
                data
            }
        )

        return product;
    },

    async delete(id: string | number) {
        return instance<IProduct>(
            {
                url: `${PRODUCTS}/${id}`,
                method: 'DELETE'
            }
        )
    }
}