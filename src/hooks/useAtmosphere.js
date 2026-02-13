import { useState, useEffect } from 'react';

const atmospherePhrases = {
    sunrise: {
        'clear': "the horizon glows soft and unbroken, dawn arrives without haste",
        'partly cloudy': "clouds drift lazily through the waking light, gentle and slow",
        'foggy': "mist clings to the valley as morning stretches awake",
        'drizzling': "droplets catch the first rays, the world whispers softly",
        'raining': "rain greets the new day with quiet rhythm, steady as breath",
        'snowing': "snowflakes tumble through the pale dawn, hushed and serene",
        'showery': "scattered showers pass overhead, brief and unbothered",
        'stormy': "thunder rolls in the distance, the fire remains unwavering"
    },
    day: {
        'clear': "sunlight spills across open skies, warm and endless",
        'partly cloudy': "clouds wander freely above, painting shadows below",
        'foggy': "soft fog lingers, blurring the edges of the world",
        'drizzling': "a gentle mist hangs in the air, cool and refreshing",
        'raining': "rain falls in steady measure, neither hurried nor harsh",
        'snowing': "snow drifts down through muted daylight, quiet and constant",
        'showery': "quick bursts of rain come and go, playful and light",
        'stormy': "storm clouds loom heavy, but the fire holds its ground"
    },
    sunset: {
        'clear': "the sky ignites with color, day slips into evening",
        'partly cloudy': "clouds blaze gold and crimson, catching the dying light",
        'foggy': "twilight mist rises slowly, softening the fading glow",
        'drizzling': "rain shimmers like amber in the low sun, delicate and brief",
        'raining': "rainfall glows warm beneath the horizon, unhurried and calm",
        'snowing': "snow catches the last golden rays, quiet and beautiful",
        'showery': "showers drift through the amber air, fleeting and soft",
        'stormy': "darkness gathers as the sun retreats, but warmth endures"
    },
    night: {
        'clear': "stars pierce the velvet dark, ancient and unwavering",
        'partly cloudy': "clouds drift across the moon, silent and unbothered",
        'foggy': "night fog wraps the land in stillness, thick and dreamlike",
        'drizzling': "soft rain taps against the earth, rhythmic and soothing",
        'raining': "rain falls steadily into the void, patient and endless",
        'snowing': "snow descends through darkness, muffling all sound",
        'showery': "brief showers pass beneath the stars, transient and cool",
        'stormy': "lightning splits the sky, yet the flames burn on"
    }
};

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

const getMumbaiTimeOfDay = () => {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 8) return 'sunrise';
    if (hour >= 8 && hour < 17) return 'day';
    if (hour >= 17 && hour < 20) return 'sunset';
    return 'night';
};

export const useAtmosphere = () => {
    const [timeOfDay, setTimeOfDay] = useState('day');
    const [isAutoMode, setIsAutoMode] = useState(true);
    const [isRainOn, setIsRainOn] = useState(false);
    const [currentTime, setCurrentTime] = useState(new Date());
    const [weatherDesc, setWeatherDesc] = useState('clear');

    const syncWeather = async () => {
        try {
            const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=19.17&longitude=72.94&current=rain,weather_code,showers&forecast_days=1');
            if (!response.ok) throw new Error('Network response was not ok');

            const data = await response.json();
            const code = data.current.weather_code;
            const description = getWeatherDescription(code);
            
            setWeatherDesc(description);

            const rainCodes = [51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 80, 81, 82, 95, 96, 99];
            if (isAutoMode) {
                setIsRainOn(rainCodes.includes(code));
            }
        } catch (error) {
            console.error('Failed to fetch weather data:', error);
        }
    };

    useEffect(() => {
        const timer = setInterval(() => setCurrentTime(new Date()), 1000);
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

    return {
        timeOfDay,
        setTimeOfDay,
        isAutoMode,
        setIsAutoMode,
        isRainOn,
        setIsRainOn,
        currentTime,
        weatherDesc,
        atmospherePhrases
    };
};
