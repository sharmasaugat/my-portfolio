import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Certification Section Component
const CertificationSection = () => {
  const certifications = [
    {
      id: "aws-cloud-practitioner",
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "2023",
      code: `// AWS Cloud Practitioner Skills
const awsCloudPractitionerSkills = {
  coreServices: [
    'EC2', 'S3', 'RDS', 
    'Lambda', 'CloudWatch'
  ],
  security: ['IAM', 'Cognito', 'Inspector'],
  billing: 'AWS Billing & Cost Management',
  support: 'AWS Support Plans'
};`,
      verify: "https://www.credly.com/badges/3a2aa7e6-abaa-4b4d-863f-ca2a2149302e/linked_in_profile",
      description: "Demonstrates foundational knowledge of AWS cloud services, security, billing, and support."
    },
    {
      id: "aws-partner",
      title: "AWS Partner: Technical Accredited",
      issuer: "Amazon Web Services",
      date: "2023",
      code: `// AWS Partner Technical Accreditation
const awsPartnerSkills = {
  services: [
    'EC2', 'RDS', 'S3', 
    'CloudFront', 'Route 53'
  ],
  competencies: {
    architecture: 'Well-Architected Framework',
    security: ['IAM', 'KMS', 'Shield'],
    networking: 'VPC & Direct Connect',
    costOptimization: 'Cost Explorer & Budgets'
  }
};`,
      verify: "https://www.credly.com/badges/0631d266-f692-4642-b32d-ca082fb5f11e/linked_in_profile",
      description: "Showcases advanced technical skills in AWS architecture, security, networking, and cost optimization."
    }
  ];

  const [activeCert, setActiveCert] = useState(certifications[0]);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">Certifications & Expertise</h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-12 gap-6">
          <div className="md:col-span-4 space-y-4">
            {certifications.map((cert) => (
              <motion.div
                key={cert.id}
                className={`p-4 rounded-lg cursor-pointer transition-all ${
                  activeCert.id === cert.id 
                    ? 'bg-indigo-600 text-white shadow-lg' 
                    : 'bg-white hover:bg-indigo-50'
                }`}
                onClick={() => setActiveCert(cert)}
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="font-semibold">{cert.title}</h3>
                <p className="text-sm opacity-80">{cert.issuer} • {cert.date}</p>
                <p className="text-xs mt-2">{cert.description}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="md:col-span-8">
            <motion.div 
              className="bg-slate-900 rounded-lg overflow-hidden"
              key={activeCert.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center justify-between px-4 py-2 bg-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"/>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"/>
                  <div className="w-3 h-3 rounded-full bg-green-500"/>
                </div>
                <span className="text-sm text-slate-400">{activeCert.title}.js</span>
              </div>
              <div className="p-4 font-mono text-sm">
                <pre className="text-green-400">
                  {activeCert.code}
                </pre>
                <a href={activeCert.verify} className="text-blue-400 underline" target="_blank" rel="noopener noreferrer">Verify Certification</a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationSection;