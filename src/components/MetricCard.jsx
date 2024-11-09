import AnimatedValue from './AnimatedValue';
import { motion } from 'framer-motion';

// Metric Card Component
const MetricCard = ({ metrics }) => (
  <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
    {metrics.map((metric, index) => (
      <motion.div
        key={index}
        className="metric-highlight p-6 rounded-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 + index * 0.1 }}
        whileHover={{ 
          scale: 1.02,
          backgroundColor: 'rgba(255,255,255,0.07)',
          transition: { duration: 0.2 }
        }}
      >
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/20 text-white mb-4">
          <metric.icon size={24} />
        </div>
        <h3 className="text-white font-medium mb-2">{metric.label}</h3>
        <p className="text-3xl font-bold text-white">
          <AnimatedValue value={metric.value} suffix={metric.suffix} />
        </p>
      </motion.div>
    ))}
  </div>
);

export default MetricCard;
