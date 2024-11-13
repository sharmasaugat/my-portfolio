
import React from 'react';
import { motion } from 'framer-motion';

const SkillsShowcase = ({ skills }) => (
  <div className="skills-showcase mt-6">
    <div className="text-[#64FFDA] font-mono text-sm mb-3">Validated Skills:</div>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, idx) => (
        <motion.span
          key={idx}
          className="px-2 py-1 rounded-md text-xs bg-[#1E293B] text-[#94A3B8] border border-[#2A3B4D]"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: idx * 0.1 }}
        >
          {skill}
        </motion.span>
      ))}
    </div>
  </div>
);

export default SkillsShowcase;