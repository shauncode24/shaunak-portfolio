import { useEffect, useState } from 'react';
import './LoadingScreen.css';
import loadingGif from '@/assets/loading_screen.gif';

export default function LoadingScreen({ onLoadComplete }) {
    const [fadeOut, setFadeOut] = useState(false);

    const handleComplete = () => {
        setFadeOut(true);
        setTimeout(() => {
            onLoadComplete();
        }, 500);
    };

    useEffect(() => {
        // Auto-complete after 1.75 seconds
        const timer = setTimeout(() => {
            handleComplete();
        }, 1750);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div
            className={`loading-screen ${fadeOut ? 'fade-out' : ''}`}
            onClick={handleComplete}
            style={{ cursor: 'pointer' }}
        >
            <img
                src={loadingGif}
                alt="Loading..."
                className="loading-gif"
            />
            <p className="loading-hint">Click to continue</p>
        </div>
    );
}
