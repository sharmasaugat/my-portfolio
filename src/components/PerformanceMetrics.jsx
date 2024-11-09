
import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const PerformanceMetrics = ({ data }) => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">Performance Impact</h2>
        <div className="max-w-4xl mx-auto h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line 
                type="monotone" 
                dataKey="response" 
                stroke="#4f46e5" 
                strokeWidth={2}
                name="Response Time (ms)"
              />
              <Line 
                type="monotone" 
                dataKey="optimized" 
                stroke="#06b6d4"
                strokeWidth={2}
                name="Optimized Time (ms)"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
};

export default PerformanceMetrics;