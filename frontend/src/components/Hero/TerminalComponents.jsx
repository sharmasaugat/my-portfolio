
import React, { memo, useMemo } from 'react';
import PropTypes from 'prop-types';

export const TerminalOutput = memo(({ name, role }) => (
  <div className="output" data-testid="terminal-output" role="region" aria-label="Developer Info">
    <h1 className="name">{name}</h1>
    <p className="role">{role}</p>
  </div>
));

export const TechStack = memo(({ skills }) => {
  const renderedSkills = useMemo(() => 
    skills.map(skill => (
      <div key={skill} className="skill-tag" data-testid="skill-item" role="listitem">
        {skill}
      </div>
    )), [skills]
  );

  return (
    <div className="tech-stack-grid" role="list" aria-label="Technical Skills">
      {renderedSkills}
    </div>
  );
});

export const CommandLine = memo(({ command, children }) => (
  <div className="space-y-2">
    <div className="command-line" role="region" aria-label={`Terminal command: ${command}`}>
      <span className="prompt" aria-hidden="true">$</span> {command}
    </div>
    {children}
  </div>
));

// PropTypes definitions
TerminalOutput.propTypes = {
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired
};

TechStack.propTypes = {
  skills: PropTypes.arrayOf(PropTypes.string).isRequired
};

CommandLine.propTypes = {
  command: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};