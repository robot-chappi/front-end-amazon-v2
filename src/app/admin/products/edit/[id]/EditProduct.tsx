'use client'

import { TypeUpdateProductData } from '@/services/product/product.types';
import { IProduct } from '@/types/product.interface';
import Heading from '@/ui/Heading';
import Field from '@/ui/admin/field/Field';
import TextArea from '@/ui/admin/text-area/TextArea';
import Button from '@/ui/button/Button';
import { useRouter } from 'next/navigation';
import { FC, useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useAdminProducts } from '../../useAdminProducts';

interface IEditProduct {
    product: IProduct
}

const EditProduct: FC<IEditProduct> = ({product}) => {
    const {register, handleSubmit, formState: {errors}, setValue, watch} = useForm<TypeUpdateProductData>({mode: 'onChange'})

    const {updateProduct, isErrorUpdateProduct} = useAdminProducts()

    const {push} = useRouter()

    useEffect(() => {
		if (!watch('name') && product) {
			setValue('name', product.name)
			setValue('description', product.description)
		}
	}, [product])

    const onSubmit: SubmitHandler<TypeUpdateProductData> = (data) => {
        updateProduct(data)
        if(!isErrorUpdateProduct) push('/admin/products')
    }

    console.log(product);
    
    return (
        <section className='h-screen'>
            <Heading>Edit product</Heading>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Field
                    {...register('name', {
                        required: 'Name is required'
                    })}
                    placeholder='Name'
                    error={errors.name}
                />
                <TextArea
                    {...register('description', {
                    })}
                    placeholder='Description'
                    error={errors.description}
                />
                <div className='flex justify-center items-center gap-1'>
                    <Button type='submit' variant='light'>Update</Button>
                </div>
            </form>
        </section>
    )
};

export default EditProduct;