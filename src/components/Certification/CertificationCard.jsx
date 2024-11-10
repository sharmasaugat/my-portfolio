import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, ExternalLink } from 'lucide-react';

const CertificationCard = ({ certification }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="h-full"
    >
      <div className="flex items-center gap-3 mb-6">
        <CheckCircle className="text-green-400" size={20} />
        <span className="text-green-400 text-sm">Verified Certificate</span>
      </div>

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

      <div className="skills-showcase mt-6">
        <div className="text-[#64FFDA] font-mono text-sm mb-3">Validated Skills:</div>
        <div className="flex flex-wrap gap-2">
          {certification.skills.map((skill, idx) => (
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

      <motion.a
        href={certification.verifyLink}
        target="_blank"
        rel="noopener noreferrer"
        className="verify-btn mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-lg
          bg-[#64FFDA]/10 text-[#64FFDA] text-sm hover:bg-[#64FFDA]/20 transition-all"
        whileHover={{ x: 4 }}
      >
        <ExternalLink size={16} />
        Verify Credential
      </motion.a>
    </motion.div>
  );
};

export default CertificationCard;