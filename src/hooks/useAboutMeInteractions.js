import { useState, useEffect } from 'react';

export const useAboutMeInteractions = (playChestClose) => {
    const [activeComponent, setActiveComponent] = useState(null);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape' && activeComponent) {
                if (activeComponent === 'about') {
                    playChestClose();
                }
                setActiveComponent(null);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [activeComponent, playChestClose]);

    return {
        activeComponent,
        setActiveComponent
    };
};
