import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Phone, Mail, MessageCircle, Copy, Check, Linkedin, Github } from 'lucide-react';
import ContactCard from './ContactCard';
import { CONTACT_CONFIG } from '../../config/contact';

const ContactInfo = memo(({ messageType, setMessageType, copied, onCopyPhone }) => (
  <div className="grid md:grid-cols-3 gap-6">
    <ContactCard icon={Mail} title="Email">
      <p className="text-sm text-gray-600 mb-4">{CONTACT_CONFIG.email}</p>
      <button 
        onClick={() => setMessageType('email')}
        className="text-indigo-600 hover:text-indigo-700 text-sm font-medium"
      >
        Send Email
      </button>
    </ContactCard>

    <ContactCard icon={Phone} title="Phone">
      <div className="flex items-center justify-center gap-2 mb-4">
        <p className="text-sm text-gray-600">{CONTACT_CONFIG.phone}</p>
        <button 
          onClick={onCopyPhone}
          className="text-indigo-600 hover:text-indigo-700"
        >
          {copied ? <Check size={16} /> : <Copy size={16} />}
        </button>
      </div>
      <button 
        onClick={() => setMessageType('sms')}
        className="text-indigo-600 hover:text-indigo-700 text-sm font-medium"
      >
        Send SMS
      </button>
    </ContactCard>

    <ContactCard icon={MessageCircle} title="Social">
      <div className="flex justify-center gap-4">
        <a 
          href={CONTACT_CONFIG.social.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-600 hover:text-indigo-700"
        >
          <Linkedin size={24} />
        </a>
        <a 
          href={CONTACT_CONFIG.social.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-600 hover:text-indigo-700"
        >
          <Github size={24} />
        </a>
      </div>
    </ContactCard>
  </div>
));

ContactInfo.propTypes = {
  messageType: PropTypes.oneOf(['email', 'sms']).isRequired,
  setMessageType: PropTypes.func.isRequired,
  copied: PropTypes.bool.isRequired,
  onCopyPhone: PropTypes.func.isRequired
};

export default memo(ContactInfo);