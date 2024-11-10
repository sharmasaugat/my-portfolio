import React from 'react';
import { motion } from 'framer-motion';
import SkillsRadar from '../Skills/SkillsRadar';

const SkillsSection = () => (
  <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
    <div className="container mx-auto px-4">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-3xl font-bold text-slate-900 text-center mb-4"
      >
        Technical Arsenal
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-slate-600 text-center mb-12 max-w-2xl mx-auto"
      >
        Core technologies and expertise that drive innovative solutions
      </motion.p>
      <div className="max-w-6xl mx-auto">
        <SkillsRadar />
      </div>
    </div>
  </section>
);

export default SkillsSection;
