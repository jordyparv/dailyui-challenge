import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Header() {
    return (
        <header className='flex  text-white py-4 px-6 items-center justify-between'>
            <Link href={'/#'} className='font-bold text-2xl'>
                <h2>Crazy <br />Luppy</h2>
            </Link>
            <nav className='flex '>
                <ul className='flex gap-4 items-center'>
                    <li><Link href='/' className='uppercase font-medium block hover:drop-shadow-[0_0px_15px_rgba(255,255,255,1)]'>Roadmap</Link></li>
                    <li><Link href='/' className='uppercase font-medium block hover:drop-shadow-[0_0px_15px_rgba(255,255,255,1)]'>Collection</Link></li>
                    <li><Link href='/' className='uppercase font-medium block hover:drop-shadow-[0_0px_15px_rgba(255,255,255,1)]'>Luppy Club</Link></li>
                    <li><Link href='/' className='uppercase font-medium block hover:drop-shadow-[0_0px_15px_rgba(255,255,255,1)]'>Rarity</Link></li>
                </ul>
            </nav>
            <button className='bg-[#0d41e1] text-white py-2 px-4 hover:shadow-2xl hover:drop-shadow-[0_0px_15px_rgba(51,51,255,0.5)] rounded-full'>Get Your Luppy</button>
        </header>
    )
}
