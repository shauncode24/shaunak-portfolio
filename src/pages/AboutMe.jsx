import { useState, useEffect } from 'react';
import './AboutMe.css';
import aboutBg from '@/assets/about_me_bg_2.png';
import characterGif from '@/assets/character_2.gif';
import characterStill from '@/assets/character_2.png';
import RotatingText from '@/components/RotatingText';
import ContactCard from '@/components/ContactCard';
import { motion } from 'motion/react';

export default function AboutMe({ onClose }) {
    const [isGifPlaying, setIsGifPlaying] = useState(false);
    const [gifKey, setGifKey] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsGifPlaying(true);
        }, 800);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        let timer;
        if (isGifPlaying) {
            timer = setTimeout(() => {
                setIsGifPlaying(false);
            }, 1880);
        }
        return () => clearTimeout(timer);
    }, [isGifPlaying, gifKey]);

    const handleCharacterClick = () => {
        setGifKey(prev => prev + 1);
        setIsGifPlaying(true);
    };

    const text = "Hey There!";

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
                        <motion.div
                            className="minecraft-nametag"
                            initial={{ opacity: 0, y: -10, x: "-50%" }}
                            animate={{ opacity: 1, y: 0, x: "-50%" }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                        >
                            Shaunak Karve
                        </motion.div>

                        <motion.div
                            className="character-container"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.8, duration: 0.5 }}
                            onClick={handleCharacterClick}
                            style={{ position: 'relative', cursor: 'pointer', display: 'flex', justifyContent: 'center' }}
                        >
                            <img
                                className="aboutme-character"
                                src={characterStill}
                                alt="Character Static"
                                style={{
                                    opacity: isGifPlaying ? 0 : 1,
                                    transition: 'opacity 0.2s ease-in-out'
                                }}
                            />

                            {isGifPlaying && (
                                <img
                                    key={gifKey}
                                    className="aboutme-character"
                                    src={characterGif}
                                    alt="Character Animation"
                                    style={{
                                        position: 'absolute',
                                        top: 0,
                                        left: '50%',
                                        transform: 'translateX(-50%)',
                                        zIndex: 2
                                    }}
                                />
                            )}
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 3.0, duration: 0.5 }}
                            style={{ marginTop: '1.5rem', width: '100%' }}
                        >
                            <ContactCard />
                        </motion.div>
                    </div>
                    <div className="aboutme-right">
                        <div className="aboutme-heading">
                            {text.split("").map((letter, index) => (
                                <motion.span
                                    key={index}
                                    initial={{ opacity: 0, filter: 'blur(10px)' }}
                                    animate={{ opacity: 1, filter: 'blur(0px)' }}
                                    transition={{
                                        duration: 0.3,
                                        delay: index * 0.05,
                                    }}
                                >
                                    {letter}
                                </motion.span>
                            ))}
                        </div>
                        <div className="aboutme-body">
                            <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1.0, duration: 0.5 }}
                            >
                                I’m a full-stack developer who enjoys turning rough ideas into things people actually enjoy using.                            </motion.p>
                            <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1.5, duration: 0.5 }}
                            >
                                For me, it's about the little things — animations that land just right, code that doesn't make future-me cry, and interfaces that just make sense. I'm all about making things that work well and feel even better.                          </motion.p>
                            <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 2.0, duration: 0.5 }}
                            >
                                <span style={{ color: '#60A5FA', fontWeight: 'bold' }}>Mumbai</span>-based, full-stack focused, perpetually experimenting. I jump between frontend polish and backend logic depending on what needs fixing. </motion.p>
                        </div>
                        <motion.div
                            className='about-content-body-rotating-text'
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 2.5, duration: 0.8 }}
                        >
                            Away from the keyboard, I’m usually&nbsp;
                            <RotatingText
                                texts={['sketching', 'writing stories', 'playing Minecraft', 'listening to music', 'reading history', 'watching movies', 'enjoying some cricket']}
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
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
