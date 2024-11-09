import React from 'react';
import { RadarChart, PolarGrid, PolarAngleAxis, Radar, ResponsiveContainer } from 'recharts';

// Technical Skills Radar
const SkillsRadar = () => {
    const skills = [
      { subject: 'System Architecture', A: 95 },
      { subject: 'Cloud Computing', A: 90 },
      { subject: 'Full Stack Development', A: 88 },
      { subject: 'DevOps & CI/CD', A: 92 },
      { subject: 'Database Design', A: 94 },
      { subject: 'Security', A: 89 }
    ];
  
    return (
      <div className="radar-chart-container">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart 
            cx="50%" 
            cy="50%" 
            outerRadius="70%" 
            data={skills}
          >
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            <Radar
              name="Skills"
              dataKey="A"
              stroke="#4f46e5"
              fill="#4f46e5"
              fillOpacity={0.6}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    );
  };

export default SkillsRadar;
