import React from 'react';
import './SkillsInfoCard.css';

const SkillsInfoCard = ({ heading, skills, activeSkill, handleSkillClick, resetActiveSkill, description }) => {
  return (
    <div className='skills-info-card'>
      <h6>{heading}</h6>

      <div className='skills-info-content'>
        {activeSkill ? (
          <div className='skill-description'>
            <h1>{activeSkill.skill}</h1>
            <p>{activeSkill.description}</p>
            <button onClick={resetActiveSkill}>Kembali</button>
          </div>
        ) : (
          skills.map((item, index) => (
            <React.Fragment key={`skill_${index}`}>
              <div className='skill-info' onClick={() => handleSkillClick(item)} style={{ cursor: 'pointer' }}>
                <p>{item.skill}</p>
                <p className='percentage'>{item.percentage}</p>
              </div>

              <div className='skill-progress-bg'>
                <div className='skill-progress' style={{ width: item.percentage }} />
              </div>
            </React.Fragment>
          ))
        )}
      </div>
    </div>
  );
};

export default SkillsInfoCard;
