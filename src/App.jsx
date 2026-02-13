import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Homepage from './pages/Homepage';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import LoadingScreen from './pages/LoadingScreen';
import buttonClickSound from '@/assets/audio/button_click.mp3';

const PageTitleUpdater = () => {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    const baseTitle = "Shaunak Karve | ";

    switch (path) {
      case "/":
        document.title = baseTitle + "Portfolio";
        break;
      case "/homepage":
        document.title = baseTitle + "Homepage";
        break;
      case "/projects":
        document.title = baseTitle + "Projects";
        break;
      case "/skills":
        document.title = baseTitle + "Skills";
        break;
      default:
        document.title = "Shaun's Portfolio";
    }
  }, [location]);

  return null;
};

function App() {
  const [isLoading, setIsLoading] = useState(window.location.pathname === '/');

  const handleLoadComplete = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    const handleGlobalClick = (e) => {
      // 1. Exclude the Chest immediately
      if (e.target.closest('.chest-wrapper') || e.target.closest('.homepage-chest')) {
        return;
      }

      // 2. define interactive elements
      // We check for standard interactive tags, roles, or common "clickable" classes
      const interactiveSelector = `
        button, a, 
        input[type="button"], input[type="submit"], input[type="checkbox"], input[type="radio"],
        select, textarea,
        [role="button"], [role="link"], [role="menuitem"], [role="tab"],
        .homepage-interactive-wrapper,
        .pixel-button,
        .experience-node,
        .exp-close-btn,
        .exp-action-btn,
        .mobile-nav-item,
        .homepage-resume-wrapper,
        .nav-arrow,
        .close-button,
        .clickable,
        .cursor-pointer
      `;

      // 3. Check if the clicked element or its parent matches
      const target = e.target.closest(interactiveSelector);

      // 4. ALSO check if the computed cursor is 'pointer' - this catches most React clickables
      const computedStyle = window.getComputedStyle(e.target);
      const isPointer = computedStyle.cursor === 'pointer';

      if (target || isPointer) {
        const audio = new Audio(buttonClickSound);
        audio.volume = 0.5; // Slightly louder to be sure
        audio.currentTime = 0; // Reset just in case (though new instance doesn't need it, good habit)
        audio.play().catch(() => { }); // catch interrupt errors silently
      }
    };

    window.addEventListener('click', handleGlobalClick);
    return () => window.removeEventListener('click', handleGlobalClick);
  }, []);

  return (
    <>
      {isLoading && <LoadingScreen onFinished={handleLoadComplete} />}
      <Router>
        <PageTitleUpdater />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
