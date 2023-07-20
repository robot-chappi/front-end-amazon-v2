import { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react';

import cn from 'clsx';

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant: 'dark' | 'light',
    size?: 'sm' | 'md' | 'lg'
}

const Button: FC<PropsWithChildren<IButton>> = ({children, className, size='md', variant, ...rest}) => {
    return <button {...rest} className={cn('btn', {
        'btn-orange' : variant === 'dark',
        'btn-white' : variant === 'light',
        'btn-small': size === 'sm',
        'btn-medium': size === 'md',
        'btn-large': size === 'lg'
    }, className)}>{children}</button>
};

export default Button;