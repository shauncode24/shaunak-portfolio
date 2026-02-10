import "./Skills.css";
import { useState, useEffect } from "react";
import arrow from "@/assets/about_me/crafting_arrow.png";
import java from "@/assets/skills/java.png";
import { motion } from 'motion/react';

// Tech stack icons - using emoji for now, replace with actual icon URLs
const skillsData = {
    languages: [
        { name: "C", icon: "https://www.clipartmax.com/png/full/351-3515666_c-language-global-or-external-variables-with-examples-c-programming-logo.png" },
        { name: "Java", icon: "https://689cloud.com/wp-content/uploads/2025/04/1174952-4-1-1.webp" },
        { name: "Python", icon: "https://cdn-icons-png.flaticon.com/256/5968/5968350.png" },
        { name: "JavaScript", icon: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png" },
        { name: "TypeScript", icon: "https://cdn-icons-png.flaticon.com/512/5968/5968381.png" },
    ],
    frontend: [
        { name: "HTML 5", icon: "https://cdn-icons-png.flaticon.com/512/5968/5968267.png" },
        { name: "CSS", icon: "https://cdn-icons-png.flaticon.com/512/5968/5968242.png" },
        { name: "React", icon: "https://i.sstatic.net/0hlcD.png" },
        { name: "Angular", icon: "https://cdn.iconscout.com/icon/free/png-256/free-angular-logo-icon-svg-download-png-1720094.png" },
        { name: "Bootstrap", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1280px-Bootstrap_logo.svg.png" },
    ],
    backend: [
        { name: "Node.js", icon: "https://cdn.iconscout.com/icon/free/png-256/free-node-js-logo-icon-svg-download-png-3030179.png" },
        { name: "Express.js", icon: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/express-js-icon.png" },
        { name: "ASP.NET Core", icon: "https://www.albiorixtech.com/wp-content/uploads/2022/03/net-core-company.png" },
        { name: "Flask", icon: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/flask-logo-icon.png" },
    ],
    database: [
        { name: "MongoDB", icon: "https://icon-icons.com/download-file?file=https%3A%2F%2Fimages.icon-icons.com%2F2415%2FPNG%2F512%2Fmongodb_original_wordmark_logo_icon_146425.png&id=146425&pack_or_individual=pack" },
        { name: "PostgreSQL", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/960px-Postgresql_elephant.svg.png" },
        { name: "MySQL", icon: "https://pngimg.com/d/mysql_PNG23.png" },
        { name: "Firebase", icon: "https://images.seeklogo.com/logo-png/61/2/firebase-icon-logo-png_seeklogo-615938.png" },
        { name: "Supabase", icon: "https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/webp/supabase.webp" },
    ],
    aiml: [
        { name: "TensorFlow", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Tensorflow_logo.svg/960px-Tensorflow_logo.svg.png" },
        { name: "Scikit-learn", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Scikit_learn_logo_small.svg/1280px-Scikit_learn_logo_small.svg.png" },
        { name: "Pandas", icon: "https://images.seeklogo.com/logo-png/48/2/pandas-icon-logo-png_seeklogo-483545.png" },
        { name: "NumPy", icon: "https://img.icons8.com/color/512/numpy.png" },
        { name: "Hugging Face", icon: "https://drmowinckels.io/blog/2024/ai-blog-summary/images/hf-logo.png" },
        { name: "Jupyter", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Jupyter_logo.svg/1280px-Jupyter_logo.svg.png" },
        { name: "MatPlotLib", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Matplotlib_icon.svg/3840px-Matplotlib_icon.svg.png" },
    ],
    tools: [
        { name: "GitHub", icon: "https://cdn-icons-png.flaticon.com/512/25/25231.png" },
        { name: "Docker", icon: "https://images.seeklogo.com/logo-png/64/2/docker-icon-logo-png_seeklogo-643955.png" },
        { name: "Vite", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Vitejs-logo.svg/1280px-Vitejs-logo.svg.png" },
        { name: "VS Code", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/500px-Visual_Studio_Code_1.35_icon.svg.png" },
        { name: "Figma", icon: "https://brandlogos.net/wp-content/uploads/2022/05/figma-logo_brandlogos.net_6n1pb-512x512.png" },
        { name: "Postman", icon: "https://www.svgrepo.com/show/354202/postman-icon.svg" },
    ],
};

const tabNames = ["languages", "frontend", "backend", "database", "aiml", "tools"];

const tabIcons = {
    languages: "https://cdn-icons-png.flaticon.com/512/1336/1336494.png", // Code icon
    frontend: "https://camo.githubusercontent.com/1faefc2972014f0f6b3aed4cdb494ee8d7fba0799b2b95863f36c4aa616617a2/68747470733a2f2f63646e2e7261776769742e636f6d2f7368616e6e6f6e6d6f656c6c65722f66726f6e742d656e642d6c6f676f2f6d61737465722f6578706f7274732f66726f6e742d656e642d6c6f676f2d62772e706e67", // Web/Globe icon
    backend: "https://cdn-icons-png.flaticon.com/512/3667/3667919.png", // Server icon
    database: "https://cdn-icons-png.flaticon.com/512/1980/1980250.png", // Database icon
    aiml: "https://cdn-icons-png.flaticon.com/512/4824/4824797.png", // AI/Brain icon
    tools: "https://cdn-icons-png.flaticon.com/512/2620/2620885.png", // Tools icon
};

export default function Skills({ onClose }) {
    const [activeTab, setActiveTab] = useState(0);
    const [craftingGrid, setCraftingGrid] = useState(Array(9).fill(null));
    const [craftedItem, setCraftedItem] = useState(null);

    const currentSkills = skillsData[tabNames[activeTab]];

    const recipes = [
        { ingredients: ["HTML 5", "CSS", "JavaScript"], result: "Static Website" },
        { ingredients: ["HTML 5", "CSS", "JavaScript", "Bootstrap"], result: "Responsive Website" },
        { ingredients: ["HTML 5", "CSS", "JavaScript", "TypeScript"], result: "Large Frontend Project" },
        { ingredients: ["JavaScript", "React", "HTML 5", "CSS"], result: "React Web App" },
        { ingredients: ["TypeScript", "React", "HTML 5", "CSS"], result: "Production Frontend App" },
        { ingredients: ["JavaScript", "Angular", "HTML 5", "CSS"], result: "Angular Web App" },
        { ingredients: ["Node.js", "Express.js"], result: "Backend API" },
        { ingredients: ["Node.js", "Express.js", "MongoDB"], result: "Backend with Database" },
        { ingredients: ["Node.js", "Express.js", "PostgreSQL"], result: "SQL Backend API" },
        { ingredients: ["React", "Node.js", "Express.js", "MongoDB"], result: "MERN Stack App" },
        { ingredients: ["PostgreSQL", "Express.js", "React", "Node.js"], result: "PERN Stack App" },
        { ingredients: ["Angular", "Node.js", "Express.js", "PostgreSQL"], result: "Enterprise Web App" },
    ];

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
            setCraftedItem({ name: match.result, icon: "https://cdn-icons-png.flaticon.com/512/1005/1005141.png" }); // Generic code/success icon
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
            const skillData = e.dataTransfer.getData("skill");
            if (skillData) {
                const skill = JSON.parse(skillData);
                const newGrid = [...craftingGrid];

                // Check if skill is already in grid, if so, remove it from old position? 
                // Alternatively, allow duplicates (user didn't specify). 
                // Assuming unique ingredients for recipes, but duplicate icons in grid might handle differently.
                // Let's iterate grid to remove duplicates if we want unique slots logic, 
                // OR just place it. Minecraft allows splitting, so duplicates are fine, 
                // but for this logic, only presence matters. I'll allow "duplicates" visual 
                // but the recipe checker handles names.
                // Actually to keep it clean, let's remove existing instance if present?
                // Nah, simpler is just overwrite slot.

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

    return (
        <div className="skills-overlay" onClick={onClose}>
            <motion.div
                className="mc-root"
                onClick={(e) => e.stopPropagation()}
                initial={{ scale: 0.95, opacity: 0, filter: 'blur(10px)' }}
                animate={{ scale: 1, opacity: 1, filter: 'blur(0px)' }}
                exit={{ scale: 0.95, opacity: 0, filter: 'blur(10px)' }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
            >
                {/* NEW RECIPE BOOK - LEFTMOST PANEL */}


                {/* LEFT SIDEBAR TABS - First 3 categories */}
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

                {/* CRAFTING + INVENTORY */}
                <div className="ci-frame">
                    <div className="ci-title">Skills</div>

                    <div className="ci-crafting-row">
                        <div className="ci-slot-1 ci-result-slot-1" />

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

                    {/* SINGLE ROW INVENTORY - 9 slots */}
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
                        {/* Fill remaining slots if less than 9 */}
                        {Array.from({ length: Math.max(0, 9 - currentSkills.length) }).map((_, i) => (
                            <div key={`empty-${i}`} className="ci-slot" />
                        ))}
                    </div>
                </div>

                {/* RIGHT SIDEBAR TABS - Last 3 categories */}
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
            </motion.div>
        </div>
    );
}
