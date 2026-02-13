import { motion, AnimatePresence } from 'motion/react';
import craftingBookCheck from "@/assets/skills/crafting_book_check.png";
import { recipes } from "@/data/skillsData";
import "./RecipeBook.css";

export default function RecipeBook({ isOpen, onClose, isOverlay, onRecipeClick }) {
    return (
        <AnimatePresence>
            {isOpen && (
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
                                onClose();
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
                                            onClick={() => onRecipeClick(recipe)}
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
    );
}
