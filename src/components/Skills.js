import React from 'react';
import './Skills.css';

const Skills = () => {
  const skills = [
    { name: 'HTML 5', percentage: 100 },
    { name: 'CSS 3', percentage: 90 },
    { name: 'JAVASCRIPT', percentage: 80 },
    { name: 'FIGMA', percentage: 50 },
    { name: 'REACT JS', percentage: 70 },
    { name: 'REACT NATIVE', percentage: 70 },
    { name: 'PHOTOSHOP', percentage: 70 }
  ];

  const leftColumnSkills = skills.slice(0, 4);
  const rightColumnSkills = skills.slice(4);

  return (
    <div className="skills-container">
      <div className="skills-header">
        <h2 className="skills-title">Skills</h2>
        <div className="title-underline"></div>
      </div>
      
      <p className="skills-description">
        I've developed various skills which helped my personal as well as professional career. Here are some skills I'm familiar with!
      </p>
      
      <div className="skills-content">
        <div className="skills-column">
          {leftColumnSkills.map((skill, index) => (
            <div key={index} className="skill-item">
              <div className="skill-header">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-percentage">{skill.percentage}%</span>
              </div>
              <div className="progress-bar">
                <div 
                  className="progress-fill" 
                  style={{ width: `${skill.percentage}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="skills-column">
          {rightColumnSkills.map((skill, index) => (
            <div key={index} className="skill-item">
              <div className="skill-header">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-percentage">{skill.percentage}%</span>
              </div>
              <div className="progress-bar">
                <div 
                  className="progress-fill" 
                  style={{ width: `${skill.percentage}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
