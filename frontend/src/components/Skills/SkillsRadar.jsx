import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Cloud, Database, Cpu } from 'lucide-react';

const skills = [
  {
    subject: 'Enterprise Architecture',
    level: 95,
    icon: <Cpu className="w-6 h-6" />,
    details: [
      'Event-Driven Architecture',
      'Domain-Driven Design',
      'Microservices',
      'API Gateway',
      'CQRS/Event Sourcing',
      'Multi Layered Architecture'
    ],
    color: 'from-cyan-600 to-blue-600'
  },
  {
    subject: 'Cloud Computing',
    level: 70,
    icon: <Cloud className="w-6 h-6" />,
    details: [
      'AWS Services',
      'Kubernetes',
      'Docker'
    ],
    color: 'from-indigo-500 to-purple-500'
  },
  {
    subject: 'Full Stack Development',
    level: 88,
    icon: <Code2 className="w-6 h-6" />,
    details: [
      'React/Angular',
      'Node.js/Express',
      'Java/Spring',
      'C#/.NET Core',
      'Genero 4GL'
    ],
    color: 'from-emerald-500 to-teal-500'
  },
  {
    subject: 'Database Design',
    level: 95,
    icon: <Database className="w-6 h-6" />,
    details: [
      'SQL Optimization',
      'NoSQL Solutions',
      'Data Modeling',
      'Query Performance'
    ],
    color: 'from-rose-500 to-pink-500'
  }
];

const SkillsRadar = () => {
  const [activeSkill, setActiveSkill] = useState(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {skills.map((skill, index) => (
        <motion.div
          key={skill.subject}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="terminal-container backdrop-blur-lg bg-white/10"
          style={{ minHeight: '280px' }} // Fixed height for consistency
        >
          <div className="terminal-header">
            <div className="terminal-controls">
              <div className="control close"></div>
              <div className="control minimize"></div>
              <div className="control maximize"></div>
            </div>
            <div className="terminal-title font-mono text-sm">{skill.subject}.js</div>
          </div>
          
          <div 
            className={`terminal-content bg-gradient-to-br ${skill.color} h-full backdrop-blur-xl`}
            onClick={() => setActiveSkill(activeSkill === index ? null : index)}
          >
            <div className="flex items-center gap-3 mb-4">
              {skill.icon}
              <h3 className="text-lg font-semibold">{skill.subject}</h3>
            </div>
            
            <div className="w-full bg-black/20 rounded-full h-2 mb-4">
              <motion.div
                className="bg-white rounded-full h-2"
                initial={{ width: 0 }}
                animate={{ width: `${skill.level}%` }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </div>

            <AnimatePresence>
              {activeSkill === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                >
                  <ul className="space-y-2">
                    {skill.details.map((detail, i) => (
                      <motion.li
                        key={detail}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-center gap-2 text-sm"
                      >
                        <span className="w-1.5 h-1.5 bg-white rounded-full" />
                        {detail}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default SkillsRadar;
