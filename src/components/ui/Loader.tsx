import { FC } from 'react';

const Loader: FC = () => {
    return (
        <div className='flex flex-col items-center'>
            <svg className='w-10 h-10' version="1.1" id="L3" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            viewBox="0 0 100 100" enableBackground="new 0 0 0 0" xmlSpace="preserve">
                <circle fill="none" stroke="#fff" strokeWidth="4" cx="50" cy="50" r="44" className='opacity-50'/>
                <circle fill="#fff" stroke="#e74c3c" strokeWidth="3" cx="8" cy="54" r="6" >
                    <animateTransform
                    attributeName="transform"
                    dur="2s"
                    type="rotate"
                    from="0 50 48"
                    to="360 50 52"
                    repeatCount="indefinite" />
                    
                </circle>
            </svg>
            <p className='pt-3 text-sm'>Loading...</p>
        </div>
    );
};

export default Loader;