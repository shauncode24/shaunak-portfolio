import { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import './Experience.css';
import expBg from '@/assets/experience/exp_bg.png';
import iconNew from '@/assets/experience/icon_new_exp.png';
import iconStart from '@/assets/experience/icon_start_exp.png';

export default function Experience({ onClose }) {
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [onClose]);

    return (
        <div className="experience-container" onClick={onClose}>
            <motion.div
                className="experience-content-wrapper"
                onClick={(e) => e.stopPropagation()}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
                <div
                    className="experience-panel"
                    style={{ backgroundImage: `url(${expBg})` }}
                >
                    {/* Dark overlay for readability if needed, or rely on bg */}
                    <div className="experience-content-container">
                        <div className="experience-node experience-node-start" onClick={() => console.log('Current Experience')}>
                            <img src={iconStart} alt="Start" className="exp-icon" />
                            <span className="exp-label">Start</span>
                        </div>

                        <div className="experience-connector-line"></div>

                        <div className="experience-node experience-node-new" onClick={() => console.log('New Experience')}>
                            <img src={iconNew} alt="New" className="exp-icon" />
                            <span className="exp-label">HOC</span>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
