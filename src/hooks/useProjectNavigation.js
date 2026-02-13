import { useState } from 'react';

export const useProjectNavigation = (totalProjects) => {
    const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

    const handleNextProject = () => {
        setCurrentProjectIndex((prevIndex) => (prevIndex + 1) % totalProjects);
    };

    const handlePrevProject = () => {
        setCurrentProjectIndex((prevIndex) => (prevIndex - 1 + totalProjects) % totalProjects);
    };

    return {
        currentProjectIndex,
        handleNextProject,
        handlePrevProject
    };
};
