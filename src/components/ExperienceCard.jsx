import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import AnimatedValue from './AnimatedValue';

const ExperienceCard = ({ company, period, position, achievements, metrics }) => {
    const [isExpanded, setIsExpanded] = useState(false);
  
    return (
      <div className="bg-white rounded-xl shadow-sm p-6 border border-slate-100 transition-all duration-300 hover:shadow-md">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold text-slate-900">{company}</h3>
            <p className="text-slate-700">{position}</p>
            <p className="text-slate-600">{period}</p>
          </div>
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-indigo-600 hover:text-indigo-700"
          >
            {isExpanded ? 'Show Less' : 'Show More'}
          </button>
        </div>
  
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center">
              <p className="text-2xl font-bold text-indigo-600">
                <AnimatedValue value={metric.value} suffix={metric.suffix} />
              </p>
              <p className="text-sm text-slate-600">{metric.label}</p>
            </div>
          ))}
        </div>
  
        <div className={`space-y-2 transition-all duration-300 ${isExpanded ? 'block' : 'hidden'}`}>
          {achievements.map((achievement, index) => (
            <div key={index} className="flex items-start gap-2">
              <ChevronRight className="text-indigo-600 mt-1 flex-shrink-0" size={16} />
              <p className="text-slate-700">{achievement}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };

export default ExperienceCard;
