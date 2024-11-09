import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Award, CheckCircle, ExternalLink } from 'lucide-react';

const CertificationSection = () => {
  const [activeCert, setActiveCert] = useState('aws-cloud');

  const certifications = {
    'aws-cloud': {
      icon: Terminal,
      title: 'AWS Cloud Practitioner',
      issuer: 'Amazon Web Services',
      issued: '2023',
      expiry: '2026',
      credentialId: 'AWS-CCP-2023',
      skills: ['EC2', 'S3', 'RDS', 'Lambda', 'CloudWatch'],
      verifyLink: "https://www.credly.com/badges/3a2aa7e6-abaa-4b4d-863f-ca2a2149302e",
      status: 'Active'
    },
    'aws-partner': {
      icon: Award,
      title: 'AWS Partner: Technical',
      issuer: 'Amazon Web Services',
      issued: '2023',
      expiry: '2026',
      credentialId: 'AWS-PAT-2023',
      skills: ['Architecture', 'Security', 'Networking', 'Cost Optimization'],
      verifyLink: "https://www.credly.com/badges/0631d266-f692-4642-b32d-ca082fb5f11e",
      status: 'Active'
    }
  };

  return (
    <section className="certification-section relative py-24">
      <div className="container mx-auto px-6">
        {/* New heading section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-4xl font-bold mb-4">
            Professional <span className="text-[#64FFDA]">Certifications</span>
          </h2>
          <p className="text-[#8892B0] max-w-2xl mx-auto">
            Industry-recognized credentials and technical certifications
          </p>
        </motion.div>

        <motion.div 
          className="certification-terminal max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <div className="terminal-header">
            <div className="terminal-controls">
              <span className="control close"></span>
              <span className="control minimize"></span>
              <span className="control maximize"></span>
            </div>
            <span className="terminal-title font-mono">~/credentials/certifications.json</span>
          </div>

          <div className="terminal-body grid grid-cols-12 gap-0">
            {/* Left sidebar - Certificate Selection */}
            <div className="col-span-4 border-r border-[#2A3B4D] p-4 bg-[#1E2D3D]/50">
              <div className="text-[#64FFDA] font-mono text-sm mb-4">Available Credentials:</div>
              {Object.entries(certifications).map(([key, cert]) => (
                <motion.div
                  key={key}
                  className={`cert-selector p-3 rounded-lg mb-2 cursor-pointer
                    ${activeCert === key 
                      ? 'bg-[#64FFDA]/10 border-l-2 border-[#64FFDA]' 
                      : 'hover:bg-[#64FFDA]/5'}`}
                  onClick={() => setActiveCert(key)}
                  whileHover={{ x: 4 }}
                >
                  <div className="flex items-center gap-2">
                    <cert.icon size={16} className="text-[#64FFDA]" />
                    <span className="text-sm text-gray-300">{cert.title}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Right side - Certificate Details */}
            <div className="col-span-8 p-6 bg-[#0A192F]/50">
              <motion.div
                key={activeCert}
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
                    title: certifications[activeCert].title,
                    issuer: certifications[activeCert].issuer,
                    credentials: {
                      id: certifications[activeCert].credentialId,
                      issued: certifications[activeCert].issued,
                      expires: certifications[activeCert].expiry,
                      status: certifications[activeCert].status
                    }
                  }, null, 2)}
                </pre>

                <div className="skills-showcase mt-6">
                  <div className="text-[#64FFDA] font-mono text-sm mb-3">Validated Skills:</div>
                  <div className="flex flex-wrap gap-2">
                    {certifications[activeCert].skills.map((skill, idx) => (
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
                  href={certifications[activeCert].verifyLink}
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
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CertificationSection;