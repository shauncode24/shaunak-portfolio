import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import './Homepage.css';

// Hooks
import { useAtmosphere } from '@/hooks/useAtmosphere';
import { useAudioController } from '@/hooks/useAudioController';
import { useParallax } from '@/hooks/useParallax';
import { useAssetLoader } from '@/hooks/useAssetLoader';

// Assets
import bgNight from '@/assets/landing_page/bg_night.png';
import bgDay from '@/assets/landing_page/bg_day.png';
import bgSunrise from '@/assets/landing_page/bg_sunrise.png';
import bgSunset from '@/assets/landing_page/bg_sunset_3.png';
import fireplace from '@/assets/landing_page/fireplace_2.gif';
import fireplaceExtinguish from '@/assets/landing_page/fireplace_extinguish.gif';
import FireplaceEffects from '@/components/SmokeEffect';
import RainEffect from '@/components/RainEffect';

// Utils
import { generateFireflies } from '@/utils/helpers';

export default function Homepage() {
    const navigate = useNavigate();

    // Custom Hooks
    const {
        timeOfDay, setTimeOfDay,
        isAutoMode, setIsAutoMode,
        isRainOn, setIsRainOn,
        currentTime, weatherDesc,
        atmospherePhrases
    } = useAtmosphere();

    const {
        isMusicOn, setIsMusicOn,
        sfxRef, rainRef, musicRef,
        selectedMusic, fireCrackling, rainSFX, playAll
    } = useAudioController(isRainOn);

    const { mousePosition, bgTransform, fireplaceTransform } = useParallax();

    const imageSources = useMemo(() => [bgDay, bgNight, bgSunrise, bgSunset, fireplace, fireplaceExtinguish], []);
    const isLoaded = useAssetLoader(imageSources);

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const fireflies = useMemo(() => generateFireflies(), []);

    const backgrounds = {
        day: bgDay,
        night: bgNight,
        sunrise: bgSunrise,
        sunset: bgSunset
    };

    return (
        <div className="homepage-container" onClick={() => playAll()}>
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
            <div className={`homepage-top-status ${timeOfDay} ${isLoaded ? 'appear' : ''}`}>
                <div className="status-container">
                    <div className="status-line primary">
                        <span className="status-time">
                            {currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })}
                        </span> in Mumbai,
                    </div>
                    <div className="status-line secondary">
                        {atmospherePhrases[timeOfDay]?.[weatherDesc] || "checking the skies..."}
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

            {/* Desktop Atmosphere Controls */}
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

            {/* Background Effects */}
            <FireplaceEffects className={`homepage-smoke ${isLoaded && !isRainOn ? 'appear' : ''}`} />

            <div className={`rain-container ${isLoaded ? 'appear' : ''}`} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 15 }}>
                {isRainOn && <RainEffect />}
            </div>

            {/* Background Images */}
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
                className={`homepage-fireplace ${!isRainOn && isLoaded ? 'appear' : ''}`}
                src={fireplace}
                alt="Fireplace"
                style={fireplaceTransform}
            />
            <img
                className={`homepage-fireplace extinguished ${isRainOn && isLoaded ? 'appear' : ''}`}
                src={fireplaceExtinguish}
                alt="Extinguished Fireplace"
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
        </div>
    );
}
