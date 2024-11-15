import { FiCode, FiUsers, FiServer } from 'react-icons/fi';
import { LineChart, BarChart2, TrendingUp } from 'lucide-react';
import { AreaChart, BarChart, LineChart as RechartsLineChart, Area, Bar, Line } from 'recharts';

export const engineeringMetrics = {
  deliveryImpact: {
    name: 'Engineering Impact',
    icon: FiCode,
    highlight: '99.9%',
    trend: '+25%',
    description: 'System Reliability',
    dataKey: 'codeQuality',
    color: '#64FFDA',
    details: [
      { label: 'System Uptime', value: '99.99%' },
      { label: 'CI/CD Pipeline', value: '< 15 mins' },
      { label: 'Code Coverage', value: '95%' },
      { label: 'Tech Debt Reduction', value: '60%' },
      { label: 'Deployment Frequency', value: '3x/week' },
      { label: 'Lead Time', value: '< 24 hours' }
    ],
    kpis: [
      { label: 'Production Incidents', value: '< 0.1%' },
      { label: 'MTTR', value: '< 30 mins' },
      { label: 'Feature Velocity', value: '+40%' }
    ]
  },
  clientSuccess: {
    name: 'Business Impact',
    icon: FiUsers,
    highlight: '$2.5M',
    trend: 'Cost Saved',
    description: 'Business Value',
    dataKey: 'satisfaction',
    color: '#FF61D3',
    details: [
      { label: 'System Performance', value: '+200%' },
      { label: 'API Response Time', value: '< 100ms' },
      { label: 'User Adoption', value: '+150%' },
      { label: 'Revenue Impact', value: '+35%' },
      { label: 'Scale Handled', value: '10M+ req/day' },
      { label: 'Cost Optimization', value: '-40%' }
    ],
    kpis: [
      { label: 'SLA Compliance', value: '99.9%' },
      { label: 'System Scalability', value: '10x' },
      { label: 'ROI Generated', value: '300%' }
    ]
  },
  technicalGrowth: {
    name: 'Technical Leadership',
    icon: FiServer,
    highlight: '15+',
    trend: 'Major Releases',
    description: 'Architecture & Innovation',
    dataKey: 'contributions',
    color: '#FFB86C',
    details: [
      { label: 'Microservices Built', value: '12+' },
      { label: 'Cloud Infrastructure', value: '3 Platforms' },
      { label: 'Team Mentored', value: '8 Engineers' },
      { label: 'Design Patterns', value: '15 Implemented' },
      { label: 'System Migrations', value: '4 Complete' },
      { label: 'Architecture Reviews', value: '20+ Led' }
    ],
    kpis: [
      { label: 'Systems Designed', value: '6+' },
      { label: 'Patents/Innovation', value: '2 Filed' },
      { label: 'Tech Stack Depth', value: '12 Core' }
    ]
  }
};

export const performanceData = [
  {
    year: '2021',
    codeQuality: 85,
    satisfaction: 88,
    contributions: 80,
    description: 'Full Stack Engineer'
  },
  {
    year: '2022',
    codeQuality: 92,
    satisfaction: 94,
    contributions: 88,
    description: 'Senior Engineer'
  },
  {
    year: '2023',
    codeQuality: 96,
    satisfaction: 97,
    contributions: 95,
    description: 'Tech Lead'
  },
  {
    year: '2024',
    codeQuality: 99,
    satisfaction: 98,
    contributions: 98,
    description: 'Senior Tech Lead'
  }
];

export const graphTypes = {
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
    component: RechartsLineChart,
    element: Line,
    icon: LineChart,
    label: 'Line View'
  }
};