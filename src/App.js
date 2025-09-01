import React, { useState } from 'react';
import './App.css';
import Drawer from './components/Drawer';
import Aboutus from './components/Aboutus';
import SkillsPage from './components/SkillsPage';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Contact from './components/Contact';
import Gallery from './components/Gallery';

function App() {
  const [currentPage, setCurrentPage] = useState('about');

  const handlePageChange = (page) => {
    console.log('Changing page to:', page);
    setCurrentPage(page);
  };

  const renderPage = () => {
    console.log('Rendering page:', currentPage);
    switch (currentPage) {
      case 'about':
        return <Aboutus />;
      case 'skills':
        return <SkillsPage />;
      case 'gallery':
        return <Gallery />;
      case 'resume':
        return <Resume />;
      case 'portfolio':
        return <Portfolio />;
      case 'services':
        return <Services />;
      case 'contact':
        return <Contact />;
      default:
        return <Aboutus />;
    }
  };

  const getMainStyle = () => {
    if (currentPage === 'skills' || currentPage === 'gallery' || currentPage === 'resume' || currentPage === 'portfolio' || currentPage === 'services' || currentPage === 'contact') {
      return { flex: 1, padding: '0', color: '#333' };
    }
    return { flex: 1, padding: '24px', color: '#e6f0ff' };
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: currentPage === 'skills' || currentPage === 'gallery' || currentPage === 'resume' || currentPage === 'portfolio' || currentPage === 'services' || currentPage === 'contact' ? '#ffffff' : '#0e1627' }}>
      <Drawer onPageChange={handlePageChange} currentPage={currentPage} />
      <main style={getMainStyle()}>
        {renderPage()}
      </main>
    </div>
  );
}

export default App;
