import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import CardHeader from './CardHeader';
import SkillsShowcase from './SkillsShowcase';
import VerifyButton from '../Button/VerifyButton';

const CertificationCard = memo(({ certification }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="h-full"
    >
      <CardHeader />

      <pre className="font-mono text-sm text-gray-300 mb-6">
        {JSON.stringify({
          title: certification.title,
          issuer: certification.issuer,
          credentials: {
            id: certification.credentialId,
            issued: certification.issued,
            expires: certification.expiry,
            status: certification.status
          }
        }, null, 2)}
      </pre>

      <SkillsShowcase skills={certification.skills} />
      <VerifyButton verifyLink={certification.verifyLink} />
    </motion.div>
  );
});

CertificationCard.propTypes = {
  certification: PropTypes.shape({
    title: PropTypes.string.isRequired,
    issuer: PropTypes.string.isRequired,
    credentialId: PropTypes.string.isRequired,
    issued: PropTypes.string.isRequired,
    expiry: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    skills: PropTypes.arrayOf(PropTypes.string).isRequired,
    verifyLink: PropTypes.string.isRequired
  }).isRequired
};

CertificationCard.displayName = 'CertificationCard';

export default CertificationCard;