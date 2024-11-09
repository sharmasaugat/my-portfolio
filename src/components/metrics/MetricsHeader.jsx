import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { FiGitCommit } from 'react-icons/fi';
import { Terminal, LineChart } from 'lucide-react';

const MetricsHeader = ({ activeView, setActiveView }) => (
  <div className="flex flex-col items-center mb-12">
    <div className="metric-badge inline-flex mb-4">
      <FiGitCommit className="w-4 h-4" />
      <span>Engineering Impact</span>
    </div>
    <h2 className="text-3xl font-bold text-white mb-6">
      Technical <span className="text-[#64FFDA]">Achievements</span>
    </h2>
    <div className="flex gap-4 p-1 bg-[#1E293B]/50 rounded-lg backdrop-blur-sm">
      <button
        onClick={() => setActiveView('metrics')}
        className={`form-tab ${activeView === 'metrics' ? 'active' : ''}`}
      >
        <Terminal className="w-5 h-5" />
        <span>Key Metrics</span>
      </button>
      <button
        onClick={() => setActiveView('trends')}
        className={`form-tab ${activeView === 'trends' ? 'active' : ''}`}
      >
        <LineChart className="w-5 h-5" />
        <span>Performance Trends</span>
      </button>
    </div>
  </div>
);

MetricsHeader.propTypes = {
  activeView: PropTypes.string.isRequired,
  setActiveView: PropTypes.func.isRequired
};

export default memo(MetricsHeader);