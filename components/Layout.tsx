import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const isActive = (path: string) => {
    return location.pathname === path ? "text-primary font-bold" : "text-text-main dark:text-text-main-dark hover:text-primary dark:hover:text-primary";
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col group/design-root overflow-x-hidden bg-background-light dark:bg-background-dark transition-colors duration-300">
      <div className="layout-container flex h-full grow flex-col">
        
        {/* Header */}
        <header className="sticky top-0 z-50 w-full border-b border-surface-light dark:border-surface-dark bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-sm px-4 sm:px-10 py-4 transition-colors duration-300">
          <div className="max-w-[1200px] mx-auto flex items-center justify-between whitespace-nowrap">
            <div className="flex items-center gap-4">
              <Link to="/" className="text-xl font-serif font-bold leading-tight text-text-main dark:text-text-main-dark">
                Kelvin Kyando
              </Link>
            </div>
            
            <div className="hidden md:flex flex-1 justify-end gap-8 items-center">
              <div className="flex items-center gap-9">
                <Link to="/" className={`text-sm font-medium leading-normal transition-colors ${isActive('/')}`}>Home</Link>
                <Link to="/journal" className={`text-sm font-medium leading-normal transition-colors ${isActive('/journal')}`}>Journal</Link>
                <Link to="/photography" className={`text-sm font-medium leading-normal transition-colors ${isActive('/photography')}`}>Photography</Link>
                <Link to="/about" className={`text-sm font-medium leading-normal transition-colors ${isActive('/about')}`}>About</Link>
                <Link to="/resources" className={`text-sm font-medium leading-normal transition-colors ${isActive('/resources')}`}>Resources</Link>
              </div>
              
              {/* Dark Mode Toggle */}
              <button 
                onClick={() => setIsDark(!isDark)} 
                className="p-2 rounded-full hover:bg-surface-light dark:hover:bg-surface-dark transition-colors text-text-main dark:text-text-main-dark"
                aria-label="Toggle Dark Mode"
              >
                <span className="material-symbols-outlined text-xl">
                  {isDark ? 'light_mode' : 'dark_mode'}
                </span>
              </button>
            </div>

            <div className="flex items-center gap-4 md:hidden">
               <button 
                onClick={() => setIsDark(!isDark)} 
                className="p-2 rounded-full hover:bg-surface-light dark:hover:bg-surface-dark transition-colors text-text-main dark:text-text-main-dark"
              >
                <span className="material-symbols-outlined text-xl">
                  {isDark ? 'light_mode' : 'dark_mode'}
                </span>
              </button>
              <button 
                className="text-text-main dark:text-text-main-dark"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <span className="material-symbols-outlined">menu</span>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden absolute top-full left-0 w-full bg-background-light dark:bg-background-dark border-b border-surface-light dark:border-surface-dark py-4 px-4 shadow-lg flex flex-col gap-4 z-50">
                <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-medium text-text-main dark:text-text-main-dark">Home</Link>
                <Link to="/journal" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-medium text-text-main dark:text-text-main-dark">Journal</Link>
                <Link to="/photography" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-medium text-text-main dark:text-text-main-dark">Photography</Link>
                <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-medium text-text-main dark:text-text-main-dark">About</Link>
                <Link to="/resources" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-medium text-text-main dark:text-text-main-dark">Resources</Link>
                <Link to="/login" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-medium text-primary">Admin Login</Link>
            </div>
          )}
        </header>

        <main className="flex-grow">
          {children}
        </main>

        {/* Footer */}
        <footer className="mt-16 md:mt-24 border-t border-solid border-surface-light dark:border-surface-dark pt-8 pb-8 bg-background-light dark:bg-background-dark transition-colors duration-300">
          <div className="max-w-[1200px] mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-6">
            <div className="flex gap-6 text-text-sub dark:text-text-sub-dark">
              <a href="#" className="hover:text-primary transition-colors">Twitter</a>
              <a href="#" className="hover:text-primary transition-colors">Instagram</a>
              <a href="#" className="hover:text-primary transition-colors">RSS</a>
            </div>
            <div className="text-sm text-text-sub dark:text-text-sub-dark flex items-center gap-4">
              <span>© 2024 Kelvin Kyando</span>
              <span className="text-surface-light dark:text-surface-dark">|</span>
              <Link to="/login" className="hover:text-primary transition-colors">Admin Access</Link>
            </div>
          </div>
        </footer>

      </div>
    </div>
  );
};

export default Layout;