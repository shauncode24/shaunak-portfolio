import "./Skills.css";
import arrow from "@/assets/about_me/crafting_arrow.png";
import craftingBook from "@/assets/skills/crafting_book.png";
import craftingBookSelected from "@/assets/skills/crafting_book_selected.png";
import { motion } from 'motion/react';
import { skillsData, tabNames, tabIcons } from "@/data/skillsData";
import { useSkillsLogic } from "@/hooks/useSkillsLogic";
import RecipeBook from "@/components/RecipeBook";

export default function Skills({ onClose }) {
    const {
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
    } = useSkillsLogic();

    const currentSkills = skillsData[tabNames[activeTab]];

    return (
        <div className="skills-overlay" onClick={onClose}>
            <motion.div
                className={`mc-root ${isPortrait && isMobile ? 'mc-root-mobile-portrait' : ''}`}
                onClick={(e) => e.stopPropagation()}
                initial={{ scale: 0.95, opacity: 0, filter: 'blur(10px)' }}
                animate={{ scale: 1, opacity: 1, filter: 'blur(0px)' }}
                exit={{ scale: 0.95, opacity: 0, filter: 'blur(10px)' }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
            >
                <RecipeBook
                    isOpen={isRecipeBookOpen}
                    onClose={() => setIsRecipeBookOpen(false)}
                    isOverlay={isOverlay}
                    onRecipeClick={handleRecipeClick}
                />

                <div className={`skills-main-container ${isPortrait && isMobile ? 'mobile-portrait' : ''}`}>
                    {isPortrait && isMobile && (
                        <div className="rb-sidebar rb-sidebar-top">
                            {tabNames.slice(0, 3).map((tabName, i) => (
                                <div
                                    key={i}
                                    className={`rb-side-slot rb-side-slot-horizontal ${activeTab === i ? "active" : ""}`}
                                    onClick={() => setActiveTab(i)}
                                >
                                    <img
                                        src={tabIcons[tabName]}
                                        alt={tabName}
                                        className="tab-icon"
                                    />
                                    <span className="tab-label">
                                        {tabName === "frontend" ? "Frontend" :
                                            tabName === "aiml" ? "AI/ML" :
                                                tabName.charAt(0).toUpperCase() + tabName.slice(1)}
                                    </span>
                                </div>
                            ))}
                        </div>
                    )}

                    {!(isPortrait && isMobile) && (
                        <>
                            <div className="rb-sidebar">
                                {tabNames.slice(0, 3).map((tabName, i) => (
                                    <div
                                        key={i}
                                        className={`rb-side-slot ${activeTab === i ? "active" : ""}`}
                                        onClick={() => setActiveTab(i)}
                                    >
                                        <img
                                            src={tabIcons[tabName]}
                                            alt={tabName}
                                            className="tab-icon"
                                        />
                                        <span className="tab-label">
                                            {tabName === "frontend" ? "Frontend" :
                                                tabName === "aiml" ? "AI/ML" :
                                                    tabName.charAt(0).toUpperCase() + tabName.slice(1)}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </>
                    )}

                    <div className="ci-frame">
                        <div className="ci-title">Skills</div>

                        <div className={`ci-crafting-row ${isPortrait && isMobile ? 'mobile-portrait-crafting' : ''}`}>
                            <div
                                className="ci-slot-1 ci-result-slot-1"
                                onClick={() => setIsRecipeBookOpen(!isRecipeBookOpen)}
                                onMouseEnter={() => setIsBookHovered(true)}
                                onMouseLeave={() => setIsBookHovered(false)}
                                style={{ cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 0 }}
                            >
                                <img
                                    src={isBookHovered || isRecipeBookOpen ? craftingBookSelected : craftingBook}
                                    alt="Recipe Book"
                                    style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                                />
                            </div>

                            <div className="ci-crafting-grid">
                                {craftingGrid.map((slot, i) => (
                                    <div
                                        key={i}
                                        className="ci-slot"
                                        onDragOver={handleDragOver}
                                        onDrop={(e) => handleDrop(e, i)}
                                        onClick={() => handleSlotClick(i)}
                                        title={slot ? slot.name : "Empty Slot"}
                                        style={{ cursor: slot ? 'pointer' : 'default', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                                    >
                                        {slot && <img src={slot.icon} alt={slot.name} width="80%" />}
                                    </div>
                                ))}
                            </div>

                            <div className="ci-arrow-space">
                                <img src={arrow} alt="arrow" />
                            </div>

                            <div className="ci-slot-2 ci-result-slot">
                                {craftedItem && (
                                    <motion.div
                                        className="crafted-item-content"
                                        initial={{ scale: 0.5, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                    >
                                        <img src={craftedItem.icon} alt={craftedItem.name} className="crafted-item-icon" />
                                        <span className="crafted-item-name">{craftedItem.name}</span>
                                    </motion.div>
                                )}
                            </div>
                        </div>

                        <div className="ci-title ci-inv-title">Inventory</div>

                        <div className="ci-inventory-grid">
                            {currentSkills.slice(0, 9).map((skill, i) => (
                                <div
                                    key={i}
                                    className="ci-slot skill-slot"
                                    title={skill.name}
                                    draggable
                                    onDragStart={(e) => handleDragStart(e, skill)}
                                    style={{ cursor: 'grab' }}
                                >
                                    <img src={skill.icon} alt={skill.name} width="80%" />
                                </div>
                            ))}
                            {Array.from({ length: Math.max(0, 9 - currentSkills.length) }).map((_, i) => (
                                <div key={`empty-${i}`} className="ci-slot" />
                            ))}
                        </div>
                    </div>

                    {!(isPortrait && isMobile) && (
                        <div className="rb-sidebar rb-sidebar-right">
                            {tabNames.slice(3, 6).map((tabName, i) => {
                                const isDisabled = tabName === 'aiml';
                                return (
                                    <div
                                        key={i + 3}
                                        className={`rb-side-slot ${activeTab === i + 3 ? "active" : ""} ${isDisabled ? "disabled-tab" : ""}`}
                                        onClick={() => !isDisabled && setActiveTab(i + 3)}
                                        title={isDisabled ? "In progress, coming soon!" : ""}
                                    >
                                        <img
                                            src={tabIcons[tabName]}
                                            alt={tabName}
                                            className="tab-icon"
                                        />
                                        <span className="tab-label">
                                            {tabName === "frontend" ? "Frontend" :
                                                tabName === "aiml" ? "AI/ML" :
                                                    tabName.charAt(0).toUpperCase() + tabName.slice(1)}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>
                    )}

                    {isPortrait && isMobile && (
                        <div className="rb-sidebar rb-sidebar-bottom">
                            {tabNames.slice(3, 6).map((tabName, i) => {
                                const isDisabled = tabName === 'aiml';
                                return (
                                    <div
                                        key={i + 3}
                                        className={`rb-side-slot rb-side-slot-horizontal ${activeTab === i + 3 ? "active" : ""} ${isDisabled ? "disabled-tab" : ""}`}
                                        onClick={() => !isDisabled && setActiveTab(i + 3)}
                                        title={isDisabled ? "In progress, coming soon!" : ""}
                                    >
                                        <img
                                            src={tabIcons[tabName]}
                                            alt={tabName}
                                            className="tab-icon"
                                        />
                                        <span className="tab-label">
                                            {tabName === "frontend" ? "Frontend" :
                                                tabName === "aiml" ? "AI/ML" :
                                                    tabName.charAt(0).toUpperCase() + tabName.slice(1)}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </div>
            </motion.div>
        </div>
    );
}