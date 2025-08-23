import React from 'react';
import Skills from './Skills';

const SkillsPage = () => {
  console.log('SkillsPage component is rendering');
  
  return (
    <div style={{ 
      backgroundColor: '#ffffff', 
      minHeight: '100vh', 
      padding: '40px 20px',
      color: '#333'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h1 style={{ textAlign: 'center', marginBottom: '30px', color: '#1e3a8a' }}>
          My Skills
        </h1>
        <Skills />
      </div>
    </div>
  );
};

export default SkillsPage;
