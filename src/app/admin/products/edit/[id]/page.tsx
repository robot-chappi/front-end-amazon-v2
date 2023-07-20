import type { Metadata } from 'next'

import { ProductService } from '@/services/product/product.service'
import { IPageIdParam, TypeParamId } from '@/types/page-params'
import EditProduct from './EditProduct'

export const revalidate = 60

export async function generateStaticParams() {
    const response = await ProductService.getAll()    

    const paths = response.products.map(product => {
        return {
            params: {
                id: product.id
            }
        }
    })

    return paths
}

async function getProduct(params: TypeParamId) {
    const product = await ProductService.getById(params?.id as string)
    
    return {product}
}


export async function generateMetadata({
  params,
}: IPageIdParam): Promise<Metadata> {
  const {product} = await getProduct(params)
  return {
    title: product.name
  }
}

export default async function EditProductPage({params}: IPageIdParam) {
    const data = await getProduct(params)

    return <EditProduct product={data.product}/>
}
