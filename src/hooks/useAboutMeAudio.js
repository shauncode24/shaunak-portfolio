import { useState, useRef, useEffect, useMemo } from 'react';
import bgMusic1 from '@/assets/audio/bg_music_1.mp3';
import bgMusic2 from '@/assets/audio/bg_music_2.mp3';
import bgMusic3 from '@/assets/audio/bg_music_3.mp3';

export const useAboutMeAudio = () => {
    const [isMusicOn, setIsMusicOn] = useState(false);
    
    // Refs for audio elements
    const sfxRef = useRef(null);
    const musicRef = useRef(null);
    const dogBarkRef = useRef(null);
    const chestOpenRef = useRef(null);
    const chestCloseRef = useRef(null);

    // Randomly select music track
    const selectedMusic = useMemo(() => {
        const musicTracks = [bgMusic1, bgMusic2, bgMusic3];
        return musicTracks[Math.floor(Math.random() * musicTracks.length)];
    }, []);

    // Manage audio states
    useEffect(() => {
        if (sfxRef.current) {
            sfxRef.current.volume = isMusicOn ? 0.6 : 0;
            if (isMusicOn) {
                sfxRef.current.play().catch(() => {});
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
    }, [isMusicOn]);

    const toggleMusic = () => setIsMusicOn(prev => !prev);

    const playDogBark = () => {
        if (dogBarkRef.current) {
            dogBarkRef.current.volume = 0.2;
            dogBarkRef.current.currentTime = 0;
            dogBarkRef.current.play().catch(e => console.error("Error playing audio:", e));
        }
    };

    const playChestOpen = () => {
        if (chestOpenRef.current) {
            chestOpenRef.current.volume = 0.2;
            chestOpenRef.current.currentTime = 0;
            chestOpenRef.current.play().catch(e => console.error("Error playing open sound:", e));
        }
    };

    const playChestClose = () => {
        if (chestCloseRef.current) {
            chestCloseRef.current.volume = 0.2;
            chestCloseRef.current.currentTime = 0;
            chestCloseRef.current.play().catch(e => console.error("Error playing close sound:", e));
        }
    };

    return {
        isMusicOn,
        toggleMusic,
        selectedMusic,
        refs: {
            sfxRef,
            musicRef,
            dogBarkRef,
            chestOpenRef,
            chestCloseRef
        },
        actions: {
            playDogBark,
            playChestOpen,
            playChestClose
        }
    };
};
