import { useState, useEffect, useRef } from 'react';
import './PageTransition.css';

/**
 * PageTransition Component
 * Handles the cinematic transition between Homepage and AboutMe
 * 
 * Stages:
 * 1. Fire Engulf (0-0.5s): Fire fills screen with orange flash
 * 2. Door Opening (0.5-1s): Door appears and opens inward
 * 3. Step Inside (1-1.5s): Camera moves through, door closes
 * 4. Room Reveals (1.5-2.5s): Lights flicker on, room fades in
 */
export default function PageTransition({ isTransitioning, onTransitionComplete }) {
    const [stage, setStage] = useState(0); // 0: inactive, 1-4: transition stages
    const doorSoundRef = useRef(null);
    const stepSoundRef = useRef(null);

    useEffect(() => {
        if (!isTransitioning) {
            setStage(0);
            return;
        }

        // Stage 1: Fire Engulf (0-500ms)
        setStage(1);

        const stage2Timer = setTimeout(() => {
            // Stage 2: Door Opening (500-1000ms)
            setStage(2);
            doorSoundRef.current?.play();
        }, 500);

        const stage3Timer = setTimeout(() => {
            // Stage 3: Step Inside (1000-1500ms)
            setStage(3);
            stepSoundRef.current?.play();
        }, 1000);

        const stage4Timer = setTimeout(() => {
            // Stage 4: Room Reveals (1500-2500ms)
            setStage(4);
        }, 1500);

        const completeTimer = setTimeout(() => {
            // Transition complete
            onTransitionComplete?.();
        }, 2500);

        return () => {
            clearTimeout(stage2Timer);
            clearTimeout(stage3Timer);
            clearTimeout(stage4Timer);
            clearTimeout(completeTimer);
        };
    }, [isTransitioning, onTransitionComplete]);

    if (!isTransitioning && stage === 0) return null;

    return (
        <div className={`page-transition stage-${stage}`}>
            {/* Audio Effects */}
            <audio ref={doorSoundRef} preload="auto">
                <source src="/audio/door_open.mp3" type="audio/mpeg" />
            </audio>
            <audio ref={stepSoundRef} preload="auto">
                <source src="/audio/footsteps.mp3" type="audio/mpeg" />
            </audio>

            {/* Stage 1: Fire Engulf */}
            <div className="transition-fire">
                <div className="fire-particle" style={{ '--delay': '0s', '--duration': '0.5s' }} />
                <div className="fire-particle" style={{ '--delay': '0.1s', '--duration': '0.6s' }} />
                <div className="fire-particle" style={{ '--delay': '0.2s', '--duration': '0.4s' }} />
                <div className="fire-particle" style={{ '--delay': '0.05s', '--duration': '0.55s' }} />
                <div className="fire-particle" style={{ '--delay': '0.15s', '--duration': '0.45s' }} />
            </div>

            {/* Stage 2 & 3: Door */}
            <div className="transition-door-wrapper">
                <div className="transition-door-frame">
                    <div className="transition-door-left" />
                    <div className="transition-door-right" />
                    <div className="door-light" />
                </div>
            </div>

            {/* Stage 3: Camera Movement Overlay */}
            <div className="transition-camera-move" />

            {/* Stage 4: Room Reveal */}
            <div className="transition-room-reveal">
                <div className="lantern-flicker" />
            </div>
        </div>
    );
}