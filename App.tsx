import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Journal from './pages/Journal';
import Photography from './pages/Photography';
import About from './pages/About';
import Resources from './pages/Resources';
import Login from './pages/Login';
import Admin from './pages/Admin';
import Layout from './components/Layout';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        {/* Public Routes wrapped in Main Layout */}
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/journal" element={<Layout><Journal /></Layout>} />
        <Route path="/photography" element={<Layout><Photography /></Layout>} />
        <Route path="/about" element={<Layout><About /></Layout>} />
        <Route path="/resources" element={<Layout><Resources /></Layout>} />
        
        {/* Standalone Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </HashRouter>
  );
};

export default App;