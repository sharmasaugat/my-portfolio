import { memo } from 'react';
import { Bot, Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedValue, { animations } from '../Common/AnimatedValue'; // Fix import
import { CONTACT_CONFIG } from '../../config/contact';

const CONTACT_ICONS = {
  location: MapPin,
  email: Mail,
  phone: Phone,
  linkedin: Linkedin,
  github: Github
};

const sidebarAnimations = {
  container: {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.5 }
  },
  item: {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 }
  }
};

const EnhancedContactSidebar = () => {
  return (
    <motion.div 
      className="flex flex-col items-center lg:items-start"
      {...sidebarAnimations.container}
    >
      {/* Avatar Section */}
      <div className="relative animate-float mb-8">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl"></div>
        <div className="relative w-32 h-32 ripple-bg bg-gradient-to-r from-blue-500 to-purple-500 rounded-full p-1">
          <div className="w-full h-full rounded-full bg-gray-900 p-1">
            <div className="w-full h-full rounded-full bg-gradient-to-r from-blue-400/80 to-purple-400/80 flex items-center justify-center">
              <Bot className="w-12 h-12 text-white" />
            </div>
          </div>
        </div>
        
        {/* Status indicator */}
        <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
          <div className="bg-gray-800 rounded-full p-1 shadow-xl border border-gray-700/50">
            <div className="px-4 py-1.5 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full flex items-center gap-2">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              <span className="text-xs text-white font-medium">Online & Ready</span>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Info */}
      <div className="text-center lg:text-left">
        <h2 className="text-2xl font-semibold bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text mb-4">
          Get in Touch
        </h2>
        <p className="text-gray-400 mb-8">Let's create something amazing together</p>

        <div className="space-y-4 mb-8">
          {Object.entries({
            location: CONTACT_CONFIG.location,
            email: CONTACT_CONFIG.email,
            phone: CONTACT_CONFIG.phone
          }).map(([key, value], index) => {
            const Icon = CONTACT_ICONS[key];
            return (
              <motion.div
                key={key}
                className="flex items-center gap-3 text-gray-300"
                {...sidebarAnimations.item}
                transition={{ delay: index * 0.1 }}
              >
                <div className="p-2 bg-gray-800 rounded-lg">
                  <Icon size={20} />
                </div>
                <span>{value}</span>
              </motion.div>
            );
          })}
        </div>

        {/* Social Links */}
        <div className="flex gap-4 justify-center lg:justify-start">
          {Object.entries(CONTACT_CONFIG.social).map(([platform, link]) => {
            const Icon = CONTACT_ICONS[platform];
            return (
              <a
                key={platform}
                href={link}
                className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${platform} Profile`}
              >
                <Icon size={20} className="text-gray-300" />
              </a>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default memo(EnhancedContactSidebar);