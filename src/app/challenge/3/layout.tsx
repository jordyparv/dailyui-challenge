import React from 'react'
import Page from './page'
import Header from './components/Header'
export default function layout() {
    return (
        <div className='bg-[#142b16]  min-h-screen text-white'>
            <Header />
            <Page />
        </div>
    )
}


// design from https://www.behance.net/gallery/188738463/NFT-Crypto-Collection-Website-Design