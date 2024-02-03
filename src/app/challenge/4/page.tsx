'use client'
import ResizableText from '@/components/ResizableText';
import Screen from '@/components/Screen'
import React, { useState } from 'react'
export default function Page() {
    const [displayOutput, setDisplayOutput] = useState<string>('')

    const handleClick = (label: string, value: string) => {
        const opr = ['*', '/', '-', '+']
        const len = displayOutput.length
        const symbolsToIgnore = [
            '=', 'back', '+/-'
        ]
        if (opr.includes(displayOutput[len - 1]) && opr.includes(value)) {
            const tmp = displayOutput.slice(0, -1)

            setDisplayOutput(tmp)
        }
        if (value && !symbolsToIgnore.includes(value))
            setDisplayOutput(prev => prev.concat(value))
        switch (value) {
            case '=':
                let output = String(eval(displayOutput))

                setDisplayOutput(output)
                break;
            case '+/-':
                setDisplayOutput(prev => '-' + prev)
                break;
            case 'ac':
                setDisplayOutput('')
                break;

            case 'back':
                setDisplayOutput(prev => prev.slice(0, -1));
                break;
            default:
                break;
        }
    }
    return (
        <Screen>
            <div className='bg-black w-full h-full'>
                <Display output={displayOutput} />
                <div className='p-2 grid gap-2 grid-cols-4'>
                    {/* first */}
                    <div className='col-span-4 flex gap-2 justify-evenly bg-white/20 p-2 rounded-full'>
                        <Button onClick={handleClick} label='AC' value='ac' className='bg-white/40 !min-h-14 !min-w-14 text-base font-medium' />
                        <Button onClick={handleClick} label='+/-' value='+/-' className='bg-white/40 !min-h-14 !min-w-14 text-base font-medium' />
                        <Button onClick={handleClick} label='%' value='%' className='bg-white/40 !min-h-14 !min-w-14 text-base font-medium' />
                        <Button onClick={handleClick} label='/' value='/' className='text-white bg-yellow-600 !min-h-14 !min-w-14 text-base font-medium' />
                        <Button onClick={handleClick} label='back' value='back' className='text-white bg-yellow-600 !min-h-14 !min-w-14 text-base font-medium' />
                    </div>
                    {/* second */}
                    <Button onClick={handleClick} label='7' value='7' />
                    <Button onClick={handleClick} label='8' value='8' />
                    <Button onClick={handleClick} label='9' value='9' />
                    <Button onClick={handleClick} label='*' value='*' className='text-white bg-yellow-600' />
                    {/* third */}
                    <Button onClick={handleClick} label='4' value='4' />
                    <Button onClick={handleClick} label='5' value='5' />
                    <Button onClick={handleClick} label='6' value='6' />
                    <Button onClick={handleClick} label='-' value='-' className='text-white bg-yellow-600' />
                    {/* fourth */}
                    <Button onClick={handleClick} label='1' value='1' />
                    <Button onClick={handleClick} label='2' value='2' />
                    <Button onClick={handleClick} label='3' value='3' />
                    <Button onClick={handleClick} label='+' value='+' className='text-white bg-yellow-600' />
                    {/* fifth */}
                    <Button onClick={handleClick} label='0' value='0' className='col-span-2 bg-white/10' />
                    <Button onClick={handleClick} label='.' value='.' />
                    <Button onClick={handleClick} label='=' value='=' className='text-white bg-yellow-600' />
                </div>
            </div>
        </Screen>
    )
}


const Display = ({ output }: DisplayPropsType) => {
    return <div className='text-white text-4xl font-medium px-4 h-36 flex items-center justify-end'>
        <ResizableText text={output} maxFontSize={30} minFontSize={10} />
    </div>
}


const Button = ({ className, label, value, symbol, onClick }: ButtonPropsType) => {
    return <button className={`min-w-20 grid place-items-center min-h-20 text-4xl rounded-full hover:opacity-50 text-white ${className ? className : 'bg-white/10'}`}
        onClick={() => { onClick && onClick(label, value) }}>{label}</button>
}



type DisplayPropsType = {
    output: string
}
type ButtonPropsType = {
    label: string;
    value: string;
    symbol?: string;
    color?: string;
    textColor?: string;
    className?: string;
    onClick?: (label: string, name: string) => void;

}