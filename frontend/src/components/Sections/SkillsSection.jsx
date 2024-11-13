import React, { useState, memo } from 'react';
import { motion } from 'framer-motion';
import SkillsRadar from '../Skills/SkillsRadar';
import SkillCard from '../Skills/SkillCard';
import  TabButtons from '../Button/TabButtons';
import { overviewSkills, skillTabs } from '../../data/SkillData';

const SkillsSection = () => {
  const [activeTab, setActiveTab] = useState('overview');
  
  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 via-white to-indigo-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
              Technical Arsenal
            </span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Core technologies and expertise that drive innovative solutions
          </p>
        </motion.div>

        <div className="mb-8 flex justify-center">
          <TabButtons 
            tabs={skillTabs}
            activeTab={activeTab}
            onTabChange={setActiveTab}
            variant="skill"
          />
        </div>

        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="max-w-6xl mx-auto"
        >
          {activeTab === 'overview' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {overviewSkills.map((skill, index) => (
                <SkillCard key={skill.title} {...skill} delay={index} />
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-lg p-6">
              <SkillsRadar />
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default memo(SkillsSection);