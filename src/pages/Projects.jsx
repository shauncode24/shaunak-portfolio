import './Projects.css';
import projectsBg from '@/assets/about_me/lecturn_page.png';
import pageButton from '@/assets/about_me/page_button.png';
import pageButtonHover from '@/assets/about_me/page_button_hover.png';

export default function Projects({ project, onNextProject, currentPage, totalPages, onClose }) {
    return (
        <div className="projects-container" onClick={onClose}>
            <div className='projects-wrapper' onClick={(e) => e.stopPropagation()}>
                <img
                    className="projects-background"
                    src={projectsBg}
                    alt="Projects Background"
                />
                <div className="projects-content">
                    <div className="project-display-div">
                        <h2 className="project-title">{project.title}</h2>
                        <div className="project-preview">
                            <div className="preview-placeholder"><img src={project.preview} alt="Project Preview" width="100%" height="100%" /></div>
                        </div>
                        <div className="project-info">
                            <p className="project-description">
                                {project.description}
                            </p>
                            <div className="project-technologies">
                                {project.technologies.map((tech, index) => (
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
            </div>
        </div>
    );
}
