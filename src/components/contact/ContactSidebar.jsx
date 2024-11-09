
import { memo } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';

const CONTACT_ICONS = {
  location: MapPin,
  email: Mail,
  phone: Phone
};

const SOCIAL_ICONS = {
  linkedin: Linkedin,
  github: Github
};

const ContactSidebar = ({ config }) => (
  <div className="contact-info-sidebar">
    <h2 className="contact-title">Get in Touch</h2>
    <p className="contact-subtitle">Let's create something amazing together</p>
    
    <div className="contact-details">
      {Object.entries({
        location: "Dallas, Tx",
        email: config.email,
        phone: config.phone
      }).map(([key, value]) => {
        const Icon = CONTACT_ICONS[key];
        return (
          <div key={key} className="contact-detail-item">
            <Icon size={20} />
            <span>{value}</span>
          </div>
        );
      })}
    </div>

    <div className="contact-social-links">
      {Object.entries(config.social).map(([platform, link]) => {
        const Icon = SOCIAL_ICONS[platform];
        return (
          <a
            key={platform}
            href={link}
            className="social-link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${platform} Profile`}
          >
            <Icon size={20} />
          </a>
        );
      })}
    </div>
  </div>
);

export default memo(ContactSidebar);