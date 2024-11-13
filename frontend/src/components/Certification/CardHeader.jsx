
import React from 'react';
import { CheckCircle } from 'lucide-react';

const CardHeader = () => (
  <div className="flex items-center gap-3 mb-6">
    <CheckCircle className="text-green-400" size={20} />
    <span className="text-green-400 text-sm">Verified Certificate</span>
  </div>
);

export default CardHeader;