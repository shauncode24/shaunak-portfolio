import { useState, useEffect } from 'react';
import './AboutMeInfo.css';
import aboutBg from '@/assets/about_me_bg_2.png';
import characterGif from '@/assets/character_2.gif';
import characterStill from '@/assets/character_2.png';
import RotatingText from '@/components/RotatingText';
import { motion } from 'motion/react';

export default function AboutMeInfo({ onClose }) {
    const [isGifPlaying, setIsGifPlaying] = useState(true);
    const [gifKey, setGifKey] = useState(0);

    useEffect(() => {
        let timer;
        if (isGifPlaying) {
            // Adjust this duration to match the length of your GIF
            timer = setTimeout(() => {
                setIsGifPlaying(false);
            }, 2000);
        }
        return () => clearTimeout(timer);
    }, [isGifPlaying, gifKey]);

    const handleCharacterClick = () => {
        setGifKey(prev => prev + 1);
        setIsGifPlaying(true);
    };

    return (
        <div className="aboutmeinfo-container" onClick={onClose}>
            <motion.div
                className="aboutme-content-wrapper"
                onClick={(e) => e.stopPropagation()}
                initial={{ scale: 0.95, opacity: 0, filter: 'blur(10px)' }}
                animate={{ scale: 1, opacity: 1, filter: 'blur(0px)' }}
                exit={{ scale: 0.95, opacity: 0, filter: 'blur(10px)' }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
            >
                <div className="aboutme-glass-panel">
                    <div className="aboutme-left">
                        <div className="minecraft-nametag">Shaunak Karve</div>
                        <img
                            key={isGifPlaying ? `gif-${gifKey}` : 'still'}
                            className="aboutme-character"
                            src={isGifPlaying ? characterGif : characterStill}
                            alt="Character"
                            onClick={handleCharacterClick}
                            style={{ cursor: 'pointer' }}
                        />
                    </div>
                    <div className="aboutme-right">
                        <div className="aboutme-heading">Hey There!</div>
                        <div className="aboutme-body">
                            <p>
                                I'm a Full Stack Developer who transforms ideas into seamless digital experiences.
                            </p>
                            <p>
                                I specialize in building web applications where clean code meets thoughtful design. From responsive frontends to scalable backends, I create solutions that don't just work—they feel right.
                            </p>
                            <p>
                                Currently based in Mumbai and open to remote opportunities worldwide. I work across the modern web stack—React, Node.js, TypeScript—and whatever tools best serve the project.
                            </p>
                        </div>
                        <div className='about-content-body-rotating-text'>
                            When I'm not coding, you'll find me&nbsp;
                            <RotatingText
                                texts={['sketching', 'writing stories', 'playing Minecraft', 'listening to music', 'reading history', 'watching films']}
                                mainClassName="rotating-text-gradient"
                                staggerFrom={"last"}
                                initial={{ y: "100%" }}
                                animate={{ y: 0 }}
                                exit={{ y: "-120%" }}
                                staggerDuration={0.025}
                                splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                                rotationInterval={3000}
                            />
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
