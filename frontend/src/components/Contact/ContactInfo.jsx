
import { memo } from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';
import { CONTACT_CONFIG } from '../../config/contact';

const CONTACT_ICONS = {
  location: MapPin,
  email: Mail,
  phone: Phone
};

export const ContactInfo = memo(() => {
  return (
    <div className="space-y-4">
      {Object.entries({
        location: CONTACT_CONFIG.location,
        email: CONTACT_CONFIG.email,
        phone: CONTACT_CONFIG.phone
      }).map(([key, value]) => {
        const Icon = CONTACT_ICONS[key];
        return (
          <div key={key} className="flex items-center gap-3 text-gray-300">
            <div className="p-2 bg-gray-800 rounded-lg">
              <Icon size={20} />
            </div>
            <span>{value}</span>
          </div>
        );
      })}
    </div>
  );
});