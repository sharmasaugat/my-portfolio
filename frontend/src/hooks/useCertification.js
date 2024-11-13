
import { useState } from 'react';
import { certifications } from '../data/CertificationData';

const useCertification = () => {
  const [activeCert, setActiveCert] = useState('aws-cloud');

  return {
    activeCert,
    setActiveCert,
    currentCertification: certifications[activeCert],
    certifications
  };
};

export default useCertification;