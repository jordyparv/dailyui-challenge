import React, { Dispatch, SetStateAction } from 'react'

export default function Modal({ children, show, setShowModal }: propsType) {
    if (!show)
        return;
    return (
        <div className='bg-black/50 absolute top-0 w-screen h-screen grid place-items-center'>
            <div className='bg-white rounded-lg p-2 min-w-72 min-h-52 grid place-items-center'>

                {children}

            </div>
        </div>
    )
}


type propsType = {
    children: React.ReactNode,
    show: boolean,
    setShowModal?: Dispatch<SetStateAction<boolean>>;
}