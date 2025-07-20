import React, { useState, useEffect, useRef } from 'react';
import banner1 from '../assets/banner1.png';
import banner2 from '../assets/banner2.png';
import banner3 from '../assets/banner3.png';

const images = [banner1, banner2, banner3];

const BannerCarousel = () => {
    const [current, setCurrent] = useState(0);
    const startX = useRef<number | null>(null);
    const isDragging = useRef(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % images.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    // Handle swipe/drag
    const onTouchStart = (e: React.TouchEvent) => {
        startX.current = e.touches[0].clientX;
        isDragging.current = true;
    };
    const onTouchEnd = (e: React.TouchEvent) => {
        if (!isDragging.current || startX.current === null) return;
        const endX = e.changedTouches[0].clientX;
        handleSwipe(startX.current, endX);
        isDragging.current = false;
        startX.current = null;
    };
    const onMouseDown = (e: React.MouseEvent) => {
        startX.current = e.clientX;
        isDragging.current = true;
    };
    const onMouseUp = (e: React.MouseEvent) => {
        if (!isDragging.current || startX.current === null) return;
        const endX = e.clientX;
        handleSwipe(startX.current, endX);
        isDragging.current = false;
        startX.current = null;
    };

    const handleSwipe = (start: number, end: number) => {
        const diff = start - end;
        if (Math.abs(diff) > 50) {
            if (diff > 0) {
                // swipe left
                setCurrent((prev) => (prev + 1) % images.length);
            } else {
                // swipe right
                setCurrent((prev) => (prev - 1 + images.length) % images.length);
            }
        }
    };

    return (
        <div
            className="w-full aspect-[1408/768] relative overflow-hidden"
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
            onMouseDown={onMouseDown}
            onMouseUp={onMouseUp}
            style={{ userSelect: 'none', touchAction: 'pan-y' }}
        >
            {images.map((img, idx) => (
                <img
                    key={img}
                    src={img}
                    alt={`Banner ${idx + 1}`}
                    className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${idx === current ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                    style={{ transitionProperty: 'opacity' }}
                    draggable={false}
                />
            ))}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                {images.map((_, idx) => (
                    <button
                        key={idx}
                        className={`w-3 h-3 rounded-full ${idx === current ? 'bg-white' : 'bg-white/50'}`}
                        onClick={() => setCurrent(idx)}
                        aria-label={`Go to slide ${idx + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default BannerCarousel;
