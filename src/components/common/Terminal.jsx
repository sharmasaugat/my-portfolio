import React from 'react';
import PropTypes from 'prop-types';

const Terminal = ({ title, controls = true, children }) => (
  <div className="terminal-container">
    <div className="terminal-header">
      {controls && (
        <div className="terminal-controls">
          <span className="control close"></span>
          <span className="control minimize"></span>
          <span className="control maximize"></span>
        </div>
      )}
      <div className="terminal-title">{title}</div>
    </div>
    <div className="terminal-content">
      {children}
    </div>
  </div>
);

Terminal.propTypes = {
  title: PropTypes.string.isRequired,
  controls: PropTypes.bool,
  children: PropTypes.node.isRequired
};

export default Terminal;