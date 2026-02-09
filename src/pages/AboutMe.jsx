import { useState, useEffect } from 'react';
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

    const handleNextProject = () => {
        setCurrentProjectIndex((prevIndex) => (prevIndex + 1) % projectsData.length);
    };

    return (
        <div className="aboutme-container">
            <img
                className="aboutme-background"
                src={aboutBg}
                alt="About Me Background"
            />

            <div className="aboutme-items-container">
                <div
                    className="aboutme-interactive-wrapper chest-wrapper"
                    onClick={() => setActiveComponent('about')}
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

            <img
                className="aboutme-dog"
                src={isDogMoving ? dogGif : dogStill}
                alt="Dog"
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
            {activeComponent === 'about' && <AboutMeInfo onClose={() => setActiveComponent(null)} />}
            {activeComponent === 'skills' && <Skills onClose={() => setActiveComponent(null)} />}
            {activeComponent === 'projects' && (
                <Projects
                    project={projectsData[currentProjectIndex]}
                    onNextProject={handleNextProject}
                    currentPage={currentProjectIndex + 1}
                    totalPages={projectsData.length}
                    onClose={() => setActiveComponent(null)}
                />
            )}
        </div>
    );
}
