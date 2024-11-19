import { Code, GitBranch, Database } from 'lucide-react';
import { AreaChart as AreaChartIcon, LineChart as LineChartIcon, BarChart3 as BarChartIcon } from 'lucide-react';
import { 
  AreaChart, LineChart, BarChart,
  Area, Line, Bar
} from 'recharts';

export const engineeringMetrics = [
  {
    name: 'Authentication',
    icon: Code,
    highlight: '99.9%',
    trend: '+5%',
    dataKey: 'authRate',
    color: '#64FFDA',
    details: [
      { label: 'Auth Success', value: '99.9%' },
      { label: 'Response Time', value: '<100ms' },
      { label: 'Active Users', value: '500+' },
      { label: 'Security Score', value: '95%' }
    ],
    kpis: [
      { label: 'Token Valid Rate', value: '99.9%' },
      { label: 'SSO Success', value: '99.5%' },
      { label: 'Auth Uptime', value: '99.9%' }
    ],
    achievements: [
      'Implemented JWT authentication with Azure AD',
      'Developed NS login module with SSO capability',
      'Created role-based access control system',
      'Maintained high security standards'
    ]
  },
  {
    name: 'API Performance',
    icon: GitBranch,
    highlight: '45%↑',
    trend: '+15%',
    dataKey: 'apiPerf',
    color: '#818CF8',
    details: [
      { label: 'Response Time↓', value: '45%' },
      { label: 'Cache Hit Rate', value: '85%' },
      { label: 'API Endpoints', value: '50+' },
      { label: 'Daily Requests', value: '100K+' }
    ],
    kpis: [
      { label: 'API Success', value: '99.9%' },
      { label: 'Load Speed', value: '<200ms' },
      { label: 'Error Rate', value: '<0.1%' }
    ],
    achievements: [
      'Optimized chart data API responses',
      'Implemented efficient caching strategy',
      'Created high-performance endpoints',
      'Reduced dashboard load times'
    ]
  },
  {
    name: 'Chart Solutions',
    icon: Database,
    highlight: '25+',
    trend: '+12%',
    dataKey: 'charts',
    color: '#F472B6',
    details: [
      { label: 'Charts Built', value: '25+' },
      { label: 'Data Sources', value: '15+' },
      { label: 'Refresh Rate', value: '5min' },
      { label: 'Visual Types', value: '10+' }
    ],
    kpis: [
      { label: 'Chart Load↓', value: '45%' },
      { label: 'Data Accuracy', value: '99.9%' },
      { label: 'User Adoption', value: '95%' }
    ],
    achievements: [
      'Developed PowerBI chart integrations',
      'Created real-time data visualizations',
      'Built custom chart endpoints',
      'Optimized dashboard performance'
    ]
  }
];

export const graphTypes = {
  area: {
    component: AreaChart,
    element: Area,
    label: 'Stacked Area',
    icon: AreaChartIcon,
    style: { 
      type: "monotone",
      strokeWidth: 0,
      fillOpacity: 1,
      stackId: "1"
    }
  },
  line: {
    component: LineChart,
    element: Line,
    label: 'Curved Line',
    icon: LineChartIcon,
    style: { 
      type: "monotoneX",
      strokeWidth: 3,
      dot: false,
      activeDot: { r: 6 }
    }
  },
  bar: {
    component: BarChart,
    element: Bar,
    label: 'Bar',
    icon: BarChartIcon,
    style: { 
      radius: [4, 4, 0, 0],
      maxBarSize: 40
    }
  }
};

// Modify performance data to include baseline for stacked area
export const performanceData = [
  { year: '2020', authRate: 95, apiPerf: 75, charts: 5, baseline: 70 },
  { year: '2021', authRate: 98, apiPerf: 85, charts: 12, baseline: 75 },
  { year: '2022', authRate: 99.5, apiPerf: 92, charts: 18, baseline: 80 },
  { year: '2023', authRate: 99.9, apiPerf: 95, charts: 25, baseline: 85 }
];