
import React from 'react';
import MetricCard from './MetricCard';

const HeroSection = ({ metrics }) => {
  return (
    <div className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Saugat Sharma</h1>
          <p className="text-2xl mb-8 text-indigo-100">
            Full Stack Engineer | Architect | Scalable System Expert
          </p>
          <p className="text-2xl mb-8 text-indigo-100">
            3 Years of Innovation in Enterprise Software Architecture
          </p>
          {/* Key Metrics */}
          <MetricCard metrics={metrics} />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;