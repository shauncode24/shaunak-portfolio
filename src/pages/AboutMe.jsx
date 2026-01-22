import { useEffect, useRef } from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaDiscord } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import './AboutMe.css';
import Playlist from '../components/Playlist';
import FloatingLines from '../components/FloatingLines';
import RotatingText from '../components/RotatingText';

const contactLinks = [
    { icon: <FaLinkedin size={28} />, label: "LinkedIn", href: "https://linkedin.com/in/yourprofile", color: "#0077b5" },
    { icon: <FaGithub size={28} />, label: "GitHub", href: "https://github.com/yourusername", color: "#8a4baf" },
    { icon: <FaXTwitter size={28} />, label: "X", href: "https://x.com/yourhandle", color: "#00d9ff" },
    { icon: <FaEnvelope size={28} />, label: "Email", href: "mailto:your.email@example.com", color: "#ec4899" },
    { icon: <FaDiscord size={28} />, label: "Discord", href: "https://discord.gg/yourinvite", color: "#5865f2" },
];

export default function AboutMe() {
    const contactsRef = useRef(null);

    useEffect(() => {
        const socialIcons = contactsRef.current.querySelectorAll('.social-icon');

        socialIcons.forEach(icon => {
            const handleIconEnter = function () {
                createParticles(this);
            };

            const handleIconMove = function (e) {
                const rect = this.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                this.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px) scale(1.1) rotate(3deg)`;
            };

            const handleIconLeave = function () {
                this.style.transform = '';
            };

            const handleIconClick = function (e) {
                createRipple(e, this);
                showSuccessCheck(this);
            };

            icon.addEventListener('mouseenter', handleIconEnter);
            icon.addEventListener('mousemove', handleIconMove);
            icon.addEventListener('mouseleave', handleIconLeave);
            icon.addEventListener('click', handleIconClick);
        });
    }, []);

    function createRipple(e, element) {
        const ripple = document.createElement('span');
        ripple.classList.add('ripple');

        const rect = element.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';

        element.appendChild(ripple);
        setTimeout(() => ripple.remove(), 600);
    }

    function showSuccessCheck(element) {
        const check = document.createElement('div');
        check.classList.add('success-check', 'show');
        check.innerHTML = `
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
        `;
        element.appendChild(check);
        setTimeout(() => check.remove(), 600);
    }

    function createParticles(element) {
        const colors = ['#00d9ff', '#a855f7', '#ec4899', '#5865f2'];
        const particleCount = 6;

        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.classList.add('particles');
            particle.style.color = colors[Math.floor(Math.random() * colors.length)];

            const angle = (Math.PI * 2 * i) / particleCount;
            const distance = 40 + Math.random() * 20;
            const tx = Math.cos(angle) * distance;
            const ty = Math.sin(angle) * distance;

            particle.style.setProperty('--tx', `${tx}px`);
            particle.style.setProperty('--ty', `${ty}px`);
            particle.style.left = '50%';
            particle.style.top = '50%';

            element.appendChild(particle);
            particle.style.animation = 'particleBurst 0.8s ease-out forwards';

            setTimeout(() => particle.remove(), 800);
        }
    }

    return (
        <div className="default about-container">
            <FloatingLines
                enabledWaves={["top", "middle", "bottom"]}
                // Array - specify line count per wave; Number - same count for all waves
                lineCount={5}
                // Array - specify line distance per wave; Number - same distance for all waves
                lineDistance={5}
                bendRadius={5}
                bendStrength={-0.5}
                interactive={true}
                parallax={true}
            />
            <div className="default about-main-container">
                <Playlist />
                <div className="default about-content">
                    <div className="default about-content-header">
                        Hey There!
                    </div>
                    <div className="default about-content-body">
                        I'm Shaunak Karve—a Full Stack Developer who transforms ideas into seamless digital experiences.<br /> <br />
                        I specialize in building web applications where clean code meets thoughtful design. From responsive frontends to scalable backends, I create solutions that don't just work—they feel right. My focus is on writing maintainable code that solves real problems for real people. <br /> <br />
                        Currently based in Mumbai and open to remote opportunities worldwide. I work across the modern web stack—React, Node.js, TypeScript, and whatever tools best serve the project. I'm particularly drawn to challenges that require both technical depth and creative thinking. <br /><br />
                        <div className='default about-content-body-rotating-text'>
                            When I'm not crafting code, you'll find me &nbsp;
                            <RotatingText
                                texts={['doing a quick sketch', 'writing a short story', 'playing minecraft', 'listening to music', 'reading history', 'watching movies']}
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
                    <div className="default contacts-div" ref={contactsRef}>
                        <div className="default contacts-header">
                            Let's Connect!
                        </div>
                        <div className="default contacts-body">
                            {contactLinks.map((link, idx) => (
                                <a
                                    key={idx}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`default contact social-icon ${link.label.toLowerCase()}`}
                                    data-label={link.label}
                                    style={{
                                        '--icon-color': link.color,
                                        animationDelay: `${idx * 0.1}s`
                                    }}
                                >
                                    <span className="tooltip">{link.label}</span>
                                    {link.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
                {/* <div className='default img-div'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsL6yplRSzq0wT9jttUfFLQb9KOLXdI-QI7w&s" height='100%' />
                </div> */}
            </div>
        </div>
    );
}
