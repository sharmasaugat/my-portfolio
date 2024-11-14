import { memo } from 'react';
import { CONTACT_DATA, CONTACT_ICONS } from '../../data/ContactData';

export const ContactInfo = memo(() => {
  return (
    <div className="space-y-4">
      {Object.entries({
        location: CONTACT_DATA.contactInfo.location,
        email: CONTACT_DATA.contactInfo.email,
        phone: CONTACT_DATA.contactInfo.phone
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