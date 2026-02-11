import { useState, useEffect, useRef, useMemo } from 'react';
import './Homepage.css';

// Backgrounds
import bgNight from '@/assets/landing_page/bg_night.png';
import bgDay from '@/assets/landing_page/bg_day.png';
import bgSunrise from '@/assets/landing_page/bg_sunrise.png';
import bgSunset from '@/assets/landing_page/bg_sunset_2.png';

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

const atmospherePhrases = {
    sunrise: {
        'clear': "the skies are clear and slowly brightening, the fire burns steady",
        'partly cloudy': "a few clouds drifting across the early light, keeping things steady",
        'foggy': "fog resting low over the horizon, calm at the center",
        'drizzling': "a soft drizzle falling with the first light, the mood stays unhurried",
        'raining': "steady rain greeting the morning, the fire burns steady",
        'snowing': "snow drifting quietly through pale skies, everything feels at ease",
        'showery': "light showers passing through the air, keeping things steady",
        'stormy': "distant thunder rolling across the sky, calm at the center"
    },
    day: {
        'clear': "the skies wide and clear above, everything feels at ease",
        'partly cloudy': "scattered clouds wandering overhead, the fire burns steady",
        'foggy': "a hazy fog softening the skyline, keeping things steady",
        'drizzling': "a gentle drizzle cooling the air, the mood stays unhurried",
        'raining': "steady rain falling without rush, calm at the center",
        'snowing': "snow drifting under muted light, the fire burns steady",
        'showery': "quick showers passing through, everything feels at ease",
        'stormy': "storm clouds gathering above, keeping things steady"
    },
    sunset: {
        'clear': "clear skies glowing with fading light, the fire burns steady",
        'partly cloudy': "clouds catching the last light of the day, the mood stays unhurried",
        'foggy': "mist settling as the light dims, calm at the center",
        'drizzling': "light rain shimmering in golden air, everything feels at ease",
        'raining': "rain falling through the fading glow, the fire burns steady",
        'snowing': "snow reflecting the last warmth of daylight, keeping things steady",
        'showery': "scattered showers moving through the evening air, calm at the center",
        'stormy': "dark clouds rolling in as light slips away, the fire burns steady"
    },
    night: {
        'clear': "the skies deep and clear above, the fire burns steady",
        'partly cloudy': "clouds drifting across the quiet sky, keeping things steady",
        'foggy': "fog wrapping the city in stillness, everything feels at ease",
        'drizzling': "a soft drizzle falling under dim skies, the mood stays unhurried",
        'raining': "steady rain tapping into the night, calm at the center",
        'snowing': "snow falling silently through the dark, the fire burns steady",
        'showery': "brief showers passing through the quiet air, keeping things steady",
        'stormy': "thunder echoing across the sky, the fire burns steady"
    }
};

