import { useState, useEffect } from 'react';

export const useParallax = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            const x = (e.clientX / window.innerWidth - 0.5) * 2;
            const y = (e.clientY / window.innerHeight - 0.5) * 2;
            setMousePosition({ x, y });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const bgTransform = {
        transform: `translate(${-mousePosition.x * 5}px, ${-mousePosition.y * 5}px)`
    };

    const fireplaceTransform = {
        transform: `translate(calc(-50% + ${-mousePosition.x * 5}px), calc(-50% + ${-mousePosition.y * 5}px))`
    };

    return { mousePosition, bgTransform, fireplaceTransform };
};
