'use client'

import { useAuth } from '@/hooks/useAuth';
import { useIsAdminPanel } from '@/hooks/useIsAdminPanel';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import { MdOutlineAdminPanelSettings } from 'react-icons/md';
import HeaderProfile from './HeaderProfile';
import Search from './Search';
import Cart from './cart/HeaderCart';

const Header: FC = () => {
    const {isAdminPanel} = useIsAdminPanel()
    const {user} = useAuth()
    
    return (
        <header className='bg-secondary w-full items-center py-6 px-6 grid' style={{gridTemplateColumns: '1fr 3fr 1.2fr'}}>
            <Link href={'/'}>
                {isAdminPanel ? (
                    <h2 className='text-3xl text-white font-semibold'>Admin Panel</h2>
                ) : (
                    <Image priority
                        width={150}
                        height={0}
                        src='/images/logo.svg'
                        alt='Amazon v2'
                        />
                )}
            </Link>
            <Search/>
            <div className='flex items-center justify-end gap-10'>
                {user?.isAdmin && !isAdminPanel && (
                    <Link href='/admin' className='hover:text-primary transition-colors duration-200 text-white inline-block text-lg'>
                        <MdOutlineAdminPanelSettings size={29}/>
                    </Link>
                ) }
                <Link href='/favorites' className='text-white'>
                    <AiOutlineHeart size={28}/>
                </Link>
                <Cart />
                <HeaderProfile/>
            </div>
        </header>
    );
};

export default Header;