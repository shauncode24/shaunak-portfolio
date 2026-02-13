import React from 'react';
import { motion } from 'motion/react';
import './ExperienceDetail.css';

const ExperienceDetail = ({ experience, onClose }) => {
    if (!experience) return null;

    return (
        <motion.div
            className="experience-detail-overlay"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, type: "spring", damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()} // Prevent click through to backdrop
        >
            <div className="experience-detail-header">
                <div className="exp-logo-container">
                    {experience.companyLogo ? (
                        <img src={experience.companyLogo} alt={`${experience.company} Logo`} className="exp-detail-logo" />
                    ) : (
                        <div className="exp-placeholder-logo">{experience.company ? experience.company[0] : 'C'}</div>
                    )}
                </div>
                <div className="exp-header-info">
                    <h2 className="exp-company-name">{experience.company}</h2>
                    <h3 className="exp-role-title">{experience.role}</h3>
                    <div className="exp-meta-row">
                        <span className="exp-meta-item">{experience.date}</span>
                        <span className="exp-meta-item">{experience.type}</span>
                        <span className="exp-meta-item">{experience.location}</span>
                    </div>
                </div>
                <button className="exp-close-btn" onClick={onClose} aria-label="Close details">
                    &times;
                </button>
            </div>

            <div className="experience-detail-body">
                <div className="exp-section">
                    <h4 className="exp-section-title">What I Did</h4>
                    <ul className="exp-description-list">
                        {experience.description && experience.description.map((item, index) => (
                            <li key={index} className="exp-description-item">{item}</li>
                        ))}
                    </ul>
                </div>

                {experience.techStack && experience.techStack.length > 0 && (
                    <div className="exp-section">
                        <h4 className="exp-section-title">What I Worked With</h4>
                        <div className="exp-tech-stack">
                            {experience.techStack.map((tech, index) => (
                                <span key={index} className="exp-tech-chip">{tech}</span>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            <div className="experience-detail-footer">
                <div className="exp-footer-links">
                    {experience.linkedIn && (
                        <a href={experience.linkedIn} target="_blank" rel="noopener noreferrer" className="exp-action-btn exp-btn-primary">
                            LinkedIn Post
                        </a>
                    )}
                    {experience.presentation && (
                        <a href={experience.presentation} target="_blank" rel="noopener noreferrer" className="exp-action-btn exp-btn-secondary">
                            Presentation
                        </a>
                    )}
                </div>
                <div className="exp-footer-downloads">
                    {experience.offerLetter && (
                        <a href={experience.offerLetter} download className="exp-action-btn exp-btn-secondary">
                            Offer Letter
                        </a>
                    )}
                    {experience.certificate && (
                        <a href={experience.certificate} download className="exp-action-btn exp-btn-secondary">
                            Certificate
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

export default ExperienceDetail;
