import './AboutMeInfo.css';
import aboutBg from '@/assets/about_me_bg_2.png';
import character from '@/assets/character_1.png';
import RotatingText from '@/components/RotatingText';

export default function AboutMeInfo() {
    return (
        <div className="aboutme-container">
            <img
                className="aboutme-background"
                src={aboutBg}
                alt="About Me Background"
            />
            <div className="aboutme-content-wrapper">
                <div className="aboutme-glass-panel">
                    <div className="aboutme-left">
                        <div className="minecraft-nametag">Shaunak Karve</div>
                        <img
                            className="aboutme-character"
                            src={character}
                            alt="Character"
                        />
                    </div>
                    <div className="aboutme-right">
                        <div className="aboutme-heading">Hey There!</div>
                        <div className="aboutme-body">
                            <p>
                                I'm a Full Stack Developer who transforms ideas into seamless digital experiences.
                            </p>
                            <p>
                                I specialize in building web applications where clean code meets thoughtful design. From responsive frontends to scalable backends, I create solutions that don't just work—they feel right.
                            </p>
                            <p>
                                Currently based in Mumbai and open to remote opportunities worldwide. I work across the modern web stack—React, Node.js, TypeScript—and whatever tools best serve the project.
                            </p>
                        </div>
                        <div className='about-content-body-rotating-text'>
                            When I'm not coding, you'll find me&nbsp;
                            <RotatingText
                                texts={['sketching', 'writing stories', 'playing Minecraft', 'listening to music', 'reading history', 'watching films']}
                                mainClassName="rotating-text-gradient"
                                staggerFrom={"last"}
                                initial={{ y: "100%" }}
                                animate={{ y: 0 }}
                                exit={{ y: "-120%" }}
                                staggerDuration={0.025}
                                splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                                rotationInterval={3000}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
