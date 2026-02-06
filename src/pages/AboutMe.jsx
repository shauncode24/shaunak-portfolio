import './AboutMe.css';
import aboutBg from '@/assets/about_me_bg_2.png';
import aboutSign from '@/assets/about_me/about_me_sign.png';

export default function AboutMe() {
    return (
        <div className="aboutme-container">
            <img
                className="aboutme-background"
                src={aboutBg}
                alt="About Me Background"
            />
            <div className="aboutme-sign-container">
                <img
                    className="aboutme-sign"
                    src={aboutSign}
                    alt="About Me Sign"
                />
                <div className="aboutme-text">
                    <h1>About Me</h1>
                    <p>
                        Hello! I'm a passionate developer who loves creating immersive digital experiences.
                        With a keen eye for design and a dedication to clean code, I bring ideas to life
                        through innovative web applications.
                    </p>
                    <p>
                        My journey in development has been driven by curiosity and a constant desire to learn.
                        I specialize in building responsive, user-friendly interfaces that combine aesthetics
                        with functionality.
                    </p>
                    <p>
                        When I'm not coding, you can find me exploring new technologies, contributing to
                        open-source projects, or enjoying the great outdoors.
                    </p>
                </div>
            </div>
        </div>
    );
}
