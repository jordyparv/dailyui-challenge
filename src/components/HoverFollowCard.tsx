'use client'
import React, { useEffect, useRef } from 'react'

export default function HoverFollowCard({ children, tilt = 15 }: HoverMoveCardPropsType) {
    const THRESHOLD: number = tilt;
    const cardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const motionMatchMedia = window?.matchMedia && window.matchMedia("(prefers-reduced-motion)");
        const currentCardRef = cardRef.current;
        const handleHover = (e: React.MouseEvent<HTMLDivElement>) => {
            const { clientX, clientY, currentTarget } = e;
            const { clientWidth, clientHeight, offsetLeft, offsetTop } = currentTarget;

            const horizontal = (clientX - offsetLeft) / clientWidth;
            const vertical = (clientY - offsetTop) / clientHeight;
            const rotateX = (THRESHOLD / 2 - horizontal * THRESHOLD).toFixed(2);
            const rotateY = (vertical * THRESHOLD - THRESHOLD / 2).toFixed(2);
            currentCardRef?.style?.setProperty('transform', `perspective(${clientWidth}px) rotateX(${rotateY}deg) rotateY(${rotateX}deg) scale3d(1, 1, 1)`);
        }

        const resetStyles = (e: React.MouseEvent<HTMLDivElement>) => {
            currentCardRef?.style?.setProperty('transform', `perspective(${e.currentTarget.clientWidth}px) rotateX(0deg) rotateY(0deg)`);
        };

        if (motionMatchMedia && !motionMatchMedia.matches && cardRef) {
            currentCardRef?.addEventListener("mousemove", handleHover as any);
            currentCardRef?.addEventListener("mouseleave", resetStyles as any);
        }

        return () => {
            currentCardRef?.removeEventListener("mouseleave", resetStyles as any);
            currentCardRef?.removeEventListener("mousemove", handleHover as any);
        };
    }, [cardRef, THRESHOLD]);
    return (
        <div ref={cardRef} className='h-full w-full'>{children}</div>
    )
}

interface HoverMoveCardPropsType {
    children: React.ReactNode;
    tilt?: number
}
