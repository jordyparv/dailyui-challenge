import React, { useState, useEffect, useRef } from 'react';

const ResizableText = ({ text, maxFontSize, minFontSize }: ResizableTextPropsType) => {
    const [fontSize, setFontSize] = useState(maxFontSize);
    const ref = useRef<HTMLInputElement>(null);
    useEffect(() => {
        const updateFontSize = () => {
            const textContainer = ref.current
            if (textContainer) {
                const { clientWidth } = textContainer;
                const newFontSize = Math.max(
                    minFontSize,
                    Math.min(maxFontSize, (clientWidth / text.length) * 2)
                );
                setFontSize(newFontSize);
            }
        };

        window.addEventListener('resize', updateFontSize);
        updateFontSize();

        return () => {
            window.removeEventListener('resize', updateFontSize);
        };
    }, [text, maxFontSize, minFontSize]);

    return (
        <div ref={ref} className='break-words text-right w-full' style={{ fontSize }}>
            {text}
        </div>
    );
};

export default ResizableText;

type ResizableTextPropsType =
    {
        text: String;
        maxFontSize: number;
        minFontSize: number;
    }
