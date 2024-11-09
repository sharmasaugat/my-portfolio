import React from 'react';
import { motion } from 'framer-motion';
import AnimatedValue from './AnimatedValue';

const MetricsList = ({ metrics = [] }) => {
  if (!metrics?.length) return null;

  return (
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
  );
};

export default MetricsList;