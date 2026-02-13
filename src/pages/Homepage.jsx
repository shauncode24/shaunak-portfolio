import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import './Homepage.css';
import Projects from './Projects';
import aboutBg from '@/assets/about_me/about_me_bg_10.png';
import AboutMeInfo from './AboutMeInfo';
import Skills from './Skills';
import chest from '@/assets/about_me/chest.png';
import craftingTable from '@/assets/about_me/crafting_table.png';
import lecturn from '@/assets/about_me/lecturn_1.png';
import dogGif from '@/assets/about_me/dog_1.gif';
import dogStill from '@/assets/about_me/dog_2.gif';
import fireplace from '@/assets/about_me/campfire.gif';
import FireplaceEffects from '../components/SmokeEffect';
import RoomAtmosphere from '../components/RoomAtmosphere';
import resumePdf from '@/assets/resume.pdf';
import sign from '@/assets/about_me/item_frame.png';

import { projectsData } from '../data/projectsData';
import { useAboutMeAudio } from '../hooks/useAboutMeAudio';
import { useDogAnimation } from '../hooks/useDogAnimation';
import { useProjectNavigation } from '../hooks/useProjectNavigation';
import { useAboutMeInteractions } from '../hooks/useAboutMeInteractions';

import fireCrackling from '@/assets/audio/fire_cackling.mp3';
import dogBark from '@/assets/audio/dog_bark.mp3';
import chestOpenSound from '@/assets/audio/chest_open.ogg';
import chestCloseSound from '@/assets/audio/chest_close.ogg';

export default function Homepage() {
    const [isLoaded, setIsLoaded] = useState(false);

    const {
        isMusicOn,
        toggleMusic,
        selectedMusic,
        refs,
        actions
    } = useAboutMeAudio();

    const {
        isDogMoving,
        isDogHovered,
        setIsDogHovered
    } = useDogAnimation();

    const {
        currentProjectIndex,
        handleNextProject,
        handlePrevProject
    } = useProjectNavigation(projectsData.length);

    const {
        activeComponent,
        setActiveComponent
    } = useAboutMeInteractions(actions.playChestClose);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoaded(true), 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="homepage-container">
            <audio ref={refs.sfxRef} loop autoPlay={false} preload="auto">
                <source src={fireCrackling} type="audio/mpeg" />
            </audio>
            <audio ref={refs.musicRef} loop autoPlay={false} preload="auto">
                <source src={selectedMusic} type="audio/mpeg" />
            </audio>

            <div className={`homepage-controls ${isLoaded ? 'appear' : ''}`}>
                <button
                    className={`pixel-button ${isMusicOn ? 'active' : ''}`}
                    onClick={toggleMusic}
                >
                    MUSIC: {isMusicOn ? 'ON' : 'OFF'}
                </button>
            </div>

            <a
                href={resumePdf}
                download="Shaun_Resume.pdf"
                className={`homepage-resume-wrapper ${isLoaded ? 'appear' : ''}`}
            >
                <img src={sign} alt="Resume Sign" className="homepage-sign-img" />
                <span className="homepage-resume-text">RESUME</span>
            </a>

            <img
                className={`homepage-background ${isLoaded ? 'appear' : ''}`}
                src={aboutBg}
                alt="Homepage Background"
            />

            <RoomAtmosphere />

            <div className={`homepage-items-container ${isLoaded ? 'appear' : ''}`}>
                <div
                    className="homepage-interactive-wrapper chest-wrapper"
                    onClick={() => {
                        actions.playChestOpen();
                        setActiveComponent('about');
                    }}
                >
                    <img
                        className="homepage-overlay homepage-chest"
                        src={chest}
                        alt="Chest"
                    />
                    <div className="homepage-label homepage-label-chest">
                        About Me
                    </div>
                </div>

                <div
                    className="homepage-interactive-wrapper lecturn-wrapper"
                    onClick={() => setActiveComponent('projects')}
                >
                    <img
                        className="homepage-overlay homepage-lecturn"
                        src={lecturn}
                        alt="Lecturn"
                    />
                    <div className="homepage-label homepage-label-lecturn">
                        Projects
                    </div>
                </div>

                <div
                    className="homepage-interactive-wrapper crafting-wrapper"
                    onClick={() => setActiveComponent('skills')}
                >
                    <img
                        className="homepage-overlay homepage-crafting-table"
                        src={craftingTable}
                        alt="Crafting Table"
                    />
                    <div className="homepage-label homepage-label-crafting">
                        Skills
                    </div>
                </div>
            </div>

            <audio ref={refs.dogBarkRef} preload="auto">
                <source src={dogBark} type="audio/mpeg" />
            </audio>
            <audio ref={refs.chestOpenRef} preload="auto">
                <source src={chestOpenSound} type="audio/ogg" />
            </audio>
            <audio ref={refs.chestCloseRef} preload="auto">
                <source src={chestCloseSound} type="audio/ogg" />
            </audio>

            <img
                className={`homepage-dog ${isLoaded ? 'appear' : ''}`}
                src={(isDogMoving || isDogHovered) ? dogGif : dogStill}
                alt="Dog"
                onMouseEnter={() => setIsDogHovered(true)}
                onMouseLeave={() => setIsDogHovered(false)}
                onClick={actions.playDogBark}
            />

            <img
                className={`homepage-fireplace ${isLoaded ? 'appear' : ''}`}
                src={fireplace}
                alt="Fireplace"
            />

            <div className={`homepage-fire-effects ${isLoaded ? 'appear' : ''}`}>
                <FireplaceEffects
                    className="homepage-fireplace-canvas"
                    style={{ opacity: 0.8 }}
                />
            </div>

            <AnimatePresence mode="wait">
                {activeComponent === 'about' && (
                    <motion.div
                        key="about"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 50 }}
                    >
                        <AboutMeInfo onClose={() => {
                            actions.playChestClose();
                            setActiveComponent(null);
                        }} />
                    </motion.div>
                )}
                {activeComponent === 'skills' && (
                    <motion.div
                        key="skills"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 50 }}
                    >
                        <Skills onClose={() => setActiveComponent(null)} />
                    </motion.div>
                )}
                {activeComponent === 'projects' && (
                    <motion.div
                        key="projects"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 50 }}
                    >
                        <Projects
                            project={projectsData[currentProjectIndex]}
                            onNextProject={handleNextProject}
                            onPrevProject={handlePrevProject}
                            currentPage={currentProjectIndex + 1}
                            totalPages={projectsData.length}
                            onClose={() => setActiveComponent(null)}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
