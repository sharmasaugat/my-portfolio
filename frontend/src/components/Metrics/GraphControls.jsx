
import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { graphTypes } from '../../data/metricsData';

const GraphControls = ({ activeGraph, onGraphChange }) => (
  <div className="flex justify-end gap-2 mb-6">
    {Object.entries(graphTypes).map(([type, { icon: Icon, label }]) => (
      <button
        key={type}
        onClick={() => onGraphChange(type)}
        className={`graph-type-btn ${activeGraph === type ? 'active' : ''}`}
      >
        <Icon className="w-4 h-4" />
        <span>{label}</span>
      </button>
    ))}
  </div>
);

GraphControls.propTypes = {
  activeGraph: PropTypes.string.isRequired,
  onGraphChange: PropTypes.func.isRequired
};

export default memo(GraphControls);