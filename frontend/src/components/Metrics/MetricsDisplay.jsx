import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts';
import { performanceData, graphTypes } from '../../data/metricsData';

const MetricsDisplay = ({ metric, activeGraph }) => {
  const CurrentGraphComponent = graphTypes[activeGraph].component;
  const CurrentDataElement = graphTypes[activeGraph].element;

  return (
    <div className="metrics-display-panel">
      <div className="h-[300px] w-full">
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
  activeGraph: PropTypes.oneOf(['area', 'bar', 'line']).isRequired
};

export default memo(MetricsDisplay);