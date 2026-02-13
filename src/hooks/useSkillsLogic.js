import { useState, useEffect } from "react";
import { skillsData, recipes } from "@/data/skillsData";

export const useSkillsLogic = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [craftingGrid, setCraftingGrid] = useState(Array(9).fill(null));
    const [craftedItem, setCraftedItem] = useState(null);
    const [isRecipeBookOpen, setIsRecipeBookOpen] = useState(false);
    const [isBookHovered, setIsBookHovered] = useState(false);
    const [isPortrait, setIsPortrait] = useState(window.innerHeight > window.innerWidth);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 820);
    const [isOverlay, setIsOverlay] = useState(window.innerWidth < 1024);

    useEffect(() => {
        const handleResize = () => {
            setIsPortrait(window.innerHeight > window.innerWidth);
            setIsMobile(window.innerWidth <= 820);
            setIsOverlay(window.innerWidth < 1024);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const currentIngredients = craftingGrid
            .filter(item => item !== null)
            .map(item => item.name)
            .sort();

        const match = recipes.find(recipe => {
            const recipeIngredients = [...recipe.ingredients].sort();
            return JSON.stringify(recipeIngredients) === JSON.stringify(currentIngredients);
        });

        if (match) {
            setCraftedItem({ name: match.result, icon: match.icon });
        } else {
            setCraftedItem(null);
        }
    }, [craftingGrid]);

    const handleDragStart = (e, skill) => {
        e.dataTransfer.setData("skill", JSON.stringify(skill));
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const handleDrop = (e, index) => {
        e.preventDefault();
        try {
            const skillDataStr = e.dataTransfer.getData("skill");
            if (skillDataStr) {
                const skill = JSON.parse(skillDataStr);
                const newGrid = [...craftingGrid];
                newGrid[index] = skill;
                setCraftingGrid(newGrid);
            }
        } catch (err) {
            console.error("Drop error", err);
        }
    };

    const handleSlotClick = (index) => {
        const newGrid = [...craftingGrid];
        newGrid[index] = null;
        setCraftingGrid(newGrid);
    };

    const handleRecipeClick = (recipe) => {
        const allSkills = Object.values(skillsData).flat();
        const newGrid = Array(9).fill(null);
        recipe.ingredients.forEach((ingName, idx) => {
            if (idx < 9) {
                const skill = allSkills.find(s => s.name === ingName);
                if (skill) newGrid[idx] = skill;
            }
        });
        setCraftingGrid(newGrid);
    };

    return {
        activeTab,
        setActiveTab,
        craftingGrid,
        craftedItem,
        isRecipeBookOpen,
        setIsRecipeBookOpen,
        isBookHovered,
        setIsBookHovered,
        isPortrait,
        isMobile,
        isOverlay,
        handleDragStart,
        handleDragOver,
        handleDrop,
        handleSlotClick,
        handleRecipeClick
    };
};
