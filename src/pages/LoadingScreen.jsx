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
        // Simulate progress to ensure we don't get stuck at 0% if no assets triggered the loader
        if (fakeProgress < 100) {
            const timeout = setTimeout(() => {
                setFakeProgress(prev => Math.min(prev + 10, 100)); // Increment significantly to reach 100% in ~500-1000ms steps or faster
            }, 200);
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
