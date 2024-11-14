import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedValue from '../Common/AnimatedValue';

const ExperienceCard = ({ company, period, position, achievements, metrics }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      className="experience-card"
      whileHover={{ scale: 1.02 }}
    >
      <div className="card-header flex flex-col sm:flex-row sm:justify-between sm:items-center">
        <div className="company-info">
          <h3 className="text-xl font-bold">{company}</h3>
          <p className="position text-gray-600">{position}</p>
          <p className="period text-gray-500">{period}</p>
        </div>
        <motion.button
          className="expand-btn mt-4 sm:mt-0"
          whileHover={{ scale: 1.1 }}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? 'Show Less' : 'Show More'}
        </motion.button>
      </div>

      <div className="metrics-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
        {metrics.map((metric, index) => (
          <motion.div
            key={index}
            className="metric-item"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <AnimatedValue value={metric.value} suffix={metric.suffix} />
            <span className="metric-label">{metric.label}</span>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="achievements-list overflow-hidden mt-4"
        initial={false}
        animate={{
          height: isExpanded ? 'auto' : 0,
          opacity: isExpanded ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="achievements-container flex flex-col gap-2">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              className="achievement-item flex items-start gap-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: isExpanded ? 1 : 0, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <ChevronRight className="achievement-icon mt-1" size={16} />
              <p className="achievement-text">{achievement}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

ExperienceCard.propTypes = {
  company: PropTypes.string.isRequired,
  period: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  achievements: PropTypes.arrayOf(PropTypes.string).isRequired,
  metrics: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.number.isRequired,
      suffix: PropTypes.string,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ExperienceCard;