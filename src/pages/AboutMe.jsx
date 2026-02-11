import { useState, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import './AboutMe.css';
import Projects from './Projects';
import aboutBg from '@/assets/about_me/about_me_bg_10.png';
import AboutMeInfo from './AboutMeInfo';
import Skills from './Skills';
import chest from '@/assets/about_me/chest.png';
import craftingTable from '@/assets/about_me/crafting_table.png';
import lecturn from '@/assets/about_me/lecturn_1.png';
import dogGif from '@/assets/about_me/dog.gif';
import dogStill from '@/assets/about_me/dog_still.png';
import fireplace from '@/assets/about_me/campfire.gif';
import FireplaceEffects from '../components/SmokeEffect';
import bgMusic1 from '@/assets/audio/bg_music_1.mp3';
import bgMusic2 from '@/assets/audio/bg_music_2.mp3';
import bgMusic3 from '@/assets/audio/bg_music_3.mp3';
import fireCrackling from '@/assets/audio/fire_cackling.mp3';
import dogBark from '@/assets/audio/dog_bark.mp3';
import chestOpenSound from '@/assets/audio/chest_open.ogg';
import chestCloseSound from '@/assets/audio/chest_close.ogg';
import RoomAtmosphere from '../components/RoomAtmosphere';
import resumePdf from '@/assets/resume.pdf';
import sign from '@/assets/about_me/about_me_sign.png';

const projectsData = [
    {
        title: "Portfolio Website",
        technologies: ["React", "CSS", "Vite", "JavaScript"],
        description: "A Minecraft-themed portfolio website showcasing projects with interactive elements, smooth animations, and a unique gaming aesthetic. Built with modern web technologies for optimal performance and user experience.",
        preview: "Project Preview"
    },
    {
        title: "E-Commerce Platform",
        technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
        description: "Full-stack e-commerce solution with payment integration, inventory management, and real-time order tracking. Features include user authentication, shopping cart, and admin dashboard.",
        preview: "Project Preview"
    },
    {
        title: "Task Management App",
        technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
        description: "Collaborative task management application with real-time updates, team collaboration features, and intuitive drag-and-drop interface. Supports multiple projects and team members.",
        preview: "Project Preview"
    },
    {
        title: "Weather Dashboard",
        technologies: ["React", "OpenWeather API", "Chart.js", "CSS"],
        description: "Interactive weather dashboard displaying current conditions, forecasts, and historical data with beautiful visualizations. Features location search and favorite locations.",
        preview: "https://s3-alpha.figma.com/hub/file/6422877612/800966cc-495a-4d7f-8afe-e5f2a3e89456-cover.png"
    },
    {
        title: "Social Media Analytics",
        technologies: ["Python", "Flask", "React", "D3.js"],
        description: "Analytics platform for social media metrics with data visualization, trend analysis, and automated reporting. Integrates with multiple social platforms for comprehensive insights.",
        preview: "Project Preview"
    }
];

export default function AboutMe() {
    const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
    const [activeComponent, setActiveComponent] = useState(null); // null, 'about', 'skills', 'projects'
    const [isDogMoving, setIsDogMoving] = useState(false);
    const [isDogHovered, setIsDogHovered] = useState(false);
    const [isMusicOn, setIsMusicOn] = useState(false);

    const sfxRef = useRef(null);
    const musicRef = useRef(null);
    const dogBarkRef = useRef(null);
    const chestOpenRef = useRef(null);
    const chestCloseRef = useRef(null);

    // Randomly select one of the background music tracks on mount
    const selectedMusic = useMemo(() => {
        const musicTracks = [bgMusic1, bgMusic2, bgMusic3];
        return musicTracks[Math.floor(Math.random() * musicTracks.length)];
    }, []);

    // Audio volume and playback management based on state
    useEffect(() => {
        if (sfxRef.current) {
            sfxRef.current.volume = isMusicOn ? 0.6 : 0;
            if (isMusicOn) {
                sfxRef.current.play().catch(() => { });
            }
        }
        if (musicRef.current) {
            musicRef.current.volume = isMusicOn ? 0.4 : 0;
            if (isMusicOn) {
                musicRef.current.play().catch(() => {
                    console.log('Music play deferred until interaction');
                });
            }
        }
    }, [isMusicOn]);

    useEffect(() => {
        let timeoutId;

        const scheduleDogMovement = () => {
            // Wait random time between 5s and 15s
            const delay = Math.random() * 10000 + 5000;

            timeoutId = setTimeout(() => {
                setIsDogMoving(true);

                // Let the gif play for 3 seconds then stop
                setTimeout(() => {
                    setIsDogMoving(false);
                    scheduleDogMovement(); // Schedule next movement
                }, 3000);
            }, delay);
        };

        scheduleDogMovement();

        return () => clearTimeout(timeoutId);
    }, []);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape' && activeComponent) {
                if (activeComponent === 'about' && chestCloseRef.current) {
                    chestCloseRef.current.volume = 0.2;
                    chestCloseRef.current.currentTime = 0;
                    chestCloseRef.current.play().catch(e => console.error("Error playing close sound:", e));
                }
                setActiveComponent(null);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [activeComponent]);

    const handleNextProject = () => {
        setCurrentProjectIndex((prevIndex) => (prevIndex + 1) % projectsData.length);
    };

    const handlePrevProject = () => {
        setCurrentProjectIndex((prevIndex) => (prevIndex - 1 + projectsData.length) % projectsData.length);
    };

    return (
        <div className="aboutme-container">
            <audio ref={sfxRef} loop autoPlay={false} preload="auto">
                <source src={fireCrackling} type="audio/mpeg" />
            </audio>
            <audio ref={musicRef} loop autoPlay={false} preload="auto">
                <source src={selectedMusic} type="audio/mpeg" />
            </audio>

            <div className="aboutme-controls">
                <button
                    className={`pixel-button ${isMusicOn ? 'active' : ''}`}
                    onClick={() => setIsMusicOn(!isMusicOn)}
                >
                    MUSIC: {isMusicOn ? 'ON' : 'OFF'}
                </button>
            </div>

            <a
                href={resumePdf}
                download="Shaun_Resume.pdf"
                className="aboutme-resume-wrapper"
            >
                <img src={sign} alt="Resume Sign" className="aboutme-sign-img" />
                <span className="aboutme-resume-text">RESUME</span>
            </a>

            <img
                className="aboutme-background"
                src={aboutBg}
                alt="About Me Background"
            />

            <RoomAtmosphere />

            <div className="aboutme-items-container">
                <div
                    className="aboutme-interactive-wrapper chest-wrapper"
                    onClick={() => {
                        if (chestOpenRef.current) {
                            chestOpenRef.current.volume = 0.2;
                            chestOpenRef.current.currentTime = 0;
                            chestOpenRef.current.play().catch(e => console.error("Error playing open sound:", e));
                        }
                        setActiveComponent('about');
                    }}
                >
                    <img
                        className="aboutme-overlay aboutme-chest"
                        src={chest}
                        alt="Chest"
                    />
                    <div className="aboutme-label aboutme-label-chest">
                        About Me
                    </div>
                </div>

                <div
                    className="aboutme-interactive-wrapper lecturn-wrapper"
                    onClick={() => setActiveComponent('projects')}
                >
                    <img
                        className="aboutme-overlay aboutme-lecturn"
                        src={lecturn}
                        alt="Lecturn"
                    />
                    <div className="aboutme-label aboutme-label-lecturn">
                        Projects
                    </div>
                </div>

                <div
                    className="aboutme-interactive-wrapper crafting-wrapper"
                    onClick={() => setActiveComponent('skills')}
                >
                    <img
                        className="aboutme-overlay aboutme-crafting-table"
                        src={craftingTable}
                        alt="Crafting Table"
                    />
                    <div className="aboutme-label aboutme-label-crafting">
                        Skills
                    </div>
                </div>


            </div>

            <audio ref={dogBarkRef} preload="auto">
                <source src={dogBark} type="audio/mpeg" />
            </audio>
            <audio ref={chestOpenRef} preload="auto">
                <source src={chestOpenSound} type="audio/ogg" />
            </audio>
            <audio ref={chestCloseRef} preload="auto">
                <source src={chestCloseSound} type="audio/ogg" />
            </audio>

            <img
                className="aboutme-dog"
                src={(isDogMoving || isDogHovered) ? dogGif : dogStill}
                alt="Dog"
                onMouseEnter={() => setIsDogHovered(true)}
                onMouseLeave={() => setIsDogHovered(false)}
                onClick={() => {
                    if (dogBarkRef.current) {
                        dogBarkRef.current.volume = 0.2;
                        dogBarkRef.current.currentTime = 0;
                        dogBarkRef.current.play().catch(e => console.error("Error playing audio:", e));
                    }
                }}
            />

            <img
                className="aboutme-fireplace"
                src={fireplace}
                alt="Fireplace"
            />

            <FireplaceEffects
                style={{
                    top: '47%',
                    right: '7%',
                    left: 'auto',
                    transform: 'translate(25%, -40%) scale(0.5)',
                    width: '600px',
                    height: '600px',
                    opacity: 0.8,
                    maskImage: 'radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 70%)',
                    WebkitMaskImage: 'radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 70%)'
                }}
            />

            {/* Conditionally Rendered Components */}
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
                            if (chestCloseRef.current) {
                                chestCloseRef.current.volume = 0.2;
                                chestCloseRef.current.currentTime = 0;
                                chestCloseRef.current.play().catch(e => console.error("Error playing close sound:", e));
                            }
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
