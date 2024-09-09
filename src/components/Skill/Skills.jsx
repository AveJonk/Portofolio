import React, { useState } from 'react';
import './Skills.css';
import { SKILLS } from '../../data'; // Pastikan SKILLS tersedia dalam file ini
import SkillsInfoCard from './SkillsInfoCard/SkillsInfoCard';
import SkillsCard from './SkillsCard/SkillsCard';

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState(SKILLS[0]); // State untuk selected skill di kiri
  const [activeSkill, setActiveSkill] = useState(null); // State untuk keterampilan yang aktif di kanan

  const handleSelectSkill = (data) => {
    setSelectedSkill(data);
    setActiveSkill(null); // Reset activeSkill saat skill di kiri berubah
  };

  const handleSkillClick = (skill) => {
    setActiveSkill(skill); // Mengatur keterampilan yang diklik sebagai aktif
  };

  const resetActiveSkill = () => {
    setActiveSkill(null); // Reset keterampilan aktif
  };

  return (
    <section className='skills-container'>
      <h5>Technical Proficiency</h5>

      <div className='skills-content'>
        <div className='skills'>
          {SKILLS.map((item) => (
            <SkillsCard
              key={item.title}
              iconUrl={item.icon}
              title={item.title}
              isActive={selectedSkill.title === item.title}
              onClick={() => handleSelectSkill(item)} // Properly call onClick
            />
          ))}
        </div>

        <div className='skills-info'>
          <SkillsInfoCard
            heading={selectedSkill.title}
            skills={selectedSkill.skills}
            activeSkill={activeSkill} // Meneruskan state activeSkill ke SkillsInfoCard
            handleSkillClick={handleSkillClick} // Meneruskan handler ke SkillsInfoCard
            resetActiveSkill={resetActiveSkill} // Meneruskan fungsi reset ke SkillsInfoCard
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
