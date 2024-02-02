import Image from 'next/image'
import React from 'react'
import localFont from '@next/font/local'

const MonsterFont = localFont({
    src: [
        {
            path: '../../../../public/assets/fonts/WOODCUTTER-DRIPPING.ttf',
            weight: '500'
        },
    ],
    variable: '--font-monster'
})

export default function Page() {
    return (
        <main>
            <div className={`relative mx-auto mt-10 flex flex-col items-center justify-center gap-4 ${MonsterFont.variable} font-sans`}>
                <h1 className='uppercase text-[10rem] tracking-widest'>Lup<span className='relative'>
                    p<div className='top-14 -right-6 absolute bg-gray-900 rounded-full overflow-hidden w-[80px] h-[80px]'>
                        <Image src='/img/logo1.png' alt='logo' height={120} width={120} />
                    </div></span>y</h1>
                <h1 className='uppercase text-[10rem] -mt-20 tracking-widest'>CLUBN<span className='relative'>F
                    <div className='top-14 -right-4 absolute bg-gray-900 rounded-full overflow-hidden w-[80px] h-[80px]'>
                        <Image src='/img/logo3.png' alt='logo' height={120} width={120} />
                    </div>
                </span>T</h1>
            </div>
            <div className='flex justify-between  min-h-72 items-center px-16'>
                <div className='rounded-full overflow-hidden  -mt-24'>
                    <Image src='/img/logo2.png' alt='logo' width={280} height={280} />
                </div>
                <div className='w-52 h-52 bg-[#0d41e1] rounded-full grid place-items-center'>
                    <p className='text-2xl font-medium text-center'>
                        Get
                        <br />
                        Your
                        <br />
                        LUPPY
                    </p>
                </div>
                <div className='w-36 self-end py-2'>
                    <p className='break-all'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ea quaerat.
                    </p>
                </div>
            </div>
        </main>
    )
}
