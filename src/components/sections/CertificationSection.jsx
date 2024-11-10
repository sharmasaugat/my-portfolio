import React, { useState } from 'react';
import { motion } from 'framer-motion';
import CertificationCard from '../Certification/CertificationCard';
import { certifications } from '../../data/CertificationData';
import Terminal from '../Common/Terminal';
import CertificationSidebar from '../Certification/CertificationSidebar';

const sectionStyles = {
  heading: "text-4xl font-bold mb-4",
  accent: "text-[#64FFDA]",
  description: "text-[#8892B0] max-w-2xl mx-auto",
  terminal: "certification-terminal max-w-4xl mx-auto",
  terminalBody: "terminal-body grid grid-cols-12 gap-0",
  mainContent: "col-span-8 p-6 bg-[#0A192F]/50"
};

const fadeInAnimation = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 }
};

const CertificationSection = () => {
  const [activeCert, setActiveCert] = useState('aws-cloud');

  return (
    <section className="certification-section relative py-24">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          {...fadeInAnimation}
        >
          <h2 className={sectionStyles.heading}>
            Professional <span className={sectionStyles.accent}>Certifications</span>
          </h2>
          <p className={sectionStyles.description}>
            Industry-recognized credentials and technical certifications
          </p>
        </motion.div>

        <motion.div {...fadeInAnimation}>
          <Terminal title="~/credentials/certifications.json" className="max-w-4xl mx-auto">
            <div className={sectionStyles.terminalBody}>
              <CertificationSidebar 
                certifications={certifications}
                activeCert={activeCert}
                onCertSelect={setActiveCert}
              />
              <div className={sectionStyles.mainContent}>
                <CertificationCard certification={certifications[activeCert]} />
              </div>
            </div>
          </Terminal>
        </motion.div>
      </div>
    </section>
  );
};

export default CertificationSection;