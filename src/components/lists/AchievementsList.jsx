import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const AchievementsList = ({ achievements = [], isExpanded = false }) => {
  if (!achievements?.length) return null;

  return (
    <motion.div
      className="achievements-list"
      initial={false}
      animate={{ 
        height: isExpanded ? 'auto' : 0,
        opacity: isExpanded ? 1 : 0
      }}
      transition={{ duration: 0.3 }}
    >
      <div className="achievements-container">
        {achievements.map((achievement, index) => (
          <motion.div
            key={index}
            className="achievement-item"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: isExpanded ? 1 : 0, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <ChevronRight className="achievement-icon" size={16} />
            <p className="achievement-text">{achievement}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default AchievementsList;