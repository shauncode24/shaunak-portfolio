import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import LoadingScreen from './pages/LoadingScreen';

function App() {
  const [isLoading, setIsLoading] = useState(window.location.pathname === '/');

  const handleLoadComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && <LoadingScreen onFinished={handleLoadComplete} />}
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
