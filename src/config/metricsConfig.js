import { Terminal, LineChart as LineIcon, BarChart2, TrendingUp } from 'lucide-react';
import { AreaChart, BarChart, LineChart, Area, Bar, Line } from 'recharts';

// Import metrics data from metricsData.js
import { engineeringMetrics, performanceData } from '../data/metricsData';

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

export const metricsConfig = {
  engineeringMetrics,
  graphTypes,
  performanceData
};

export { engineeringMetrics, performanceData };