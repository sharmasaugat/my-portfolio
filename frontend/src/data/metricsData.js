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
    highlight: '95%',
    trend: '+5%',
    dataKey: 'codeQuality',
    color: '#64FFDA',
    details: [
      { label: 'Code Coverage', value: '95%' },
      { label: 'Bug Rate', value: '0.5%' },
      { label: 'Technical Debt', value: 'Low' },
      { label: 'Code Reviews', value: '100%' }
    ],
    kpis: [
      { label: 'Maintainability', value: '95%' },
      { label: 'Security Score', value: '98%' },
      { label: 'Performance', value: '92%' }
    ],
    achievements: [
      'Reduced bug escape rate by 75% through improved testing practices',
      'Mentored 4 junior developers in code quality and best practices',
      'Streamlined deployment process reducing release time by 40%',
      'Achieved highest client satisfaction score in team for 2023'
    ]
  },
  {
    name: 'Git Activity',
    icon: GitBranch,
    highlight: '2.5K',
    trend: '+12%',
    dataKey: 'commits',
    color: '#818CF8',
    details: [
      { label: 'Pull Requests', value: '450+' },
      { label: 'Code Reviews', value: '500+' },
      { label: 'Merge Rate', value: '95%' },
      { label: 'Branches', value: '200+' }
    ],
    kpis: [
      { label: 'Merge Success', value: '98%' },
      { label: 'Deploy Speed', value: '15m' },
      { label: 'Branch Health', value: '96%' }
    ],
    achievements: [
      'Implemented CI/CD pipeline reducing deployment time by 70%',
      'Automated code review process saving 10+ hours per week',
      'Achieved zero failed deployments for 6 months straight',
      'Reduced merge conflicts by 85% through improved git workflow'
    ]
  },
  {
    name: 'System Design',
    icon: Database,
    highlight: '99.9%',
    trend: '+2%',
    dataKey: 'uptime',
    color: '#F472B6',
    details: [
      { label: 'Services Built', value: '25+' },
      { label: 'APIs Designed', value: '40+' },
      { label: 'Microservices', value: '15+' },
      { label: 'Cloud Platform', value: 'AWS' }
    ],
    kpis: [
      { label: 'System Uptime', value: '99.9%' },
      { label: 'Response Time', value: '<100ms' },
      { label: 'Error Rate', value: '<0.1%' }
    ],
    achievements: [
      'Designed scalable architecture supporting 1M+ daily users',
      'Reduced system latency by 65% through optimizations',
      'Implemented zero-downtime deployment strategy',
      'Cut infrastructure costs by 40% through efficient design'
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