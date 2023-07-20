import { IProduct } from '@/types/product.interface';
import { FC, useState } from 'react';
import { Rating } from 'react-simple-star-rating';

interface IProductRating {
    product: IProduct
    isText?: boolean
}

const ProductRating: FC<IProductRating> = ({product, isText = false}) => {
    // const {data:rating} = useQuery(['get product rating', product.id], () => ReviewService.getAverageByProduct(product.id), {
    //     select: ({data}) => data
    // })

    // if(!rating) return null

    const [rating] = useState<number>(Math.round(product.reviews.reduce((acc, review) => acc + review.rating, 0) / product.reviews.length) || 0)

    return (
        <div className='mb-auto flex items-center gap-1'>
            {!!product.reviews.length && (
                <span className='flex items-center gap-1'>
                    <Rating
                        readonly
                        initialValue={rating}
                        SVGstyle={{
                            display: 'inline-block'
                        }}
                        size={30}
                        allowFraction
                        transition
                    />
                    <span className='text-primary'>{rating}</span>
                </span>
            )}
            
            {isText && (
                <span className='text-xs'>({product.reviews.length} reviews)</span>
            )}
        </div>
    );
};

export default ProductRating;