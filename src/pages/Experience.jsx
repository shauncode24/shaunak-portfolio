import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FiX } from 'react-icons/fi';
import './Experience.css';
import expBg from '@/assets/experience/exp_bg.png';
import iconNew from '@/assets/experience/icon_new_exp.png';
import iconStart from '@/assets/experience/icon_start_exp.png';
import ExperienceDetail from '../components/ExperienceDetail';
import { experienceData } from '../data/experienceData';

export default function Experience({ onClose }) {
    const [selectedExperience, setSelectedExperience] = useState(null);

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                if (selectedExperience) {
                    setSelectedExperience(null);
                } else {
                    onClose();
                }
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [onClose, selectedExperience]);

    const handleExperienceClick = (id) => {
        const data = experienceData.find(exp => exp.id === id);
        if (data) {
            setSelectedExperience(data);
        }
    };

    return (
        <div className="experience-container" onClick={onClose}>
            <AnimatePresence mode="wait">
                {!selectedExperience ? (
                    <motion.div
                        key="map"
                        className="experience-content-wrapper"
                        onClick={(e) => e.stopPropagation()}
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                        <button className="experience-mobile-close" onClick={onClose} aria-label="Close">
                            <FiX size={18} />
                        </button>
                        <div
                            className="experience-panel"
                            style={{ backgroundImage: `url(${expBg})` }}
                        >
                            {/* Dark overlay for readability if needed, or rely on bg */}
                            <div className="experience-content-container">
                                <div className="experience-node experience-node-start">
                                    <img src={iconStart} alt="Start" className="exp-icon" />
                                    <span className="exp-label">Start</span>
                                </div>

                                <div className="experience-connector-line"></div>

                                <div
                                    className="experience-node experience-node-new"
                                    onClick={() => handleExperienceClick('hoc')}
                                >
                                    <div className="exp-icon-container">
                                        <img src={iconNew} alt="New" className="exp-icon" />
                                        <img
                                            src="https://media.licdn.com/dms/image/v2/D4D0BAQH9Tb4ebdY6YQ/company-logo_100_100/company-logo_100_100/0/1736855833945/hoc_logo?e=1772668800&v=beta&t=Jq8FN2PBuy6RDPF89HhhKy3wfGsVd1LEbE9pbX6QIp0"
                                            alt="HOC Logo"
                                            className="exp-logo-overlay"
                                            style={{ width: '90%', height: '90%', top: '5%', left: '5%' }}
                                        />
                                    </div>
                                    <span className="exp-label">HOC</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ) : (
                    <ExperienceDetail
                        key="detail"
                        experience={selectedExperience}
                        onClose={() => setSelectedExperience(null)}
                    />
                )}
            </AnimatePresence>
        </div>
    );
}
