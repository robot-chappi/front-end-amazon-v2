import type { Metadata } from 'next'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'
import Heading from '@/ui/Heading'
import Link from 'next/link'

export const metadata: Metadata = {
    title: 'Thanks',
    ...NO_INDEX_PAGE
}

export default function ThanksPage() {
    return (
        <>
            <div className='text-center my-auto'>
                <Heading>Thanks!</Heading>
                <Link href={'/'} className='mt-5'>Go to home</Link>
            </div>
        </>
    )
}
