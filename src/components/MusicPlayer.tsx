'use client'
import Head from 'next/head';
import React, { useState } from 'react';
import Image from 'next/image';
const cover = 'http://localhost:3000/images/cover.png'
const cover2 = 'http://localhost:3000/images/cover2.jpg'
import Marquee from 'react-fast-marquee';
export default function MusicPlayer() {
    const [isPlaying, setPlaying] = useState<boolean>(false);
    const handleisPlaying = () => setPlaying((prev) => !prev);
    const [queue, setQueue] = useState<boolean>(false);
    return (

        <div
            className='w-full h-full rounded-2xl'
            style={{
                background: `url(${queue ? cover2 : cover})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
            }}
        >
            <div className='h-full w-full bg-black/40 backdrop-blur-2xl flex flex-col items-center border rounded-xl border-white/10'>
                <div className='h-80 grid place-items-center'>
                    <Image
                        src={!queue ? '/images/cover.png' : '/images/cover2.jpg'}
                        alt='cover'
                        width={150}
                        height={150}
                        className={`object-contain rounded-lg backdrop-shadow select-none transition-all ${isPlaying ? 'w-60 h-60' : 'w-40 h-40'
                            }`}
                    />
                </div>
                <div className='place-self-start mx-8'>
                    <Marquee
                        className='text-white/80 font-semibold'
                        speed={30}
                        gradient={false}
                    >
                        Song Name
                    </Marquee>
                    <p className='text-white/50 font-semibold'>ArtistName</p>
                </div>
                <div className='w-full flex px-8 mt-4 transition-all hover:scale-105'>
                    <div
                        className={`bg-white/80 w-[10%] h-2 rounded-md rounded-r-none`}
                    ></div>
                    <div className='bg-white/30 w-[90%] h-2 rounded-md rounded-l-none'></div>
                </div>
                <div className='text-white/70 w-full text-sm mt-2 flex justify-between px-8'>
                    <span>01:12</span>
                    <span>-02:14</span>
                </div>
                <div className='flex gap-6 place-items-center'>
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10  text-white text-4xl transition-all hover:rounded-full hover:bg-black/10e">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 16.811c0 .864-.933 1.406-1.683.977l-7.108-4.061a1.125 1.125 0 0 1 0-1.954l7.108-4.061A1.125 1.125 0 0 1 21 8.689v8.122ZM11.25 16.811c0 .864-.933 1.406-1.683.977l-7.108-4.061a1.125 1.125 0 0 1 0-1.954l7.108-4.061a1.125 1.125 0 0 1 1.683.977v8.122Z" />
                        </svg>
                    </button>

                    {isPlaying ? (
                        <button onClick={handleisPlaying}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10  text-white text-4xl transition-all hover:rounded-full hover:bg-black/10">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25v13.5m-7.5-13.5v13.5" />
                            </svg>
                        </button>

                    ) : (
                        <button className='' onClick={handleisPlaying}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10  text-white text-4xl transition-all hover:rounded-full hover:bg-black/10">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
                            </svg>
                        </button>


                    )}
                    <button onClick={() => setQueue((prev) => !prev)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-white text-4xl transition-all hover:rounded-full hover:bg-black/10">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061A1.125 1.125 0 0 1 3 16.811V8.69ZM12.75 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061a1.125 1.125 0 0 1-1.683-.977V8.69Z" />
                        </svg>
                    </button>

                    <i
                        className='bx bx-fast-forward '

                    ></i>
                </div>
                <div className='w-full flex px-10 gap-2 mt-8 items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 bx bxs-volume text-white text-sm">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 9.75 19.5 12m0 0 2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6 4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
                    </svg>
                    <div className='w-full flex transition-all hover:scale-105'>
                        <div
                            className={`bg-white/80 w-[10%] h-2 rounded-md rounded-r-none`}
                        ></div>

                        <div className='bg-white/30 w-[90%] h-2 rounded-md rounded-l-none'></div>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 bx bxs-volume-full text-white text-sm">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
                    </svg>
                </div>
            </div>
        </div>

    );
}