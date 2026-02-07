import { useState } from 'react';
import './AboutMe.css';
import Projects from './Projects';
import aboutBg from '@/assets/about_me_bg_2.png';
import character from '@/assets/character_1.png';
import RotatingText from '@/components/RotatingText';

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
        preview: "Project Preview"
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
            {/* <div className="aboutme-content-wrapper">
                <div className="aboutme-glass-panel">
                    <div className="aboutme-left">
                        <div className="minecraft-nametag">Shaunak Karve</div>
                        <img
                            className="aboutme-character"
                            src={character}
                            alt="Character"
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
            </div> */}
            <Projects
                project={projectsData[currentProjectIndex]}
                onNextProject={handleNextProject}
                currentPage={currentProjectIndex + 1}
                totalPages={projectsData.length}
            />
        </div>
    );
}
