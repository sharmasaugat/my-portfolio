import React, { memo } from 'react';
import PropTypes from 'prop-types';
import MetricCard from './MetricCard';

const MetricsView = ({ metrics, activeMetric, setActiveMetric }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {metrics.map((metric, index) => (
      <MetricCard
        key={index}
        metric={metric}
        isActive={index === activeMetric}
        onClick={() => setActiveMetric(index)}
      />
    ))}
  </div>
);

MetricsView.propTypes = {
  metrics: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      icon: PropTypes.elementType.isRequired,
      highlight: PropTypes.string.isRequired,
      trend: PropTypes.string.isRequired
    })
  ).isRequired,
  activeMetric: PropTypes.number.isRequired,
  setActiveMetric: PropTypes.func.isRequired
};

export default memo(MetricsView);