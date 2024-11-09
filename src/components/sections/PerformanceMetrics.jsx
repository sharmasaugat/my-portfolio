import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AreaChart, BarChart, LineChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Area, Bar, Line, CartesianGrid } from 'recharts';
import { Terminal, LineChart as LineIcon, BarChart2, TrendingUp, GitBranch } from 'lucide-react';

const data = [
  {
    year: '2019',
    technicalDebt: 35,
    systemUptime: 99.1,
    incidentResolution: 85,
    deploymentFrequency: 12
  },
  {
    year: '2020',
    technicalDebt: 28,
    systemUptime: 99.5,
    incidentResolution: 90,
    deploymentFrequency: 24
  },
  {
    year: '2021',
    technicalDebt: 20,
    systemUptime: 99.8,
    incidentResolution: 94,
    deploymentFrequency: 48
  },
  {
    year: '2022',
    technicalDebt: 15,
    systemUptime: 99.9,
    incidentResolution: 97,
    deploymentFrequency: 72
  },
  {
    year: '2023',
    technicalDebt: 8,
    systemUptime: 99.95,
    incidentResolution: 99,
    deploymentFrequency: 96
  }
];

const metrics = {
  performance: {
    name: 'System Performance',
    icon: Terminal,
    highlight: '99.95%',
    trend: '+0.85%',
    description: 'System Uptime',
    dataKey: 'systemUptime',
    color: '#64FFDA',
    details: [
      { label: 'Response Time', value: '< 100ms' },
      { label: 'Error Rate', value: '0.001%' },
      { label: 'Availability', value: '99.95%' }
    ]
  },
  deployment: {
    name: 'Deployment Frequency',
    icon: BarChart2,
    highlight: '96/mo',
    trend: '+200%',
    description: 'Monthly Deployments',
    dataKey: 'deploymentFrequency',
    color: '#48BEFF',
    details: [
      { label: 'Success Rate', value: '99.9%' },
      { label: 'Rollback Rate', value: '0.1%' },
      { label: 'Lead Time', value: '< 1 hour' }
    ]
  },
  codeQuality: {
    name: 'Code Quality',
    icon: LineIcon,
    highlight: '92%',
    trend: '+15%',
    description: 'Code Coverage',
    dataKey: 'technicalDebt',
    color: '#9F7AEA',
    details: [
      { label: 'Tech Debt', value: '8%' },
      { label: 'Test Coverage', value: '92%' },
      { label: 'Code Duplication', value: '< 3%' }
    ]
  }
};

const graphTypes = {
  area: {
    component: AreaChart,
    element: Area,
    icon: TrendingUp,
    label: 'Area View'
  },
  bar: {
    component: BarChart,
    element: Bar,
    icon: BarChart2,
    label: 'Bar View'
  },
  line: {
    component: LineChart,
    element: Line,
    icon: LineIcon,
    label: 'Line View'
  }
};

const PerformanceMetrics = () => {
  const [activeMetric, setActiveMetric] = useState('performance');
  const [activeGraph, setActiveGraph] = useState('area');

  const GraphComponent = graphTypes[activeGraph].component;
  const DataElement = graphTypes[activeGraph].element;

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <motion.div 
          className="metrics-container"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <div className="flex justify-between items-start mb-12">
            <div>
              <div className="metric-badge inline-flex mb-4">
                <GitBranch className="w-4 h-4" />
                <span>Performance Analysis</span>
              </div>
              <h2 className="text-3xl font-bold text-white mb-2">
                System <span className="text-[#64FFDA]">Metrics</span>
              </h2>
              <p className="text-gray-400">Real-time performance indicators and trends</p>
            </div>
            
            <div className="flex gap-2">
              {Object.entries(graphTypes).map(([type, { icon: Icon, label }]) => (
                <button
                  key={type}
                  onClick={() => setActiveGraph(type)}
                  className={`graph-type-btn ${activeGraph === type ? 'active' : ''}`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="hidden md:inline">{label}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Main Chart Card */}
            <div className="lg:col-span-2">
              <motion.div 
                className="metrics-card"
                key={`${activeMetric}-${activeGraph}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <div className="card-header">
                  <h3 className="text-lg font-medium text-white">
                    {metrics[activeMetric].name} Trends
                  </h3>
                  <span className="text-[#64FFDA]">{metrics[activeMetric].highlight}</span>
                </div>
                
                <div className="h-[400px]">
                  <ResponsiveContainer>
                    <GraphComponent data={data}>
                      <defs>
                        <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor={metrics[activeMetric].color} stopOpacity={0.3}/>
                          <stop offset="95%" stopColor={metrics[activeMetric].color} stopOpacity={0}/>
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
                      <DataElement
                        type="monotone"
                        dataKey={metrics[activeMetric].dataKey}
                        stroke={metrics[activeMetric].color}
                        fill="url(#colorGradient)"
                      />
                    </GraphComponent>
                  </ResponsiveContainer>
                </div>
              </motion.div>
            </div>

            {/* Metrics Cards */}
            <div className="space-y-6">
              {Object.entries(metrics).map(([key, metric]) => (
                <motion.div
                  key={key}
                  className={`metric-summary-card ${activeMetric === key ? 'active' : ''}`}
                  onClick={() => setActiveMetric(key)}
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
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PerformanceMetrics;