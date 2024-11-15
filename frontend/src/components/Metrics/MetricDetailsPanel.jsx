import React, { memo } from 'react';
import PropTypes from 'prop-types';

const MetricDetailsPanel = ({ metric }) => {
  return (
    <div className="metric-details-panel">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {metric.kpis.map((kpi, index) => (
          <div key={index} className="kpi-card">
            <div className="text-sm text-gray-400">{kpi.label}</div>
            <div className="text-xl font-bold" style={{ color: metric.color }}>{kpi.value}</div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-4 mb-4">
        {metric.details.map((detail, index) => (
          <div key={index} className="detail-item">
            <div className="text-sm text-gray-400">{detail.label}</div>
            <div className="text-md text-white">{detail.value}</div>
          </div>
        ))}
      </div>
      <div className="mt-4 p-4 bg-[#1E293B]/50 rounded-lg">
        <h4 style={{ color: metric.color }} className="mb-2">Key Achievements</h4>
        <ul className="space-y-2 text-sm text-gray-300">
          {metric.achievements.map((achievement, index) => (
            <li key={index}>• {achievement}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

MetricDetailsPanel.propTypes = {
  metric: PropTypes.shape({
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    details: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired
      })
    ).isRequired,
    kpis: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired
      })
    ).isRequired,
    achievements: PropTypes.arrayOf(
      PropTypes.string.isRequired
    ).isRequired
  }).isRequired
};

export default memo(MetricDetailsPanel);