import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <div className='bg-gradient-to-t from-blue-500 via-purple-500 to-rose-500 w-screen min-h-screen p-2'>
      <h1 className='text-4xl text-white font-medium uppercase'># Daily Challenge</h1>
      <ul className='flex flex-wrap gap-2'>
        {new Array(5).fill(1).map((item, idx) => <li className='bg-white text-black p-1 rounded-full w-14 text-center hover:scale-105 transition-all' key={idx} >
          <Link
            className='block'
            href={`/challenge/${idx + 1}`} >
            {idx + 1}</Link></li>)}
      </ul>
    </div>
  )
}
