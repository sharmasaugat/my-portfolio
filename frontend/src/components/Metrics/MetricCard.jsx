import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const MetricCard = ({ metric, isActive, onClick }) => (
  <motion.div
    className={`metric-summary-card ${isActive ? 'active' : ''}`}
    onClick={onClick}
    whileHover={{ scale: 1.02 }}
    style={{ borderColor: isActive ? metric.color : 'transparent' }}
  >
    <metric.icon style={{ color: metric.color }} className="w-5 h-5" />
    <div>
      <h4 className="text-white font-medium">{metric.name}</h4>
      <div className="flex items-baseline gap-2">
        <span style={{ color: metric.color }} className="text-2xl font-bold">{metric.highlight}</span>
        <span className="text-green-400 text-sm">{metric.trend}</span>
      </div>
    </div>
  </motion.div>
);

MetricCard.propTypes = {
  metric: PropTypes.shape({
    name: PropTypes.string.isRequired,
    icon: PropTypes.elementType.isRequired,
    highlight: PropTypes.string.isRequired,
    trend: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired
  }).isRequired,
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
};

export default memo(MetricCard);