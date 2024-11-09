import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="min-h-[85vh] flex items-center portfolio-section">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Terminal Side */}
          <div className="terminal-container">
            <div className="terminal-header">
              <div className="terminal-controls">
                <span className="control close"></span>
                <span className="control minimize"></span>
                <span className="control maximize"></span>
              </div>
              <div className="terminal-title">saugat@portfolio:~</div>
            </div>
            
            <div className="terminal-content">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="space-y-6"
              >
                <div className="command-line">
                  <span className="prompt">$</span> whoami
                </div>
                <div className="output">
                  <h1 className="name">Saugat Sharma</h1>
                  <p className="role">Full Stack Software Engineer</p>
                </div>

                <div className="command-line">
                  <span className="prompt">$</span> cat tech-stack.txt
                </div>
                <div className="tech-stack-grid">
                  {['JavaScript', 'Python', 'React', 'Node.js'].map(skill => (
                    <div key={skill} className="skill-tag">{skill}</div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>

          {/* Summary Side */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="summary-container"
          >
            <div className="code-summary">
              <pre className="text-sm text-[#64FFDA]/90">
                <code>{`const developer = {
  name: "Saugat Sharma",
  role: "Full Stack Software Engineer",
  experience: "3+ years",
  passion: "Building scalable solutions",
  expertise: [
    "Full-Stack Development",
    "Cloud Architecture",
    "System Design",
    "Team Leadership"
  ],
  impact: {
    projects: "50+",
    performance: "80% improvement",
    teamGrowth: "40% productivity"
  }
}`}</code>
              </pre>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;