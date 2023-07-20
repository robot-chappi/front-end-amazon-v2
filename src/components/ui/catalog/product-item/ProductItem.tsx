import { IProduct } from '@/types/product.interface';
import { convertPrice } from '@/utils/convertPrice';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import AddToCartButton from './AddToCartButton';
import FavoriteButton from './FavoriteButton';
import ProductRating from './ProductRating';

const ProductItem: FC<{product: IProduct}> = ({product}) => {
    return (
        <div className='animate-scaleIn bg-white mx-auto rounded-md'>
            <div className='bg-secondary rounded-xl relative'>
                <div className='absolute bg-white p-5 top-0 rounded-tr-md right-0 z-1'>
                    <FavoriteButton productId={product.id}/>
                    <AddToCartButton product={product}/>
                </div>
                <Link href={`/product/${product.slug}`}>
                    <Image className='rounded-t-md block mx-auto' width={300} height={300} src={product.images[0]} alt={product.name}/>
                </Link>
            </div>
            <div className='p-2 text-secondary'>
                <Link href={`/product/${product.slug}`}>
                    <h3 className='mb-1 font-semibold'>{product.name}</h3>
                </Link>
                <Link href={`/category/${product.category.slug}`} className='text-aqua text-sm mb-2'>{product.category.name}</Link>
                <ProductRating product={product} isText />
                <div className='text-xl text-center rounded-md font-semibold bg-primary my-2'>{convertPrice(product.price)}</div> 
            </div>
        </div>
    );
};

export default ProductItem;