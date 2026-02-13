import { useState } from 'react';
import { FiGithub, FiExternalLink, FiInfo } from 'react-icons/fi';
import './Projects.css';
import projectsBg from '@/assets/about_me/lecturn_page.png';
import pageButton from '@/assets/about_me/page_button.png';
import pageButtonHover from '@/assets/about_me/page_button_hover.png';
import { motion, AnimatePresence } from 'motion/react';
import ProjectInfo from './ProjectInfo';

export default function Projects({ project, onNextProject, onPrevProject, currentPage, totalPages, onClose }) {
    const [showInfo, setShowInfo] = useState(false);

    return (
        <div className="projects-container" onClick={onClose}>
            <motion.div
                className='projects-wrapper'
                onClick={(e) => e.stopPropagation()}
                initial={{ scale: 0.95, opacity: 0, filter: 'blur(10px)' }}
                animate={{ scale: 1, opacity: 1, filter: 'blur(0px)' }}
                exit={{ scale: 0.95, opacity: 0, filter: 'blur(10px)' }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
            >
                <img
                    className="projects-background"
                    src={projectsBg}
                    alt="Projects Background"
                />
                <div className="projects-content">
                    <div className="project-display-div">
                        <h2
                            className="project-title"
                            onClick={() => setShowInfo(true)}
                            title="Click for details"
                        >
                            {project.title}
                            <span className="project-info-icon">
                                <FiInfo />
                            </span>
                        </h2>
                        <div className="project-preview">
                            <img src={project.preview} alt="Project Preview" className="project-image" width="100%" height="100%" />

                            <div className="project-overlay">
                                <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                                    <FiGithub size={24} />
                                    <span className="link-arrow">↗</span>
                                </a>
                                <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                                    <FiExternalLink size={24} />
                                    <span className="link-arrow">↗</span>
                                </a>
                            </div>
                        </div>
                        <div className="project-info">
                            <p className="project-description">
                                {project.description}
                            </p>
                            <div className="project-technologies">
                                {project.technologies.slice(0, 3).map((tech, index) => (
                                    <span key={index} className="tech-badge">{tech}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="page-counter">
                    Page {currentPage} of {totalPages}
                </div>
                <img
                    className="page-button"
                    src={pageButton}
                    alt="Next Page"
                    onClick={onNextProject}
                    onMouseEnter={(e) => e.currentTarget.src = pageButtonHover}
                    onMouseLeave={(e) => e.currentTarget.src = pageButton}
                />
                <img
                    className="page-button page-button-prev"
                    src={pageButton}
                    alt="Previous Page"
                    onClick={onPrevProject}
                    onMouseEnter={(e) => e.currentTarget.src = pageButtonHover}
                    onMouseLeave={(e) => e.currentTarget.src = pageButton}
                />
            </motion.div>

            {/* Project Info Overlay */}
            {showInfo && (
                <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: 1000 }} onClick={(e) => e.stopPropagation()}>
                    <ProjectInfo project={project} onClose={() => setShowInfo(false)} />
                </div>
            )}
        </div>
    );
}
