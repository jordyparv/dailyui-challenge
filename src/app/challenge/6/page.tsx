'use client'
import HoverFollowCard from '@/components/HoverFollowCard'
import Screen from '@/components/Screen'
import Image from 'next/image'
import React from 'react'

export default function Page() {


    return (
        <Screen>
            <HoverFollowCard>
                <div className='h-full bg-[url(http://localhost:3000/images/bg-pattern.jpg)] bg-cover w-full rounded-lg overflow-hidden'>
                    <div className='h-full bg-gradient-to-t from-orange-500/95 to-red-600/70'>
                        <div className='flex flex-col items-center justify-evenly h-full gap-2'
                        >
                            <div>
                                <div className="rounded-full bg-gray-200 w-36 h-36 overflow-hidden  border shadow-lg border-orange-500 ">
                                    <Image src='/images/profile.jpg' alt='profilpic' width={300} height={300} className='object-cover' />
                                </div>
                            </div>

                            <div className='bg-white/20 border-4  shadow rounded-2xl mx-4 p-2 flex justify-center items-center flex-col backdrop-blur h-1/2'>
                                <div className=''>
                                    <p className='p-2  font-semibold text-black/80'>Name : Sara</p>
                                    <p className='p-2  font-semibold text-black/80'>Email : sara@jordan.co</p>
                                    <p className='p-2  font-semibold text-black/80'>Phone : +913284651365</p>
                                    <p className='p-2  font-semibold text-black/80'>Designation : Software Engineer</p>
                                    <p className='p-2  font-semibold text-black/80'>Department : IT</p>
                                    <p className='p-2  font-semibold text-black/80'>Company : XYZ</p>
                                </div>
                            </div>
                            <p className='text-xs font-medium'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                        </div>
                    </div >
                </div>
            </HoverFollowCard>
        </Screen >
    )
}
