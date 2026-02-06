import './Homepage.css';
import bg from '@/assets/bg_14.png';
import fireplace from '@/assets/fireplace_2.gif';

export default function Homepage() {
    return (
        <div className="homepage-container">
            <img className="homepage-background" src={bg} alt="Chest" />
            <img className="homepage-fireplace" src={fireplace} alt="Fireplace" />
            <div className="homepage-content">
                Shaunak Karve
            </div>
        </div>
    );
}
