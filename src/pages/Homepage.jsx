import { useState, useEffect } from 'react';
import './Homepage.css';
import bg from '@/assets/bg_14.png';
import fireplace from '@/assets/fireplace_2.gif';
import Hotbar from '@/components/Hotbar';

export default function Homepage() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            // Calculate position as percentage of viewport
            const x = (e.clientX / window.innerWidth - 0.5) * 2; // Range: -1 to 1
            const y = (e.clientY / window.innerHeight - 0.5) * 2; // Range: -1 to 1

            setMousePosition({ x, y });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    // Subtle movement: max 10px in any direction
    // Negative values so background moves opposite to cursor (revealing hidden edges)
    const bgTransform = {
        transform: `translate(${-mousePosition.x * 5}px, ${-mousePosition.y * 5}px)`,
        transition: 'transform 0.3s ease-out'
    };

    // Fireplace needs to maintain its centering transform while also moving with background
    const fireplaceTransform = {
        transform: `translate(calc(-50% + ${-mousePosition.x * 5}px), calc(-50% + ${-mousePosition.y * 5}px))`,
        transition: 'transform 0.3s ease-out'
    };

    return (
        <div className="homepage-container">
            <img
                className="homepage-background"
                src={bg}
                alt="Chest"
                style={bgTransform}
            />
            <img
                className="homepage-fireplace"
                src={fireplace}
                alt="Fireplace"
                style={fireplaceTransform}
            />
            <div className="homepage-content">
                SHAUNAK KARVE
                {/* <span>Inspire to Create</span> */}
            </div>
            <Hotbar />
        </div>
    );
}