export default function Homepage() {
    const navigate = useNavigate();
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [timeOfDay, setTimeOfDay] = useState('day'); // Initial state
    const [isAutoMode, setIsAutoMode] = useState(true); // Default to auto-sync
    const [isMusicOn, setIsMusicOn] = useState(false);
    const [isRainOn, setIsRainOn] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const [currentTime, setCurrentTime] = useState(new Date());
    const [weatherDesc, setWeatherDesc] = useState('clear'); // Default to clear to avoid undefined lookups initially

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
        // Use local system time for now as requested by user logic earlier, assuming user is synced or we want simple logic. 
        // Or if we want real Mumbai time we should adjust currentTime. 
        // The previous code used new Date().getHours() which is local system time. 
        // User prompt says "in Mumbai", implies we should show Mumbai time or assuming system is Mumbai.
        // I will stick to existing logic for timeOfDay.
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
            // Keep previous description or default
        }
    };

    // ... rest of effects ...

    // Update clock every second
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        const mountInit = () => {
            if (isAutoMode) {
                setTimeOfDay(getMumbaiTimeOfDay());
            }
            syncWeather();
        };
        mountInit();

        const interval = setInterval(() => {
            if (isAutoMode) {
                setTimeOfDay(getMumbaiTimeOfDay());
                syncWeather();
            } else {
                syncWeather();
            }
        }, 15 * 60 * 1000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (isAutoMode) {
            setTimeOfDay(getMumbaiTimeOfDay());
            syncWeather();
        }
    }, [isAutoMode]);

    // Preload images
    useEffect(() => {
        const imageSources = [bgDay, bgNight, bgSunrise, bgSunset, fireplace];
        let loadedCount = 0;
        const totalImages = imageSources.length;

        const handleImageLoad = () => {
            loadedCount++;
            if (loadedCount === totalImages) {
                // All images loaded, wait a bit then trigger animation
                setTimeout(() => setIsLoaded(true), 800);
            }
        };

        imageSources.forEach(src => {
            const img = new Image();
            img.src = src;
            img.onload = handleImageLoad;
            img.onerror = handleImageLoad; // Continue even if one fails
        });
    }, []);

    // Also set a fallback timeout in case images hang
    useEffect(() => {
        const timer = setTimeout(() => setIsLoaded(true), 3000);
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

    const selectedMusic = useMemo(() => {
        const musicTracks = [bgMusic1, bgMusic2, bgMusic3];
        return musicTracks[Math.floor(Math.random() * musicTracks.length)];
    }, []);

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

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e) => {
            const x = (e.clientX / window.innerWidth - 0.5) * 2;
            const y = (e.clientY / window.innerHeight - 0.5) * 2;
            setMousePosition({ x, y });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

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

    // Close menu when clicking outside or on a selection
    const handleMenuSelection = (action) => {
        action();
        // Keep menu open? User didn't specify, but usually selecting an option might close it or keep it for more changes. 
        // Let's keep it open for multi-select (like music toggle), but maybe close on scene change? 
        // Actually, let's just keep it open until user closes it.
    };

    return (
        <div className="homepage-container" onClick={() => {
            if (isMusicOn) sfxRef.current?.play();
            if (isRainOn) rainRef.current?.play();
            if (isMusicOn) musicRef.current?.play();
            // Do not close menu on background click if we want to separate UI logic, but standard behavior is close.
            // setIsMenuOpen(false); 
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

            {/* Top Status Bar - Split Lines */}
            <div className={`homepage-top-status ${timeOfDay} ${isLoaded ? 'appear' : ''}`}>
                <div className="status-container">
                    <div className="status-line primary">
                        <span className="status-time">{currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })}</span> in Mumbai,
                    </div>
                    <div className="status-line secondary">
                        {atmospherePhrases[timeOfDay][weatherDesc] || "checking the skies..."}
                    </div>
                </div>
            </div>

            {/* Mobile Menu Toggle */}
            <div
                className={`mobile-menu-toggle ${isMenuOpen ? 'open' : ''} ${isLoaded ? 'appear' : ''}`}
                onClick={(e) => { e.stopPropagation(); setIsMenuOpen(!isMenuOpen); }}
            >
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`mobile-menu-overlay ${isMenuOpen ? 'open' : ''}`}>
                <div className="mobile-menu-content">
                    <div className="mobile-control-group">
                        <h3>SCENE</h3>
                        <div className="mobile-buttons-row">
                            <button className={`pixel-button ${isAutoMode ? 'active' : ''}`} onClick={(e) => { e.stopPropagation(); setIsAutoMode(true); }}>AUTO</button>
                            <button className={`pixel-button ${!isAutoMode && timeOfDay === 'sunrise' ? 'active' : ''}`} onClick={(e) => { e.stopPropagation(); setTimeOfDay('sunrise'); setIsAutoMode(false); }}>SUNRISE</button>
                            <button className={`pixel-button ${!isAutoMode && timeOfDay === 'day' ? 'active' : ''}`} onClick={(e) => { e.stopPropagation(); setTimeOfDay('day'); setIsAutoMode(false); }}>DAY</button>
                            <button className={`pixel-button ${!isAutoMode && timeOfDay === 'sunset' ? 'active' : ''}`} onClick={(e) => { e.stopPropagation(); setTimeOfDay('sunset'); setIsAutoMode(false); }}>SUNSET</button>
                            <button className={`pixel-button ${!isAutoMode && timeOfDay === 'night' ? 'active' : ''}`} onClick={(e) => { e.stopPropagation(); setTimeOfDay('night'); setIsAutoMode(false); }}>NIGHT</button>
                        </div>
                    </div>
                    <div className="mobile-control-group">
                        <h3>EFFECTS</h3>
                        <div className="mobile-buttons-row">
                            <button className={`pixel-button ${isMusicOn ? 'active' : ''}`} onClick={(e) => { e.stopPropagation(); setIsMusicOn(!isMusicOn); }}>MUSIC: {isMusicOn ? 'ON' : 'OFF'}</button>
                            <button className={`pixel-button ${isRainOn ? 'active' : ''}`} onClick={(e) => { e.stopPropagation(); setIsRainOn(!isRainOn); setIsAutoMode(false); }}>RAIN: {isRainOn ? 'ON' : 'OFF'}</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Desktop Atmosphere Controls: Bottom Left (Scenes) */}
            <div className={`homepage-controls scene-controls desktop-only ${isLoaded ? 'appear' : ''}`}>
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

            {/* Desktop Atmosphere Controls: Bottom Right (Effects) */}
            <div className={`homepage-controls effects-controls desktop-only ${isLoaded ? 'appear' : ''}`}>
                <div className="control-group row">
                    <button className={`pixel-button ${isMusicOn ? 'active' : ''}`} onClick={(e) => { e.stopPropagation(); setIsMusicOn(!isMusicOn); }}>MUSIC: {isMusicOn ? 'ON' : 'OFF'}</button>
                    <button className={`pixel-button ${isRainOn ? 'active' : ''}`} onClick={(e) => { e.stopPropagation(); setIsRainOn(!isRainOn); setIsAutoMode(false); }}>RAIN: {isRainOn ? 'ON' : 'OFF'}</button>
                </div>
            </div>

            {/* Fireflies */}
            <div className={`fireflies-container ${isLoaded ? 'appear' : ''}`}>
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
            <FireplaceEffects className={`homepage-smoke ${isLoaded ? 'appear' : ''}`} />

            {/* Realistic Three.js Rain */}
            <div className={`rain-container ${isLoaded ? 'appear' : ''}`} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 15 }}>
                {isRainOn && <RainEffect />}
            </div>

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
            <div className={`homepage-content ${timeOfDay} ${isLoaded ? 'appear' : ''}`}>
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

