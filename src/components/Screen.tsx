import React from 'react'

export default function Screen({ children }: { children: React.ReactNode }) {
    return (
        <div className='w-screen h-screen bg-black/85 grid place-items-center p-1'>
            <div className='w-[360px] h-[644px] bg-white rounded-2xl overflow-hidden'>
                {children}
            </div>
        </div>
    )
}
