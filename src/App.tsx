import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Homepage } from "./pages/Homepage";
import { PricingPage } from "./pages/PricingPage";
import { DocsPage } from "./pages/DocsPage";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { FloatingAIChat } from "./components/FloatingAIChat";
import { SearchModal } from "./components/SearchModal";

const PageTransition: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
      animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      exit={reduceMotion ? { opacity: 1 } : { opacity: 0, y: -16 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
};

const AppRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Homepage /></PageTransition>} />
        <Route path="/pricing" element={<PageTransition><PricingPage /></PageTransition>} />
        <Route path="/docs" element={<PageTransition><DocsPage /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key === 'k') {
        event.preventDefault();
        setIsSearchModalOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <>
      <div className="noise-overlay"></div>
      <Router>
        <Navbar onSearchClick={() => setIsSearchModalOpen(true)} />
        <main className="overflow-x-hidden pt-16"> {/* Add padding top to avoid content overlap with fixed navbar */}
          <AppRoutes />
        </main>
        <Footer />
        <FloatingAIChat />
        <SearchModal isOpen={isSearchModalOpen} onClose={() => setIsSearchModalOpen(false)} />
      </Router>
    </>
  );
}

export default App;
