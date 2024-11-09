import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts';
import { performanceData } from '../../config/metricsConfig';

const MetricsDisplay = ({ metric, activeGraph, setActiveGraph, showDetails, toggleDetails, graphTypes }) => {
  const CurrentGraphComponent = graphTypes[activeGraph].component;
  const CurrentDataElement = graphTypes[activeGraph].element;

  return (
    <div className="metrics-display-panel">
      <div className="h-[400px] w-full">
        <ResponsiveContainer>
          <CurrentGraphComponent data={performanceData}>
            <CurrentDataElement 
              type="monotone" 
              dataKey={metric.dataKey} 
              stroke={metric.color} 
              fill={metric.color} 
            />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
          </CurrentGraphComponent>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

MetricsDisplay.propTypes = {
  metric: PropTypes.shape({
    dataKey: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired
  }).isRequired,
  activeGraph: PropTypes.oneOf(['area', 'bar', 'line']).isRequired,
  setActiveGraph: PropTypes.func.isRequired,
  showDetails: PropTypes.bool,
  toggleDetails: PropTypes.func,
  graphTypes: PropTypes.object.isRequired
};

export default memo(MetricsDisplay);