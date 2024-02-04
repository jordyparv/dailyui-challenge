import Screen from '@/components/Screen'
import Image from 'next/image'
import React from 'react'

export default function page() {
    return (
        <Screen>
            <div className='grid h-full bg-gradient-to-t from-blue-500 to-rose-600  place-items-center'>

                <div className='mx-2 rounded-full overflow-hidden hover:scale-110 transition-all hover:rotate-180'>
                    <Image src='/images/logoc3.png' alt='logo' width={300} height={300} />

                </div>
            </div>
        </Screen>
    )
}
