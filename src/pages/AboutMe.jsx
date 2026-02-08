import { useState } from 'react';
import './AboutMe.css';
import Projects from './Projects';
import aboutBg from '@/assets/about_me_bg_2.png';
import AboutMeInfo from './AboutMeInfo';
import Skills from './Skills';

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
            {/* <AboutMeInfo /> */}

            <Skills />

            {/* <Projects
                project={projectsData[currentProjectIndex]}
                onNextProject={handleNextProject}
                currentPage={currentProjectIndex + 1}
                totalPages={projectsData.length}
            /> */}
        </div>
    );
}
