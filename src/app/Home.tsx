import { TypePaginationProducts } from '@/types/product.interface';
import Carousel from '@/ui/carousel/Carousel';
import Catalog from '@/ui/catalog/Catalog';
import { FC } from 'react';
import { carouselItems } from './carousel.data';

const Home: FC<TypePaginationProducts> = ({products}) => {
    return (
        <>
            <Carousel items={carouselItems} className='mb-10'/>
            <Catalog title='Freshed products' products={products}/>
        </>
    );
};

export default Home;