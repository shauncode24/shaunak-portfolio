import React from 'react';
import './ProjectInfo.css';
import { FiGithub, FiExternalLink, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'motion/react';

export default function ProjectInfo({ project, onClose }) {
    if (!project) return null;

    return (
        <AnimatePresence>
            <motion.div
                className="project-info-overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
            >
                <div
                    className="project-info-content"
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="project-info-header">
                        <div className="pi-title-group">
                            <h2 className="pi-title">{project.title}</h2>
                            <div className="pi-meta-row">
                                <span className="pi-date">{project.date || "2024"}</span>
                                <span className="pi-role">{project.role || "Developer"}</span>
                            </div>
                        </div>
                        <button className="pi-close-btn" onClick={onClose} title="Close">
                            <FiX />
                        </button>
                    </div>

                    <div className="project-info-body">
                        <div className="pi-left-col">
                            <div className="pi-section">
                                <h3 className="pi-section-title">Overview</h3>
                                <p className="pi-description">
                                    {project.longDescription || project.description}
                                </p>
                            </div>

                            {project.features && (
                                <div className="pi-section">
                                    <h3 className="pi-section-title">Key Features</h3>
                                    <ul className="pi-feature-list">
                                        {project.features.map((feature, i) => (
                                            <li key={i}>{feature}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {project.motivation && (
                                <div className="pi-section">
                                    <h3 className="pi-section-title">Motivation</h3>
                                    <p className="pi-description">
                                        {project.motivation}
                                    </p>
                                </div>
                            )}

                            {project.learnings && (
                                <div className="pi-section">
                                    <h3 className="pi-section-title">What I Learned</h3>
                                    <div className="pi-learnings-container">
                                        {project.learnings.map((learning, i) => (
                                            <div key={i} className="pi-learning-item">
                                                <h4 className="pi-learning-title">{learning.title}</h4>
                                                {learning.description && <p className="pi-learning-desc">{learning.description}</p>}
                                                {learning.points && (
                                                    <ul className="pi-learning-points">
                                                        {learning.points.map((pt, j) => (
                                                            <li key={j}>{pt}</li>
                                                        ))}
                                                    </ul>
                                                )}
                                                {learning.footer && <p className="pi-learning-footer">{learning.footer}</p>}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            <div className="pi-section">
                                <h3 className="pi-section-title">Technologies</h3>
                                <div className="pi-tech-grid">
                                    {project.technologies.map((tech, i) => (
                                        <span key={i} className="pi-tech-Badge">{tech}</span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="pi-right-col">
                            <div className="pi-preview-wrapper" style={{ backgroundImage: `url(${project.preview})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                                {/* Image set as background for cover effect, or use img tag */}
                                <div className="pi-overlay-hint"></div>
                            </div>

                            <div className="pi-links-row">
                                <a href={project.github || "#"} target="_blank" rel="noopener noreferrer" className="pi-action-btn pi-btn-github">
                                    <FiGithub size={20} />
                                    GitHub
                                </a>
                                <a href={project.link || "#"} target="_blank" rel="noopener noreferrer" className="pi-action-btn pi-btn-live">
                                    <FiExternalLink size={20} />
                                    Live Demo
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    );
}
