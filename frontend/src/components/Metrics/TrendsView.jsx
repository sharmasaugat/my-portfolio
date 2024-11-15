import React, { memo } from 'react';
import PropTypes from 'prop-types';
import MetricsDisplay from './MetricsDisplay';

const TrendsView = ({ currentMetric, showDetails, toggleDetails, activeGraph, setActiveGraph }) => {
  return (
    <MetricsDisplay
      metric={currentMetric}
      activeGraph={activeGraph}
      showDetails={showDetails}
      toggleDetails={toggleDetails}
      onGraphChange={setActiveGraph}
    />
  );
};

TrendsView.propTypes = {
  currentMetric: PropTypes.object.isRequired,
  showDetails: PropTypes.bool.isRequired,
  toggleDetails: PropTypes.func.isRequired,
  activeGraph: PropTypes.string.isRequired,
  setActiveGraph: PropTypes.func.isRequired
};

export default memo(TrendsView);