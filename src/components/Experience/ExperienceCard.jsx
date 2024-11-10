import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import AnimatedValue from '../Common/AnimatedValue';
import { motion } from 'framer-motion';

const ExperienceCard = ({ company, period, position, achievements, metrics }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <motion.div 
            className="experience-card"
            whileHover={{ scale: 1.02 }}
        >
            <div className="card-header">
                <div className="company-info">
                    <h3>{company}</h3>
                    <p className="position">{position}</p>
                    <p className="period">{period}</p>
                </div>
                <motion.button 
                    className="expand-btn"
                    whileHover={{ scale: 1.1 }}
                    onClick={() => setIsExpanded(!isExpanded)}
                >
                    {isExpanded ? 'Show Less' : 'Show More'}
                </motion.button>
            </div>

            <div className="metrics-grid">
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
        </motion.div>
    );
};

export default ExperienceCard;
