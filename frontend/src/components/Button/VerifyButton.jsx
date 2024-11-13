import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const VerifyButton = memo(({ verifyLink }) => (
  <motion.a
    href={verifyLink}
    target="_blank"
    rel="noopener noreferrer"
    className="verify-btn mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-lg
      bg-[#64FFDA]/10 text-[#64FFDA] text-sm hover:bg-[#64FFDA]/20 transition-all"
    whileHover={{ x: 4 }}
    aria-label="Verify certification credential"
  >
    <ExternalLink size={16} aria-hidden="true" />
    Verify Credential
  </motion.a>
));

VerifyButton.propTypes = {
  verifyLink: PropTypes.string.isRequired
};

VerifyButton.displayName = 'VerifyButton';

export default VerifyButton;