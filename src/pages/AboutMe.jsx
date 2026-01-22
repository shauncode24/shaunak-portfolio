import './AboutMe.css';
import Playlist from '../components/Playlist';

export default function AboutMe() {
    return (
        <div className="default about-container">
            <div className="default about-main-container">
                <Playlist />
                <div className="default about-content">
                    <div className="default about-content-header">
                        Hey!
                    </div>
                    <div className="default about-content-body">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis tempore explicabo, nam reprehenderit quisquam molestias ratione velit necessitatibus aut, numquam recusandae et, ipsam officiis in repellendus sequi perferendis eveniet quis!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem aut illum, explicabo natus beatae distinctio. Porro officia excepturi repudiandae. Placeat cumque, alias quo corrupti officiis quos voluptas reprehenderit soluta eius.
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat ipsum, nesciunt rerum voluptatem ullam tempore facilis numquam cumque, explicabo excepturi fuga maiores. Labore, assumenda vero aliquid id pariatur beatae. Soluta.
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum voluptates distinctio atque sunt quis inventore ratione, sint itaque quasi soluta amet voluptatem tenetur. Accusamus corporis at magni omnis, nostrum consequatur.
                    </div>
                </div>
            </div>

            <div className="default contacts-div">
                <div className="default contacts-header">
                    Reach Out to Me!
                </div>
            </div>
        </div>
    );
}
