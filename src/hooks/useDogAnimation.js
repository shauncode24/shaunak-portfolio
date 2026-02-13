import { useState, useEffect } from 'react';

export const useDogAnimation = () => {
    const [isDogMoving, setIsDogMoving] = useState(false);
    const [isDogHovered, setIsDogHovered] = useState(false);

    useEffect(() => {
        let timeoutId;

        const scheduleDogMovement = () => {
            const delay = Math.random() * 10000 + 5000;
            timeoutId = setTimeout(() => {
                setIsDogMoving(true);
                setTimeout(() => {
                    setIsDogMoving(false);
                    scheduleDogMovement();
                }, 3000);
            }, delay);
        };

        scheduleDogMovement();

        return () => clearTimeout(timeoutId);
    }, []);

    return {
        isDogMoving,
        isDogHovered,
        setIsDogHovered
    };
};
