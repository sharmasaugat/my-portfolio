import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { ResponsiveContainer, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import { graphTypes } from '../../data/metricsData';

const ChartContainer = ({ data, metric, activeGraph }) => {
  const { component: GraphComponent, element: DataElement, style: graphStyle } = graphTypes[activeGraph];
  const gradientId = useMemo(() => `gradient-${metric.dataKey}`, [metric.dataKey]);

  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <GraphComponent data={data} key={metric.dataKey}>
          {activeGraph === 'area' && (
            <defs>
              <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={metric.color} stopOpacity={1}/>
                <stop offset="95%" stopColor={metric.color} stopOpacity={0.6}/>
              </linearGradient>
            </defs>
          )}
          <CartesianGrid strokeDasharray="3 3" stroke="#1E293B" />
          <XAxis dataKey="year" stroke="#64748B" />
          <YAxis stroke="#64748B" />
          <Tooltip 
            contentStyle={{
              backgroundColor: '#1E293B',
              border: 'none',
              borderRadius: '8px'
            }}
          />
          {/* Base layer */}
          {activeGraph === 'area' && (
            <DataElement
              dataKey="baseline"
              type="monotone"
              stackId="1"
              stroke="none"
              fill="#1E293B"
              fillOpacity={0.6}
            />
          )}
          {/* Top layer */}
          <DataElement
            dataKey={metric.dataKey}
            stroke={activeGraph === 'area' ? 'none' : metric.color}
            fill={activeGraph === 'area' ? `url(#${gradientId})` : metric.color}
            fillOpacity={1}
            stackId={activeGraph === 'area' ? "1" : undefined}
            {...graphStyle}
          />
        </GraphComponent>
      </ResponsiveContainer>
    </div>
  );
};

ChartContainer.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  metric: PropTypes.shape({
    dataKey: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired
  }).isRequired,
  activeGraph: PropTypes.string.isRequired
};

export default ChartContainer;