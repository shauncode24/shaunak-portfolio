import { useState, useEffect, useRef, useMemo } from 'react';
import './Homepage.css';
import bg from '@/assets/bg_14.png';
import fireplace from '@/assets/fireplace_2.gif';
import Hotbar from '@/components/Hotbar';
import fireCrackling from '@/assets/audio/fire_cackling.mp3';
import FireplaceEffects from '@/components/SmokeEffect';

export default function Homepage() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const audioRef = useRef(null);

    // Memoize fireflies data
    const fireflies = useMemo(() => {
        return Array.from({ length: 30 }).map((_, i) => ({
            id: i,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            delay: `${Math.random() * 5}s`,
            duration: `${5 + Math.random() * 10}s`,
            color: Math.random() > 0.5 ? '#ffeb3b' : '#ffc107', // Yellowish-gold colors
            size: `${1.5 + Math.random() * 1.5}px` // Around 2px as requested
        }));
    }, []);

    useEffect(() => {
        const handleMouseMove = (e) => {
            // Calculate position as percentage of viewport
            const x = (e.clientX / window.innerWidth - 0.5) * 2; // Range: -1 to 1
            const y = (e.clientY / window.innerHeight - 0.5) * 2; // Range: -1 to 1

            setMousePosition({ x, y });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    useEffect(() => {
        // Play audio when component mounts
        if (audioRef.current) {
            audioRef.current.volume = 1; // Set volume to 100%
            const playPromise = audioRef.current.play();

            if (playPromise !== undefined) {
                playPromise
                    .then(() => {
                        console.log('Audio playing successfully');
                    })
                    .catch(error => {
                        console.log('Audio autoplay prevented:', error);
                        console.log('Click anywhere on the page to start audio');

                        // Add click listener to start audio on user interaction
                        const startAudio = () => {
                            audioRef.current?.play();
                            document.removeEventListener('click', startAudio);
                        };
                        document.addEventListener('click', startAudio);
                    });
            }
        }
    }, []);

    // Subtle movement: max 10px in any direction
    // Negative values so background moves opposite to cursor (revealing hidden edges)
    const bgTransform = {
        transform: `translate(${-mousePosition.x * 5}px, ${-mousePosition.y * 5}px)`,
        transition: 'transform 0.3s ease-out'
    };

    // Fireplace needs to maintain its centering transform while also moving with background
    const fireplaceTransform = {
        transform: `translate(calc(-50% + ${-mousePosition.x * 5}px), calc(-50% + ${-mousePosition.y * 5}px))`,
        transition: 'transform 0.3s ease-out'
    };

    return (
        <div className="homepage-container" onClick={() => audioRef.current?.play()}>
            <audio ref={audioRef} loop autoPlay preload="auto">
                <source src={fireCrackling} type="audio/mpeg" />
            </audio>

            {/* Fireflies */}
            <div className="fireflies-container">
                {fireflies.map((firefly) => (
                    <div
                        key={firefly.id}
                        className="firefly"
                        style={{
                            top: firefly.top,
                            left: firefly.left,
                            '--delay': firefly.delay,
                            '--duration': firefly.duration,
                            '--color': firefly.color,
                            '--size': firefly.size
                        }}
                    />
                ))}
            </div>

            {/* Realistic Three.js Fire & Smoke */}
            <FireplaceEffects />

            <img
                className="homepage-background"
                src={bg}
                alt="Chest"
                style={bgTransform}
            />
            <img
                className="homepage-fireplace"
                src={fireplace}
                alt="Fireplace"
                style={fireplaceTransform}
            />
            <div className="homepage-content">
                SHAUNAK KARVE
                {/* <span>Inspire to Create</span> */}
            </div>
            <Hotbar />
        </div>
    );
}
