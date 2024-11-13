import React, { useState, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types';
import { radarSkills } from '../../data/SkillData';

const SkillDetail = memo(({ detail, index }) => (
  <motion.li
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: index * 0.1 }}
    className="flex items-center gap-2 text-sm"
  >
    <span className="w-1.5 h-1.5 bg-white rounded-full" />
    {detail}
  </motion.li>
));

SkillDetail.propTypes = {
  detail: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

const SkillCard = memo(({ skill, index, isActive, onToggle }) => {
  const Icon = skill.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="terminal-container backdrop-blur-lg bg-white/10"
      style={{ minHeight: '280px' }}
    >
      <div className="terminal-header">
        <div className="terminal-controls">
          <div className="control close"></div>
          <div className="control minimize"></div>
          <div className="control maximize"></div>
        </div>
        <div className="terminal-title font-mono text-sm">{skill.subject}.js</div>
      </div>
      
      <div 
        className={`terminal-content bg-gradient-to-br ${skill.color} h-full backdrop-blur-xl`}
        onClick={onToggle}
      >
        <div className="flex items-center gap-3 mb-4">
          <Icon className="w-6 h-6" /> {/* Render icon as element with props */}
          <h3 className="text-lg font-semibold">{skill.subject}</h3>
        </div>
        
        <div className="w-full bg-black/20 rounded-full h-2 mb-4">
          <motion.div
            className="bg-white rounded-full h-2"
            initial={{ width: 0 }}
            animate={{ width: `${skill.level}%` }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </div>

        <AnimatePresence>
          {isActive && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
            >
              <ul className="space-y-2">
                {skill.details.map((detail, i) => (
                  <SkillDetail key={detail} detail={detail} index={i} />
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
});

SkillCard.propTypes = {
  skill: PropTypes.shape({
    subject: PropTypes.string.isRequired,
    level: PropTypes.number.isRequired,
    icon: PropTypes.elementType.isRequired,
    details: PropTypes.arrayOf(PropTypes.string).isRequired,
    color: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
  isActive: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
};

const SkillsRadar = () => {
  const [activeSkill, setActiveSkill] = useState(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {radarSkills.map((skill, index) => (
        <SkillCard
          key={skill.subject}
          skill={skill}
          index={index}
          isActive={activeSkill === index}
          onToggle={() => setActiveSkill(activeSkill === index ? null : index)}
        />
      ))}
    </div>
  );
};

export default memo(SkillsRadar);
