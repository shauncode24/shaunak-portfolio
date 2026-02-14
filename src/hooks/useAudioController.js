import { useState, useEffect, useRef, useMemo } from 'react';
import fireCrackling from '@/assets/audio/fire_cackling.mp3';
import rainSFX from '@/assets/audio/rain.mp3';
import bgMusic1 from '@/assets/audio/bg_music_1.mp3';
import bgMusic2 from '@/assets/audio/bg_music_2.mp3';
import bgMusic3 from '@/assets/audio/bg_music_3.mp3';

export const useAudioController = (isRainOn) => {
    const [isMusicOn, setIsMusicOn] = useState(false);
    const sfxRef = useRef(null);
    const rainRef = useRef(null);
    const musicRef = useRef(null);

    const selectedMusic = useMemo(() => {
        const musicTracks = [bgMusic1, bgMusic2, bgMusic3];
        return musicTracks[Math.floor(Math.random() * musicTracks.length)];
    }, []);

    useEffect(() => {
        if (sfxRef.current) {
            sfxRef.current.volume = isMusicOn ? 0.6 : 0;
            if (isMusicOn) {
                sfxRef.current.play().catch(() => { });
            } else {
                sfxRef.current.pause();
            }
        }
        if (musicRef.current) {
            musicRef.current.volume = isMusicOn ? 0.4 : 0;
            if (isMusicOn) {
                musicRef.current.play().catch(() => {
                    console.log('Music play deferred until interaction');
                });
            } else {
                musicRef.current.pause();
            }
        }
        if (rainRef.current) {
            const shouldPlayRain = isRainOn && isMusicOn;
            rainRef.current.volume = shouldPlayRain ? 0.5 : 0;
            if (shouldPlayRain) {
                rainRef.current.play().catch(() => {
                    console.log('Rain play deferred until interaction');
                });
            } else {
                rainRef.current.pause();
            }
        }
    }, [isMusicOn, isRainOn]);

    const playAll = () => {
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

    useEffect(() => {
        playAll();
    }, [isMusicOn, isRainOn]); // React to state changes

    useEffect(() => {
        const handleFirstClick = () => {
            playAll();
            document.removeEventListener('click', handleFirstClick);
        };
        document.addEventListener('click', handleFirstClick);
        return () => document.removeEventListener('click', handleFirstClick);
    }, [isMusicOn, isRainOn]);

    return {
        isMusicOn,
        setIsMusicOn,
        sfxRef,
        rainRef,
        musicRef,
        selectedMusic,
        fireCrackling,
        rainSFX,
        playAll
    };
};
