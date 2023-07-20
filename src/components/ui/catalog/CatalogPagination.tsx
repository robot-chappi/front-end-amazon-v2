'use client'

import { ProductService } from '@/services/product/product.service';
import { EnumProductSort } from '@/services/product/product.types';
import { TypePaginationProducts } from '@/types/product.interface';
import { useQuery } from '@tanstack/react-query';
import { FC, useState } from 'react';
import SortDropdown from '../../../app/explorer/sort/SortDropdown';
import Heading from '../Heading';
import Loader from '../Loader';
import Button from '../button/Button';
import ProductItem from './product-item/ProductItem';

interface ICatalogPagination {
    data: TypePaginationProducts
    title?: string
}

const CatalogPagination: FC<ICatalogPagination> = ({data, title}) => {
    const [page, setPage] = useState(1)
    const [sortType, setSortType] = useState<EnumProductSort>(EnumProductSort.NEWEST)
    
    const {data: response, isLoading} = useQuery(
        ['products', sortType, page],
        () => ProductService.getAll({
            page,
            perPage: 4,
            sort: sortType,
            ratings: ''
        }),
        {
            initialData: data,
            keepPreviousData: true
        }
    )

    if (isLoading) return <Loader/>

    return (
        <section>
            {title && <Heading>{title}</Heading>}
            {/* w-full flex items-center gap-5 flex-wrap*/}
            <SortDropdown sortType={sortType} setSortType={setSortType}/>
            {response?.products.length ? (
                <>
                    <div className='grid grid-cols-4 gap-10'>
                        {response.products.map(product => (<ProductItem key={product.id} product={product} />))}                   
                    </div>
                    <div className='flex justify-center gap-2 items-center'>
                        {Array.from({length: response.length / 4}).map((_, index) => {
                            const pageNumber = index + 1
                            return (
                                <Button key={pageNumber} size='md' className='mt-5' variant={page === pageNumber ? 'dark' : 'light'} onClick={() => setPage(pageNumber)}>{pageNumber}</Button>
                            )
                        })}
                    </div>
                </>
            )
            : 
                <div>There are no products</div>
            }
        </section>
    );
};

export default CatalogPagination;