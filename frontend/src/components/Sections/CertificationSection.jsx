import React, { memo } from 'react';
import { motion } from 'framer-motion';
import CertificationCard from '../Certification/CertificationCard';
import Terminal from '../Common/Terminal';
import CertificationSidebar from '../Certification/CertificationSidebar';
import useCertification from '../../hooks/useCertification';

const styles = {
  section: "certification-section relative py-24",
  container: "container mx-auto px-6",
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

const CertificationSection = memo(() => {
  const { activeCert, setActiveCert, currentCertification, certifications } = useCertification();

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <motion.div 
          className="text-center mb-16"
          {...fadeInAnimation}
        >
          <h2 className={styles.heading}>
            Professional <span className={styles.accent}>Certifications</span>
          </h2>
          <p className={styles.description}>
            Industry-recognized credentials and technical certifications
          </p>
        </motion.div>

        <motion.div {...fadeInAnimation}>
          <Terminal title="~/credentials/certifications.json" className="max-w-4xl mx-auto">
            <div className={styles.terminalBody}>
              <CertificationSidebar 
                certifications={certifications}
                activeCert={activeCert}
                onCertSelect={setActiveCert}
              />
              <div className={styles.mainContent}>
                <CertificationCard certification={currentCertification} />
              </div>
            </div>
          </Terminal>
        </motion.div>
      </div>
    </section>
  );
});

CertificationSection.displayName = 'CertificationSection';

export default CertificationSection;