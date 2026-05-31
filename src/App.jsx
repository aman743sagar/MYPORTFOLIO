import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Element } from 'react-scroll';
import About from './components/sections/About';
import Contact from './components/sections/Contact';
import Hero from './components/sections/Hero';
import Projects from './components/sections/Projects';
import Resume from './components/sections/Resume';
import Skills from './components/sections/Skills';
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';
import BackgroundAccent from './components/ui/BackgroundAccent';
import LoadingScreen from './components/ui/LoadingScreen';
import { portfolioData } from './data/portfolioData';
import { useTheme } from './hooks/useTheme';

const pageTransition = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.16, 1, 0.3, 1],
      staggerChildren: 0.1,
    },
  },
};

function App() {
  const { theme, toggleTheme } = useTheme();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoading(false), 1500);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[var(--page-bg)] text-slate-900 transition-colors duration-300 dark:text-slate-100">
      <BackgroundAccent />

      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen key="loading" />
        ) : (
          <motion.div
            key="portfolio"
            className="relative z-10"
            initial="hidden"
            animate="visible"
            variants={pageTransition}
          >
            <Navbar
              links={portfolioData.navigation}
              theme={theme}
              toggleTheme={toggleTheme}
            />

            <motion.main className="pt-24">
              <Element name="home">
                <Hero data={portfolioData} />
              </Element>
              <Element name="about">
                <About data={portfolioData} />
              </Element>
              <Element name="skills">
                <Skills data={portfolioData} />
              </Element>
              <Element name="projects">
                <Projects data={portfolioData} />
              </Element>
              <Element name="resume">
                <Resume data={portfolioData} />
              </Element>
              <Element name="contact">
                <Contact data={portfolioData} />
              </Element>
            </motion.main>

            <Footer data={portfolioData} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
