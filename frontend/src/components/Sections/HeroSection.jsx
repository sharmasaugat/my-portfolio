import React, { memo } from 'react';
import { motion } from 'framer-motion';
import Terminal from '../Common/Terminal';
import { TerminalOutput, TechStack, CommandLine } from '../Hero/TerminalComponents';
import DeveloperInfo from '../Hero/DeveloperInfo';
import { TECH_STACK, DEVELOPER_INFO } from '../../data/heroData';
import { animations } from '../Common/AnimatedValue';

const HeroSection = memo(() => (
  <section className="min-h-[85vh] flex items-center portfolio-section" data-testid="hero-section">
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
));

export default HeroSection;