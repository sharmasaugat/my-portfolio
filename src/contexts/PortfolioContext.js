
import { createContext, useContext, useMemo } from 'react';
import { experiences, performanceData, skills, metrics } from '../data/portfolioData';

const PortfolioContext = createContext();

export const PortfolioProvider = ({ children }) => {
  const value = useMemo(() => ({
    experiences,
    performanceData,
    skills,
    metrics
  }), []);

  return (
    <PortfolioContext.Provider value={value}>
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolio = () => {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error('usePortfolio must be used within a PortfolioProvider');
  }
  return context;
};