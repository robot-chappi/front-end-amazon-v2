'use client'

import Heading from '@/ui/Heading';
import AdminList from '@/ui/admin/admin-list/AdminList';
import Tools from '@/ui/admin/tools/Tools';
import { FC } from 'react';
import { useAdminProducts } from './useAdminProducts';

const Products: FC = () => {
    const {data, isFetching, deleteProduct, createProduct} = useAdminProducts()

    return (
        <>
            <Heading className='mb-7'>Products</Heading>
            <Tools onClick={createProduct}/>
            <AdminList isLoading={isFetching} listItems={data} removeHandler={deleteProduct}/>    
        </>
    );
};

export default Products;