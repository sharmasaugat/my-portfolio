import { Terminal, Award } from 'lucide-react';

export const certifications = {
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