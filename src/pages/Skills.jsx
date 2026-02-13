import "./Skills.css";
import arrow from "@/assets/about_me/crafting_arrow.png";
import craftingBook from "@/assets/skills/crafting_book.png";
import craftingBookSelected from "@/assets/skills/crafting_book_selected.png";
import craftingBookCheck from "@/assets/skills/crafting_book_check.png";
import { motion, AnimatePresence } from 'motion/react';
import { skillsData, tabNames, tabIcons, recipes } from "@/data/skillsData";
import { useSkillsLogic } from "@/hooks/useSkillsLogic";

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
                <AnimatePresence>
                    {isRecipeBookOpen && (
                        <>
                            {isOverlay && (
                                <motion.div
                                    key="backdrop"
                                    className="rb-mobile-backdrop"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setIsRecipeBookOpen(false);
                                    }}
                                />
                            )}
                            <motion.div
                                key="recipe-book"
                                initial={{ width: 0, opacity: 0, marginRight: 0 }}
                                animate={{ width: "auto", opacity: 1, marginRight: isOverlay ? 0 : 20 }}
                                exit={{ width: 0, opacity: 0, marginRight: 0 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                style={{ overflow: 'hidden' }}
                                className={isOverlay ? 'recipe-book-mobile' : ''}
                            >
                                <div className="default recipe-container" style={{ margin: 0 }}>
                                    <div className="recipe-book-panel">
                                        <div className="rb-search-row">
                                            <div className="rb-search-input-wrapper">
                                                <input
                                                    type="text"
                                                    className="rb-search-input"
                                                    placeholder="Search..."
                                                />
                                            </div>
                                            <div className="rb-toggle-btn">
                                                <img src={craftingBookCheck} alt="Toggle" style={{ height: '100%', objectFit: 'contain' }} />
                                            </div>
                                        </div>

                                        <div className="rb-grid">
                                            {recipes.map((recipe, i) => (
                                                <div
                                                    key={i}
                                                    className="rb-grid-slot"
                                                    onClick={() => handleRecipeClick(recipe)}
                                                    title={recipe.result}
                                                    style={{ cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                                                >
                                                    <img src={recipe.icon} alt={recipe.result} style={{ width: '80%', height: '80%', objectFit: 'contain' }} />
                                                </div>
                                            ))}
                                            {Array.from({ length: Math.max(0, 15 - recipes.length) }).map((_, i) => (
                                                <div key={`empty-${i}`} className="rb-grid-slot" />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>

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

                            <div className="ci-slot-2 ci-result-slot" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', padding: '5px' }}>
                                {craftedItem && (
                                    <motion.div
                                        initial={{ scale: 0.5, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '5px' }}
                                    >
                                        <img src={craftedItem.icon} alt={craftedItem.name} style={{ width: '60%', height: 'auto' }} />
                                        <span style={{ fontSize: '10px', color: '#333', fontFamily: 'Minecraft-Regular' }}>{craftedItem.name}</span>
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
                            {tabNames.slice(3, 6).map((tabName, i) => (
                                <div
                                    key={i + 3}
                                    className={`rb-side-slot ${activeTab === i + 3 ? "active" : ""}`}
                                    onClick={() => setActiveTab(i + 3)}
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

                    {isPortrait && isMobile && (
                        <div className="rb-sidebar rb-sidebar-bottom">
                            {tabNames.slice(3, 6).map((tabName, i) => (
                                <div
                                    key={i + 3}
                                    className={`rb-side-slot rb-side-slot-horizontal ${activeTab === i + 3 ? "active" : ""}`}
                                    onClick={() => setActiveTab(i + 3)}
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
                </div>
            </motion.div>
        </div>
    );
}