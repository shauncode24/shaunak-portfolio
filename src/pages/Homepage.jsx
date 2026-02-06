import './Homepage.css';
import bg from '@/assets/bg_14.png';

export default function Homepage() {
    return (
        <div className="homepage-container">
            <img className="homepage-background" src={bg} alt="Chest" />
        </div>
    );
}
