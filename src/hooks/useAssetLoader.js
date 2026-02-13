import { useState, useEffect } from 'react';

export const useAssetLoader = (imageSources) => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        let loadedCount = 0;
        const totalImages = imageSources.length;

        const handleImageLoad = () => {
            loadedCount++;
            if (loadedCount === totalImages) {
                setTimeout(() => setIsLoaded(true), 800);
            }
        };

        if (totalImages === 0) {
            setIsLoaded(true);
            return;
        }

        imageSources.forEach(src => {
            const img = new Image();
            img.src = src;
            img.onload = handleImageLoad;
            img.onerror = handleImageLoad; 
        });

        // Fallback
        const timer = setTimeout(() => setIsLoaded(true), 3000);
        return () => clearTimeout(timer);
    }, [imageSources]);

    return isLoaded;
};
