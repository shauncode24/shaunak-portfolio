import { useState, useEffect } from "react";
import "./LoadingScreen.css";
import { useProgress } from "@react-three/drei";

const LoadingScreen = ({ onFinished }) => {
    const { progress: realProgress, active } = useProgress();
    const [fakeProgress, setFakeProgress] = useState(0);
    const [isRevealed, setIsRevealed] = useState(false);
    const [isAnimationFinished, setIsAnimationFinished] = useState(false);

    // Normalize progress to ensure it completes even if Three.js loader is idle
    const progress = Math.max(realProgress, fakeProgress);

    useEffect(() => {
        // Randomized, accelerating progress simulation
        if (fakeProgress < 100) {
            // As progress increases, the potential delay decreases (acceleration)
            // Base delay range: 50ms - 500ms
            // Acceleration factor: (100 - fakeProgress) / 100 -> 1.0 down to 0.0
            const acceleration = Math.max(0.1, (100 - fakeProgress) / 100);
            const randomDelay = Math.random() * 400 * acceleration + 50;

            // Random chunk size: 1% to 15%
            const randomIncrement = Math.floor(Math.random() * 15) + 1;

            const timeout = setTimeout(() => {
                setFakeProgress(prev => Math.min(prev + randomIncrement, 100));
            }, randomDelay);

            return () => clearTimeout(timeout);
        }
    }, [fakeProgress]);

    const handleReveal = () => {
        setIsRevealed(true);
    };

    const handleAnimationFinished = () => {
        setIsAnimationFinished(true);
        if (onFinished) onFinished();
    };

    // Auto-reveal when progress hits 100%
    useEffect(() => {
        if (progress >= 100 && !isRevealed) {
            // Small delay for UX
            const timer = setTimeout(() => {
                handleReveal();
            }, 500);
            return () => clearTimeout(timer);
        }
    }, [progress, isRevealed]);

    if (isAnimationFinished) {
        return null;
    }

    return (
        <div className="loading-screen">
            <div
                className={`background-top-half ${isRevealed ? "revealed" : ""}`}
                onTransitionEnd={handleAnimationFinished}
            ></div>
            <div
                className={`background-bottom-half ${isRevealed ? "revealed" : ""}`}
            ></div>
            <div className="loading-screen-info-container">
                {progress < 100 || !isRevealed ? (
                    <div className="loading-bar-container">
                        <div
                            className={`loading-bar ${isRevealed ? "revealed" : ""}`}
                            style={{ width: `${progress}%` }}
                        ></div>
                        {!isRevealed && <div className="percentage">{Math.round(progress)}%</div>}
                    </div>
                ) : null}
            </div>
        </div>
    );
};

export default LoadingScreen;
