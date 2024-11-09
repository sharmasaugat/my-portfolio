
import { FiGitCommit, FiUsers, FiCpu, FiCode, FiServer } from 'react-icons/fi';
import { TrendingUp, LineChart, BarChart2 } from 'lucide-react';
import { AreaChart, BarChart, LineChart as LineChartComponent, Area, Bar, Line } from 'recharts';

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
    component: LineChartComponent,
    element: Line,
    icon: LineChart,
    label: 'Line View'
  }
};

export const engineeringMetrics = {
  deliveryImpact: {
    name: 'Delivery Impact',
    icon: FiCode,
    highlight: '98.5%',
    trend: '+15%',
    description: 'Code Quality Score',
    dataKey: 'codeQuality',
    color: '#64FFDA',
    details: [
      { label: 'Zero-Bug Releases', value: '94%' },
      { label: 'First-Time Fix Rate', value: '92%' },
      { label: 'Code Review Coverage', value: '100%' },
      { label: 'Technical Debt', value: 'Reduced 40%' },
      { label: 'On-Time Delivery', value: '96%' },
      { label: 'Clean Code Principles', value: '95%' }
    ],
    kpis: [
      { label: 'Production Issues', value: '< 0.5%' },
      { label: 'Return Tickets', value: '2/mo avg' },
      { label: 'Sprint Goals Met', value: '95%' }
    ]
  },
  clientSuccess: {
    name: 'Client Success',
    icon: FiUsers,
    highlight: '4.8/5',
    trend: '+12%',
    description: 'Client Satisfaction',
    dataKey: 'satisfaction',
    color: '#FF61D3',
    details: [
      { label: 'Support Response', value: '< 2 hours' },
      { label: 'Issue Resolution', value: '< 24 hours' },
      { label: 'Client Meetings', value: '150+' },
      { label: 'Requirements Met', value: '98%' },
      { label: 'Feature Adoption', value: '92%' },
      { label: 'Client Retention', value: '100%' }
    ],
    kpis: [
      { label: 'CSAT Score', value: '94%' },
      { label: 'NPS Rating', value: '+65' },
      { label: 'Repeat Projects', value: '4' }
    ]
  },
  technicalGrowth: {
    name: 'Technical Growth',
    icon: FiServer,
    highlight: '35+',
    trend: 'Projects',
    description: 'Project Contributions',
    dataKey: 'contributions',
    color: '#FFB86C',
    details: [
      { label: 'Features Shipped', value: '120+' },
      { label: 'Technologies Used', value: '12' },
      { label: 'APIs Developed', value: '15+' },
      { label: 'Team Trainings', value: '8 Led' },
      { label: 'Documentation', value: '25+ Guides' },
      { label: 'Code Reviews', value: '500+' }
    ],
    kpis: [
      { label: 'Critical Fixes', value: '45+' },
      { label: 'Knowledge Shares', value: '12' },
      { label: 'Best Practices', value: '15 Added' }
    ]
  }
};

export const enhancedData = [
  {
    year: '2021',
    codeQuality: 82,
    satisfaction: 85,
    contributions: 75,
    description: 'Junior Developer'
  },
  {
    year: '2022',
    codeQuality: 88,
    satisfaction: 90,
    contributions: 85,
    description: 'Mid-Level Developer'
  },
  {
    year: '2023',
    codeQuality: 94,
    satisfaction: 95,
    contributions: 92,
    description: 'Senior Developer'
  },
  {
    year: '2024',
    codeQuality: 98,
    satisfaction: 96,
    contributions: 95,
    description: 'Technical Lead'
  }
];