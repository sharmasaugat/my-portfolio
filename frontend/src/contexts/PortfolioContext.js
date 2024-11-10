import React, { createContext, useContext } from 'react';
import PropTypes from 'prop-types';
import portfolioData from '../data/portfolioData';
import ErrorBoundary from '../components/Common/ErrorBoundary';

const PortfolioContext = createContext();

export const PortfolioProvider = ({ children }) => (
  <ErrorBoundary>
    <PortfolioContext.Provider value={portfolioData}>
      {children}
    </PortfolioContext.Provider>
  </ErrorBoundary>
);

PortfolioProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export const usePortfolio = () => {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error('usePortfolio must be used within a PortfolioProvider');
  }
  return context;
};