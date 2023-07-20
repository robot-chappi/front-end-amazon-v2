import { useActions } from '@/hooks/useActions';
import { FC } from 'react';

import { BsCaretLeftSquare } from 'react-icons/bs';
import styles from './Carousel.module.scss';

const CarouselNavigation: FC = () => {
    const {nextSlide, prevSlide} = useActions()

    return (
        <div className={styles.nav}>
            <button onClick={() => prevSlide()}>
                <BsCaretLeftSquare/>
            </button>
            <button onClick={() => nextSlide({carouselLength: 2})}>
                <BsCaretLeftSquare/>
            </button>
        </div>
    );
};

export default CarouselNavigation;