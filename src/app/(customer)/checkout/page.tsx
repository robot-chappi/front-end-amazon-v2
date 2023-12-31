import { NO_INDEX_PAGE } from "@/constants/seo.constants"
import { ProductService } from "@/services/product/product.service"
import Checkout from "./Checkout"

export const metadata = {
    title: 'Checkout',
    ...NO_INDEX_PAGE
}

export const revalidate = 60

async function getProducts() {
    const data = await ProductService.getAll({
        page: 1,
        perPage: 4,
        ratings: ''
    })

    return data
}

export default async function CheckoutPage() {
    const data = await getProducts()

    return <Checkout products={data.products}/>
}