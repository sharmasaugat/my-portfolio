import { Code, GitBranch, Database } from 'lucide-react';
import { AreaChart as AreaChartIcon, LineChart as LineChartIcon, BarChart3 as BarChartIcon } from 'lucide-react';
import { 
  AreaChart, LineChart, BarChart,
  Area, Line, Bar
} from 'recharts';

export const engineeringMetrics = [
  {
    name: 'Code Quality',
    icon: Code,
    highlight: '85%',
    trend: '+15%',
    dataKey: 'codeQuality',
    color: '#64FFDA',
    details: [
      { label: 'Code Coverage', value: '85%' },
      { label: 'Bug Rate', value: '1.5%' },
      { label: 'Technical Debt', value: 'Medium' },
      { label: 'Code Reviews', value: '100%' }
    ],
    kpis: [
      { label: 'Maintainability', value: '85%' },
      { label: 'Security Score', value: '90%' },
      { label: 'Performance', value: '88%' }
    ],
    achievements: [
      'Implemented caching solutions improving response times by 40%',
      'Created automated test suites with 85% coverage',
      'Established coding standards for cloud migration',
      'Achieved consistent code review participation'
    ]
  },
  {
    name: 'Git Activity',
    icon: GitBranch,
    highlight: '1.2K',
    trend: '+8%',
    dataKey: 'commits',
    color: '#818CF8',
    details: [
      { label: 'Pull Requests', value: '200+' },
      { label: 'Code Reviews', value: '250+' },
      { label: 'Merge Rate', value: '92%' },
      { label: 'Branches', value: '100+' }
    ],
    kpis: [
      { label: 'Merge Success', value: '95%' },
      { label: 'Deploy Speed', value: '25m' },
      { label: 'Branch Health', value: '92%' }
    ],
    achievements: [
      'Developed efficient data migration scripts',
      'Maintained clean git history for cloud migration',
      'Regular participation in code reviews',
      'Implemented feature branching strategy'
    ]
  },
  {
    name: 'System Design',
    icon: Database,
    highlight: '99.5%',
    trend: '+1.5%',
    dataKey: 'uptime',
    color: '#F472B6',
    details: [
      { label: 'Services Built', value: '15+' },
      { label: 'APIs Designed', value: '25+' },
      { label: 'Data Sources', value: '15+' },
      { label: 'Cloud Platform', value: 'Azure/AWS' }
    ],
    kpis: [
      { label: 'System Uptime', value: '99.5%' },
      { label: 'Response Time', value: '<200ms' },
      { label: 'Error Rate', value: '<0.5%' }
    ],
    achievements: [
      'Built data pipeline for maritime analytics',
      'Optimized database queries by 35%',
      'Integrated 15+ data sources for PowerBI',
      'Maintained maritime compliance standards'
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
  { year: '2020', codeQuality: 85, commits: 1200, uptime: 98.5, baseline: 70 },
  { year: '2021', codeQuality: 88, commits: 1800, uptime: 99.0, baseline: 75 },
  { year: '2022', codeQuality: 92, commits: 2200, uptime: 99.5, baseline: 80 },
  { year: '2023', codeQuality: 95, commits: 2500, uptime: 99.9, baseline: 85 }
];