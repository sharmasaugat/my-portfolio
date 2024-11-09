import React from 'react';
import { motion } from 'framer-motion';
import ExperienceCard from '../ExperienceCard';
import { usePortfolio } from '../../contexts/PortfolioContext';

const ExperienceSection = () => {
  const { experiences } = usePortfolio();

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-3xl font-bold text-slate-900 text-center mb-12"
        >
          Professional Journey
        </motion.h2>
        <div className="max-w-4xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} {...exp} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;