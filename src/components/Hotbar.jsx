import React from 'react';
import './Hotbar.css';

export default function Hotbar() {
    const slots = [
        { item: '', durability: 90 },
        { item: '', durability: 75 },
        { item: '', durability: 60 },
        { item: '', durability: 85 },
        { item: '', durability: 50 },
        { item: null },
        { item: '', count: 3 },
        { item: '', count: 44 },
        { item: '', count: 27 },
    ];

    return (
        <div className="hotbar-wrapper">
            <div className="hotbar">
                {slots.map((slot, index) => (
                    <div key={index} className="hotbar-slot">
                        {slot.item && (
                            <>
                                <div className="slot-item">
                                    {slot.item}
                                </div>

                                {slot.durability && (
                                    <div className="durability-bar-container">
                                        <div
                                            className={`durability-bar ${slot.durability > 60 ? 'high' :
                                                slot.durability > 30 ? 'medium' : 'low'
                                                }`}
                                            style={{ width: `${slot.durability}%` }}
                                        />
                                    </div>
                                )}

                                {slot.count && (
                                    <div className="item-count">
                                        {slot.count}
                                    </div>
                                )}
                            </>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}