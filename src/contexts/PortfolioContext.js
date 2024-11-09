import React, { createContext, useContext, useMemo, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { portfolioConfig } from '../data/portfolioConfig';
import ErrorBoundary from '../components/common/ErrorBoundary';
import Loading from '../components/common/Loading';
import { loadPortfolioData } from '../data/loadPortfolioData';

const PortfolioContext = createContext();

export const PortfolioProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const value = useMemo(() => ({
    ...portfolioConfig,
    isLoading,
    error
  }), [isLoading, error]);

  useEffect(() => {
    loadPortfolioData()
      .catch(err => setError(err))
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) return <Loading />;

  return (
    <ErrorBoundary>
      <PortfolioContext.Provider value={value}>
        {children}
      </PortfolioContext.Provider>
    </ErrorBoundary>
  );
};

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