import React from 'react';
import { motion } from 'framer-motion';
import { engineeringMetrics } from '../../data/metricsData';
import { useMetricState } from '../../hooks/useMetricState';
import MetricsHeader from '../Metrics/MetricsHeader';
import MetricsView from '../Metrics/MetricsView';
import TrendsView from '../Metrics/TrendsView';

const EngineeringImpactSection = () => {
  const {
    activeView,
    activeMetric,
    showDetails,
    toggleDetails,
    activeGraph,
    setActiveGraph,
    setActiveView,
    setActiveMetric
  } = useMetricState();

  return (
    <section className="py-16 bg-[#0A192F]">
      <div className="container mx-auto px-4">
        <motion.div className="metrics-container">
          <MetricsHeader activeView={activeView} setActiveView={setActiveView} />
          <MetricsContent
            activeView={activeView}
            activeMetric={activeMetric}
            setActiveMetric={setActiveMetric}
            showDetails={showDetails}
            toggleDetails={toggleDetails}
            activeGraph={activeGraph}
            setActiveGraph={setActiveGraph}
          />
        </motion.div>
      </div>
    </section>
  );
};

const MetricsContent = ({ activeView, activeMetric, setActiveMetric, showDetails, toggleDetails, activeGraph, setActiveGraph }) => {
  if (activeView === 'metrics') {
    return (
      <MetricsView
        metrics={engineeringMetrics}
        activeMetric={activeMetric}
        setActiveMetric={setActiveMetric}
      />
    );
  }

  return (
    <TrendsView
      currentMetric={engineeringMetrics[activeMetric]}
      showDetails={showDetails}
      toggleDetails={toggleDetails}
      activeGraph={activeGraph}
      setActiveGraph={setActiveGraph}
    />
  );
};

export default EngineeringImpactSection;