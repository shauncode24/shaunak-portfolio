import { useState, useEffect, useRef, useMemo } from 'react';
import './Homepage.css';
import bg from '@/assets/landing_page/bg_night.png';
import fireplace from '@/assets/landing_page/fireplace_2.gif';
import Hotbar from '@/components/Hotbar';
import fireCrackling from '@/assets/audio/fire_cackling.mp3';
import rainSFX from '@/assets/audio/rain.mp3';
import bgMusic1 from '@/assets/audio/bg_music_1.mp3';
import bgMusic2 from '@/assets/audio/bg_music_2.mp3';
import bgMusic3 from '@/assets/audio/bg_music_3.mp3';
import FireplaceEffects from '@/components/SmokeEffect';
import RainEffect from '@/components/RainEffect';

export default function Homepage() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const sfxRef = useRef(null);
    const rainRef = useRef(null);
    const musicRef = useRef(null);

    // Randomly select one of the background music tracks on mount
    const selectedMusic = useMemo(() => {
        const musicTracks = [bgMusic1, bgMusic2, bgMusic3];
        return musicTracks[Math.floor(Math.random() * musicTracks.length)];
    }, []);

    // Memoize fireflies data
    const fireflies = useMemo(() => {
        return Array.from({ length: 10 }).map((_, i) => ({
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
        // Attempt to play audios on mount
        const playAudios = () => {
            if (sfxRef.current) {
                sfxRef.current.volume = 0.6; // Fireplace slightly quieter
                sfxRef.current.play().catch(() => { });
            }
            if (rainRef.current) {
                rainRef.current.volume = 0.5; // Rain soft in background
                rainRef.current.play().catch(() => { });
            }
            if (musicRef.current) {
                musicRef.current.volume = 0.4; // Music soft in background
                musicRef.current.play().catch(() => { });
            }
        };

        playAudios();

        // Fallback: Play on first click anywhere if autoplay was prevented
        const handleFirstClick = () => {
            playAudios();
            document.removeEventListener('click', handleFirstClick);
        };
        document.addEventListener('click', handleFirstClick);

        return () => document.removeEventListener('click', handleFirstClick);
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
        <div className="homepage-container" onClick={() => {
            sfxRef.current?.play();
            rainRef.current?.play();
            musicRef.current?.play();
        }}>
            <audio ref={sfxRef} loop autoPlay preload="auto">
                <source src={fireCrackling} type="audio/mpeg" />
            </audio>
            <audio ref={rainRef} loop autoPlay preload="auto">
                <source src={rainSFX} type="audio/mpeg" />
            </audio>
            <audio ref={musicRef} loop autoPlay preload="auto">
                <source src={selectedMusic} type="audio/mpeg" />
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

            {/* Realistic Three.js Rain */}
            <RainEffect />

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
