import React, { useState, memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { ResponsiveContainer, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import { Terminal, LineChart as LineIcon } from 'lucide-react';
import { FiGitCommit } from 'react-icons/fi';
import { engineeringMetrics, performanceData, graphTypes } from '../../data/metricsData';

const MetricCard = memo(({ metric, isActive, onClick }) => (
  <motion.div
    className={`metric-summary-card ${isActive ? 'active' : ''}`}
    onClick={onClick}
    whileHover={{ scale: 1.02 }}
  >
    <metric.icon className="w-5 h-5" />
    <div>
      <h4 className="text-white font-medium">{metric.name}</h4>
      <div className="flex items-baseline gap-2">
        <span className="text-2xl font-bold text-[#64FFDA]">
          {metric.highlight}
        </span>
        <span className="text-green-400 text-sm">{metric.trend}</span>
      </div>
    </div>
  </motion.div>
));

MetricCard.propTypes = {
  metric: PropTypes.shape({
    name: PropTypes.string.isRequired,
    icon: PropTypes.elementType.isRequired,
    highlight: PropTypes.string.isRequired,
    trend: PropTypes.string.isRequired
  }).isRequired,
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
};

const MetricDetailsPanel = memo(({ metric }) => (
  <div className="metric-details-panel">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      {metric.kpis.map((kpi, index) => (
        <div key={index} className="kpi-card">
          <div className="text-sm text-gray-400">{kpi.label}</div>
          <div className="text-xl font-bold text-[#64FFDA]">{kpi.value}</div>
        </div>
      ))}
    </div>
    <div className="grid grid-cols-2 gap-4">
      {metric.details.map((detail, index) => (
        <div key={index} className="detail-item">
          <div className="text-sm text-gray-400">{detail.label}</div>
          <div className="text-md text-white">{detail.value}</div>
        </div>
      ))}
    </div>
    <div className="mt-4 p-4 bg-[#1E293B]/50 rounded-lg">
      <h4 className="text-[#64FFDA] mb-2">Key Achievements</h4>
      <ul className="space-y-2 text-sm text-gray-300">
        <li>• Reduced bug escape rate by 75% through improved testing practices</li>
        <li>• Mentored 4 junior developers in code quality and best practices</li>
        <li>• Streamlined deployment process reducing release time by 40%</li>
        <li>• Achieved highest client satisfaction score in team for 2023</li>
      </ul>
    </div>
  </div>
));

MetricDetailsPanel.propTypes = {
  metric: PropTypes.shape({
    details: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired
      })
    ).isRequired,
    kpis: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired
      })
    ).isRequired
  }).isRequired
};

const PerformanceMetrics = () => {
  const [activeView, setActiveView] = useState('metrics'); // 'metrics' or 'trends'
  const [activeMetric, setActiveMetric] = useState('performance');
  const [activeGraph, setActiveGraph] = useState('area');
  const [showDetails, setShowDetails] = useState(false);

  const CurrentGraphComponent = graphTypes[activeGraph].component;
  const CurrentDataElement = graphTypes[activeGraph].element;
  const CurrentIcon = engineeringMetrics[activeMetric]?.icon;

  useEffect(() => {
    if (!engineeringMetrics[activeMetric]) {
      setActiveMetric(Object.keys(engineeringMetrics)[0]);
    }
  }, [activeMetric]);

  return (
    <section className="py-24 bg-[#0A192F]">
      <div className="container mx-auto px-4">
        <motion.div className="metrics-container">
          <div className="flex flex-col items-center mb-12">
            <div className="metric-badge inline-flex mb-4">
              <FiGitCommit className="w-4 h-4" />
              <span>Engineering Impact</span>
            </div>
            <h2 className="text-3xl font-bold text-white mb-6">
              Technical <span className="text-[#64FFDA]">Achievements</span>
            </h2>
            
            {/* Tab Navigation */}
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
                <LineIcon className="w-5 h-5" />
                <span>Performance Trends</span>
              </button>
            </div>
          </div>

          {activeView === 'metrics' ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(engineeringMetrics).map(([key, metric]) => (
                <MetricCard
                  key={key}
                  metric={metric}
                  isActive={activeMetric === key}
                  onClick={() => setActiveMetric(key)}
                />
              ))}
            </div>
          ) : (
            <div className="metrics-display-panel">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  {CurrentIcon && <CurrentIcon className="w-6 h-6 text-[#64FFDA]" />}
                  <h3 className="text-xl font-medium text-white">
                    {engineeringMetrics[activeMetric]?.name}
                  </h3>
                </div>
                <button
                  onClick={() => setShowDetails(!showDetails)}
                  className="details-toggle-btn"
                >
                  {showDetails ? 'Hide Details' : 'Show Details'}
                </button>
              </div>

              {showDetails && engineeringMetrics[activeMetric] && (
                <MetricDetailsPanel metric={engineeringMetrics[activeMetric]} />
              )}

              <div className="flex justify-end gap-2 mb-6">
                {Object.entries(graphTypes).map(([type, { icon: Icon, label }]) => (
                  <button
                    key={type}
                    onClick={() => setActiveGraph(type)}
                    className={`graph-type-btn ${activeGraph === type ? 'active' : ''}`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{label}</span>
                  </button>
                ))}
              </div>
              
              <div className="h-[400px]">
                <ResponsiveContainer>
                  <CurrentGraphComponent data={performanceData}>
                    <defs>
                      <linearGradient id={`colorGradient-${activeMetric}`} x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor={engineeringMetrics[activeMetric]?.color} stopOpacity={0.3}/>
                        <stop offset="95%" stopColor={engineeringMetrics[activeMetric]?.color} stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                    <XAxis dataKey="year" stroke="#64FFDA" tick={{ fill: '#94A3B8' }} />
                    <YAxis stroke="#64FFDA" tick={{ fill: '#94A3B8' }} />
                    <Tooltip 
                      contentStyle={{
                        background: 'rgba(15, 23, 42, 0.9)',
                        border: '1px solid rgba(100, 255, 218, 0.2)',
                        borderRadius: '8px'
                      }}
                    />
                    <CurrentDataElement
                      type="monotone"
                      dataKey={engineeringMetrics[activeMetric]?.dataKey}
                      stroke={engineeringMetrics[activeMetric]?.color}
                      fill={`url(#colorGradient-${activeMetric})`}
                    />
                  </CurrentGraphComponent>
                </ResponsiveContainer>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default memo(PerformanceMetrics);