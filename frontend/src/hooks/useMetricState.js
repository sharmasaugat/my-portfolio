import { useState, useCallback } from 'react';

export const useMetricState = () => {
  const [state, setState] = useState({
    activeView: 'metrics',
    activeMetric: 0,
    showDetails: false,
    activeGraph: 'area',
    activeSection: 'kpis' // Add this new state
  });

  const setActiveMetric = useCallback((index) => {
    setState(prev => ({
      ...prev,
      activeMetric: index,
      showDetails: false // Reset details when metric changes
    }));
  }, []);

  const setActiveView = useCallback((view) => {
    setState(prev => ({ ...prev, activeView: view, showDetails: false }));
  }, []);

  const toggleDetails = useCallback(() => {
    setState(prev => ({ ...prev, showDetails: !prev.showDetails }));
  }, []);

  const setActiveGraph = useCallback((graph) => {
    setState(prev => ({ ...prev, activeGraph: graph }));
  }, []);

  const setActiveSection = useCallback((section) => {
    setState(prev => ({ ...prev, activeSection: section }));
  }, []);

  return {
    ...state,
    setActiveView,
    setActiveMetric,
    toggleDetails,
    setActiveGraph,
    setActiveSection
  };
};