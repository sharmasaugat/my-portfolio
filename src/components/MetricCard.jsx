import AnimatedValue from './AnimatedValue';

// Metric Card Component
const MetricCard = ({ metrics }) => (
  <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
    {metrics.map((metric, index) => (
      <div key={index} className="bg-white rounded-xl shadow-sm p-6 border border-slate-100">
        <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-${metric.color}-100 text-${metric.color}-600 mb-4`}>
          <metric.icon size={24} />
        </div>
        <h3 className="text-slate-900 font-semibold mb-2">{metric.label}</h3>
        <p className="text-3xl font-bold text-slate-900">
          <AnimatedValue value={metric.value} suffix={metric.suffix} />
        </p>
      </div>
    ))}
  </div>
);

export default MetricCard;
