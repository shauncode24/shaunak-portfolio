import { useState, useEffect, useRef, useMemo } from 'react';
import './Homepage.css';

// Backgrounds
import bgNight from '@/assets/landing_page/bg_night.png';
import bgDay from '@/assets/landing_page/bg_day.png';
import bgSunrise from '@/assets/landing_page/bg_sunrise.png';
import bgSunset from '@/assets/landing_page/bg_sunset_1.png';

import fireplace from '@/assets/landing_page/fireplace_2.gif';
import Hotbar from '@/components/Hotbar';
import fireCrackling from '@/assets/audio/fire_cackling.mp3';
import rainSFX from '@/assets/audio/rain.mp3';
import bgMusic1 from '@/assets/audio/bg_music_1.mp3';
import bgMusic2 from '@/assets/audio/bg_music_2.mp3';
import bgMusic3 from '@/assets/audio/bg_music_3.mp3';
import FireplaceEffects from '@/components/SmokeEffect';
import { useNavigate } from 'react-router-dom';
import RainEffect from '@/components/RainEffect';

export default function Homepage() {
    const navigate = useNavigate();
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [timeOfDay, setTimeOfDay] = useState('day'); // Initial state
    const [isAutoMode, setIsAutoMode] = useState(true); // Default to auto-sync
    const [isMusicOn, setIsMusicOn] = useState(false);
    const [isRainOn, setIsRainOn] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const [currentTime, setCurrentTime] = useState(new Date());
    const [weatherDesc, setWeatherDesc] = useState('Loading weather...');

    // Mapping weather codes to descriptions
    const getWeatherDescription = (code) => {
        if (code === 0) return 'clear';
        if ([1, 2, 3].includes(code)) return 'partly cloudy';
        if ([45, 48].includes(code)) return 'foggy';
        if ([51, 53, 55, 56, 57].includes(code)) return 'drizzling';
        if ([61, 63, 65, 66, 67].includes(code)) return 'raining';
        if ([71, 73, 75, 77].includes(code)) return 'snowing';
        if ([80, 81, 82].includes(code)) return 'showery';
        if ([85, 86].includes(code)) return 'snowing';
        if ([95, 96, 99].includes(code)) return 'stormy';
        return 'clear';
    };

    // Function to get Mumbai time (UTC+5:30)
    const getMumbaiTimeOfDay = () => {
        const hour = new Date().getHours();
        if (hour >= 5 && hour < 8) return 'sunrise';
        if (hour >= 8 && hour < 17) return 'day';
        if (hour >= 17 && hour < 20) return 'sunset';
        return 'night';
    };

    // Function to fetch Mumbai weather and sync rain
    const syncWeather = async () => {
        try {
            console.log('Fetching weather for Mumbai...');
            const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=19.17&longitude=72.94&current=rain,weather_code,showers&forecast_days=1');
            if (!response.ok) throw new Error('Network response was not ok');

            const data = await response.json();
            const code = data.current.weather_code;

            const description = getWeatherDescription(code);
            setWeatherDesc(description);
            console.log('Weather update:', description, 'Code:', code);

            // Weather codes indicating rain/showers/thunderstorms
            const rainCodes = [51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 80, 81, 82, 95, 96, 99];
            const isRaining = rainCodes.includes(code);

            if (isAutoMode) {
                setIsRainOn(isRaining);
            }
        } catch (error) {
            console.error('Failed to fetch weather data:', error);
            setWeatherDesc('Weather Unavailable');
        }
    };

    // Update clock every second
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        // Initial setup on mount
        const mountInit = () => {
            if (isAutoMode) {
                setTimeOfDay(getMumbaiTimeOfDay());
            }
            syncWeather();
        };
        mountInit();

        // Re-check periodically
        const interval = setInterval(() => {
            if (isAutoMode) {
                setTimeOfDay(getMumbaiTimeOfDay());
                syncWeather();
            } else {
                // If not in auto mode, we still sync weather description for the top bar
                syncWeather();
            }
        }, 15 * 60 * 1000);

        return () => clearInterval(interval);
    }, []); // Run only on mount

    // Respect AUTO mode toggle
    useEffect(() => {
        if (isAutoMode) {
            setTimeOfDay(getMumbaiTimeOfDay());
            syncWeather();
        }
    }, [isAutoMode]);

    useEffect(() => {
        // Trigger entrance animations with a small delay to ensure CSS transitions fire
        const timer = setTimeout(() => setIsLoaded(true), 50);
        return () => clearTimeout(timer);
    }, []);

    const sfxRef = useRef(null);
    const rainRef = useRef(null);
    const musicRef = useRef(null);

    // Map time strings to imported assets
    const backgrounds = {
        day: bgDay,
        night: bgNight,
        sunrise: bgSunrise,
        sunset: bgSunset
    };

    // Randomly select one of the background music tracks on mount
    const selectedMusic = useMemo(() => {
        const musicTracks = [bgMusic1, bgMusic2, bgMusic3];
        return musicTracks[Math.floor(Math.random() * musicTracks.length)];
    }, []);

    // Memoize fireflies data
    const fireflies = useMemo(() => {
        return Array.from({ length: 15 }).map((_, i) => ({
            id: i,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            delay: `${Math.random() * 5}s`,
            duration: `${5 + Math.random() * 10}s`,
            color: Math.random() > 0.5 ? '#ffeb3b' : '#ffc107',
            size: `${1.5 + Math.random() * 1.5}px`
        }));
    }, []);

    useEffect(() => {
        const handleMouseMove = (e) => {
            const x = (e.clientX / window.innerWidth - 0.5) * 2;
            const y = (e.clientY / window.innerHeight - 0.5) * 2;
            setMousePosition({ x, y });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    // Audio volume and playback management based on state
    useEffect(() => {
        if (sfxRef.current) {
            sfxRef.current.volume = isMusicOn ? 0.6 : 0;
            if (isMusicOn) {
                sfxRef.current.play().catch(() => { });
            }
        }
        if (musicRef.current) {
            musicRef.current.volume = isMusicOn ? 0.4 : 0;
            if (isMusicOn) {
                musicRef.current.play().catch(() => {
                    console.log('Music play deferred until interaction');
                });
            }
        }
        if (rainRef.current) {
            const shouldPlayRain = isRainOn && isMusicOn;
            rainRef.current.volume = shouldPlayRain ? 0.5 : 0;
            if (shouldPlayRain) {
                rainRef.current.play().catch(() => {
                    console.log('Rain play deferred until interaction');
                });
            }
        }
    }, [isMusicOn, isRainOn]);

    useEffect(() => {
        const playAudios = () => {
            const masterOn = isMusicOn;
            if (masterOn && sfxRef.current) {
                sfxRef.current.volume = 0.6;
                sfxRef.current.play().catch(() => { });
            }
            if (isRainOn && masterOn && rainRef.current) {
                rainRef.current.volume = 0.5;
                rainRef.current.play().catch(() => { });
            }
            if (masterOn && musicRef.current) {
                musicRef.current.volume = 0.4;
                musicRef.current.play().catch(() => { });
            }
        };

        playAudios();

        const handleFirstClick = () => {
            playAudios();
            document.removeEventListener('click', handleFirstClick);
        };
        document.addEventListener('click', handleFirstClick);
        return () => document.removeEventListener('click', handleFirstClick);
    }, []);

    const bgTransform = {
        transform: `translate(${-mousePosition.x * 5}px, ${-mousePosition.y * 5}px)`
    };

    const fireplaceTransform = {
        transform: `translate(calc(-50% + ${-mousePosition.x * 5}px), calc(-50% + ${-mousePosition.y * 5}px))`
    };

    return (
        <div className="homepage-container" onClick={() => {
            if (isMusicOn) sfxRef.current?.play();
            if (isRainOn) rainRef.current?.play();
            if (isMusicOn) musicRef.current?.play();
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

            {/* Top Status Bar */}
            <div className={`homepage-top-status ${isLoaded ? 'appear' : ''}`}>
                <span className="status-text">
                    {currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true })}
                    &nbsp;&nbsp; Currently {weatherDesc.toLowerCase()} in Mumbai
                </span>
            </div>

            {/* Atmosphere Controls: Bottom Left (Scenes) */}
            <div className={`homepage-controls scene-controls ${isLoaded ? 'appear' : ''}`}>
                <div className="control-group row">
                    <button
                        className={`pixel-button ${isAutoMode ? 'active' : ''}`}
                        onClick={(e) => { e.stopPropagation(); setIsAutoMode(true); }}
                        style={{ borderRight: '2px solid rgba(246, 238, 211, 0.4)', marginRight: '5px' }}
                    >
                        AUTO
                    </button>
                    <button className={`pixel-button ${!isAutoMode && timeOfDay === 'sunrise' ? 'active' : ''}`} onClick={(e) => { e.stopPropagation(); setTimeOfDay('sunrise'); setIsAutoMode(false); }}>SUNRISE</button>
                    <button className={`pixel-button ${!isAutoMode && timeOfDay === 'day' ? 'active' : ''}`} onClick={(e) => { e.stopPropagation(); setTimeOfDay('day'); setIsAutoMode(false); }}>DAY</button>
                    <button className={`pixel-button ${!isAutoMode && timeOfDay === 'sunset' ? 'active' : ''}`} onClick={(e) => { e.stopPropagation(); setTimeOfDay('sunset'); setIsAutoMode(false); }}>SUNSET</button>
                    <button className={`pixel-button ${!isAutoMode && timeOfDay === 'night' ? 'active' : ''}`} onClick={(e) => { e.stopPropagation(); setTimeOfDay('night'); setIsAutoMode(false); }}>NIGHT</button>
                </div>
            </div>

            {/* Atmosphere Controls: Bottom Right (Effects) */}
            <div className={`homepage-controls effects-controls ${isLoaded ? 'appear' : ''}`}>
                <div className="control-group row">
                    <button className={`pixel-button ${isMusicOn ? 'active' : ''}`} onClick={(e) => { e.stopPropagation(); setIsMusicOn(!isMusicOn); }}>MUSIC: {isMusicOn ? 'ON' : 'OFF'}</button>
                    <button className={`pixel-button ${isRainOn ? 'active' : ''}`} onClick={(e) => { e.stopPropagation(); setIsRainOn(!isRainOn); setIsAutoMode(false); }}>RAIN: {isRainOn ? 'ON' : 'OFF'}</button>
                </div>
            </div>

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
            {isRainOn && <RainEffect />}

            {/* Smooth Background Transitions */}
            {Object.entries(backgrounds).map(([key, src]) => (
                <img
                    key={key}
                    className={`homepage-background ${timeOfDay === key ? 'active' : ''}`}
                    src={src}
                    alt={key}
                    style={bgTransform}
                />
            ))}
            <img
                className={`homepage-fireplace ${isLoaded ? 'appear' : ''}`}
                src={fireplace}
                alt="Fireplace"
                style={fireplaceTransform}
            />
            <div className={`homepage-content ${isLoaded ? 'appear' : ''}`}>
                SHAUNAK KARVE
                <span className="homepage-subtitle">Inspire to Create</span>
            </div>

            <div className={`homepage-enter-container ${isLoaded ? 'appear' : ''}`}>
                <button
                    className="default mc-button"
                    onClick={(e) => {
                        e.stopPropagation();
                        navigate('/about');
                    }}
                >
                    ENTER  &nbsp;WORLD
                </button>
            </div>

            {/* <Hotbar /> */}
        </div>
    );
}

