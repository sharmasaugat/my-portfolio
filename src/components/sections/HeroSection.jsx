import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import Terminal from '../common/Terminal';
import { TECH_STACK, DEVELOPER_INFO } from '../../data/heroData';

const TerminalOutput = memo(({ name, role }) => (
  <div className="output">
    <h1 className="name">{name}</h1>
    <p className="role">{role}</p>
  </div>
));

TerminalOutput.propTypes = {
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired
};

const TechStack = memo(({ skills }) => (
  <div className="tech-stack-grid">
    {skills.map(skill => (
      <div key={skill} className="skill-tag">{skill}</div>
    ))}
  </div>
));

TechStack.propTypes = {
  skills: PropTypes.arrayOf(PropTypes.string).isRequired
};

const CommandLine = memo(({ command, children }) => (
  <div className="space-y-2">
    <div className="command-line">
      <span className="prompt">$</span> {command}
    </div>
    {children}
  </div>
));

CommandLine.propTypes = {
  command: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

const DeveloperInfo = memo(({ info }) => (
  <div className="code-summary">
    <pre className="text-sm text-[#64FFDA]/90">
      <code>{`const developer = ${JSON.stringify(info, null, 2)}`}</code>
    </pre>
  </div>
));

DeveloperInfo.propTypes = {
  info: PropTypes.object.isRequired
};

const animations = {
  terminal: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7 }
  },
  summary: {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.7, delay: 0.2 }
  }
};

const HeroSection = () => (
  <section className="min-h-[85vh] flex items-center portfolio-section">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <Terminal title="saugat@portfolio:~">
          <motion.div {...animations.terminal} className="space-y-6">
            <CommandLine command="whoami">
              <TerminalOutput {...DEVELOPER_INFO} />
            </CommandLine>
            <CommandLine command="cat tech-stack.txt">
              <TechStack skills={TECH_STACK} />
            </CommandLine>
          </motion.div>
        </Terminal>

        <motion.div {...animations.summary} className="summary-container">
          <DeveloperInfo info={DEVELOPER_INFO} />
        </motion.div>
      </div>
    </div>
  </section>
);

export default memo(HeroSection);