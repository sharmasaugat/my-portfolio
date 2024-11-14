
import { memo } from 'react';
import { Linkedin, Github } from 'lucide-react';
import { CONTACT_CONFIG } from '../../config/contact';

export const SocialLinks = memo(() => (
  <div className="flex gap-4 justify-center lg:justify-start">
    {Object.entries(CONTACT_CONFIG.social).map(([platform, link]) => {
      const Icon = platform === 'linkedin' ? Linkedin : Github;
      return (
        <a
          key={platform}
          href={link}
          className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon size={20} className="text-gray-300" />
        </a>
      );
    })}
  </div>
));

SocialLinks.displayName = 'SocialLinks';