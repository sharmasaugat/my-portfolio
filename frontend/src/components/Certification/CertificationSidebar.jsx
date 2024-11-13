import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const CertificationSidebar = memo(({ certifications, activeCert, onCertSelect }) => (
  <div className="col-span-4 border-r border-[#2A3B4D] p-4 bg-[#1E2D3D]/50">
    <div className="text-[#64FFDA] font-mono text-sm mb-4">Available Credentials:</div>
    {Object.entries(certifications).map(([key, cert]) => (
      <motion.div
        key={key}
        className={`cert-selector p-3 rounded-lg mb-2 cursor-pointer
          ${activeCert === key 
            ? 'bg-[#64FFDA]/10 border-l-2 border-[#64FFDA]' 
            : 'hover:bg-[#64FFDA]/5'}`}
        onClick={() => onCertSelect(key)}
        whileHover={{ x: 4 }}
      >
        <div className="flex items-center gap-2">
          <cert.icon size={16} className="text-[#64FFDA]" />
          <span className="text-sm text-gray-300">{cert.title}</span>
        </div>
      </motion.div>
    ))}
  </div>
));

CertificationSidebar.propTypes = {
  certifications: PropTypes.object.isRequired,
  activeCert: PropTypes.string.isRequired,
  onCertSelect: PropTypes.func.isRequired
};

CertificationSidebar.displayName = 'CertificationSidebar';

export default CertificationSidebar;