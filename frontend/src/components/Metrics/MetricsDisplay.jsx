import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { performanceData } from '../../data/metricsData';
import MetricDetailsPanel from './MetricDetailsPanel';
import GraphControls from './GraphControls';
import ChartContainer from './ChartContainer';

const MetricsDisplay = ({ metric, activeGraph, showDetails, toggleDetails, onGraphChange }) => {
  return (
    <div className="metrics-display-panel">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <metric.icon className="w-6 h-6" style={{ color: metric.color }} />
          <h3 className="text-xl font-medium text-white">{metric.name}</h3>
        </div>
        <button 
          onClick={toggleDetails} 
          className="px-3 py-1 text-sm rounded-md transition-colors duration-200 bg-[#1E293B] hover:bg-[#2D3F59] text-gray-300 hover:text-white"
        >
          {showDetails ? 'Hide Details' : 'Show Details'}
        </button>
      </div>
      {showDetails && <MetricDetailsPanel metric={metric} />}
      <GraphControls activeGraph={activeGraph} onGraphChange={onGraphChange} />
      <ChartContainer data={performanceData} metric={metric} activeGraph={activeGraph} />
    </div>
  );
};

MetricsDisplay.propTypes = {
  metric: PropTypes.shape({
    name: PropTypes.string.isRequired,
    icon: PropTypes.elementType.isRequired,
    dataKey: PropTypes.string.isRequired,
    details: PropTypes.array.isRequired,
    kpis: PropTypes.array.isRequired,
    achievements: PropTypes.array.isRequired,
    color: PropTypes.string.isRequired
  }).isRequired,
  activeGraph: PropTypes.oneOf(['area', 'line', 'bar']).isRequired,
  showDetails: PropTypes.bool.isRequired,
  toggleDetails: PropTypes.func.isRequired,
  onGraphChange: PropTypes.func.isRequired
};

export default memo(MetricsDisplay);