import { useState } from 'react';

export const usePerformanceMetrics = () => {
  const [activeView, setActiveView] = useState('metrics');
  const [activeMetric, setActiveMetric] = useState('deliveryImpact');
  const [activeGraph, setActiveGraph] = useState('area');

  return {
    activeView,
    setActiveView,
    activeMetric,
    setActiveMetric,
    activeGraph,
    setActiveGraph
  };
};