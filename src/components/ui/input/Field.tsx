import cn from 'clsx';
import { forwardRef } from 'react';
import { IField } from './field.interface';
import styles from './form.module.scss';

const Field = forwardRef<HTMLInputElement, IField>(({placeholder, error, type='text', className, style, Icon, ...rest}, ref) => {
        return (
            <div className={cn('mb-4', className)} style={style}>
                <label>
                    <span className='mb-1 block'>
                        {Icon && <Icon className='mr-3'/>}
                        {placeholder}
                    </span>
                    <input ref={ref} placeholder={placeholder} className={cn('px-4 py-2 w-full outline-none transition-all border border-gray border-solid focus:border-primary placeholder:font-gray rounded-lg', {
                        'border-red': !!error
                    })} type={type} {...rest} />
                </label>
                {error && <div className={styles.error}>{error}</div>}
            </div>
        );
    }
)

Field.displayName = 'Field'

export default Field;