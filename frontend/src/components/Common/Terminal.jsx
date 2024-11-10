import React from 'react';

const terminalStyles = {
  wrapper: "terminal-window rounded-lg overflow-hidden border border-[#2A3B4D]",
  header: "terminal-header bg-[#1E2D3D] p-3 flex items-center",
  controls: "terminal-controls flex gap-2 mr-4",
  control: "w-3 h-3 rounded-full",
  close: "bg-red-500",
  minimize: "bg-yellow-500",
  maximize: "bg-green-500",
  title: "terminal-title font-mono text-sm text-[#8892B0]",
  body: "terminal-body bg-[#0A192F]"
};

const Terminal = ({ title, children, className = "" }) => (
  <div className={`${terminalStyles.wrapper} ${className}`}>
    <div className={terminalStyles.header}>
      <div className={terminalStyles.controls}>
        <span className={`${terminalStyles.control} ${terminalStyles.close}`}></span>
        <span className={`${terminalStyles.control} ${terminalStyles.minimize}`}></span>
        <span className={`${terminalStyles.control} ${terminalStyles.maximize}`}></span>
      </div>
      <span className={terminalStyles.title}>{title}</span>
    </div>
    <div className={terminalStyles.body}>
      {children}
    </div>
  </div>
);

export default Terminal;