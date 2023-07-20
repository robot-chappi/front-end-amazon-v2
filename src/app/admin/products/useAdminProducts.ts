import { getAdminUrl } from "@/config/url.config"
import { ProductService } from "@/services/product/product.service"
import { TypeUpdateProductData } from "@/services/product/product.types"
import { IListItem } from "@/ui/admin/admin-list/admin-list.interface"
import { formatDate } from "@/utils/format-date"
import { useMutation, useQuery } from "@tanstack/react-query"
import { AxiosResponse } from "axios"

export const useAdminProducts = () => {
    const {data, isFetching, refetch} = useQuery(['get admin products'], () => ProductService.getAll(), {
        select: data => data.products.map((product):IListItem => {
            return {
                id: product.id,
                viewUrl: `/products/${product.slug}`,
                editUrl: getAdminUrl(`/products/edit/${product.id}`),
                items: [
                    product.name,
                    formatDate(product.createdAt)
                ]
            }
    })})

    const {mutate: deleteProduct} = useMutation(['delete product'], (id: number) => ProductService.delete(id), {onSuccess() {
        refetch()
    }})

    const {mutate: createProduct} = useMutation(['create product'], () => ProductService.create(), {onSuccess() {
        refetch()
    }})

    const {mutate: updateProduct, isError: isErrorUpdateProduct} = useMutation(['update product'], (data: TypeUpdateProductData): Promise<AxiosResponse> => ProductService.update(data.id, data), {onSuccess() {
        refetch()
    }})

    return {
        deleteProduct,
        createProduct,
        updateProduct,
        isErrorUpdateProduct,
        data,
        isFetching
    }
}