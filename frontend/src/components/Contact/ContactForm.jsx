import { memo } from 'react';
import { Bot, Linkedin, Github } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedValue, { animations } from '../Common/AnimatedValue'; // Fix import
import { ContactButtons } from './ContactButtons';
import { ContactInfo } from './ContactInfo';
import { ContactModal } from './ContactModal';
import { TypingGreeting } from './TypingGreeting';
import { CONTACT_CONFIG } from '../../config/contact';
import { useContactForm } from '../../hooks/useContactForm';
import { Keyframes } from './Keyframes';
import Loading from '../Common/Loading';

const contactAnimations = {
  avatar: {
    initial: { scale: 0.9, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    transition: { duration: 0.5 }
  },
  statusBadge: {
    initial: { y: 10, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { delay: 0.3 }
  }
};

const GradientBackground = () => (
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl animate-pulse"></div>
    <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
  </div>
);

const AnimatedAvatar = () => (
  <motion.div 
    className="relative"
    {...contactAnimations.avatar}
  >
    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl"></div>
    <div className="relative w-32 h-32 ripple-bg bg-gradient-to-r from-blue-500 to-purple-500 rounded-full p-1">
      <div className="w-full h-full rounded-full bg-gray-900 p-1">
        <div className="w-full h-full rounded-full bg-gradient-to-r from-blue-400/80 to-purple-400/80 flex items-center justify-center">
          <Bot className="w-12 h-12 text-white" />
        </div>
      </div>
    </div>
    <motion.div 
      className="absolute -bottom-4 left-1/2 transform -translate-x-1/2"
      {...contactAnimations.statusBadge}
    >
      <div className="bg-gray-800 rounded-full p-1 shadow-xl border border-gray-700/50">
        <div className="px-4 py-1.5 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full flex items-center gap-2">
          <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
          <span className="text-xs text-white font-medium">Online & Ready</span>
        </div>
      </div>
    </motion.div>
  </motion.div>
);

const SocialLinks = () => (
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
);

const SuccessMessage = ({ message }) => (
  <AnimatePresence>
    {message && (
      <motion.div
        className="fixed bottom-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg"
        {...animations.summary}
      >
        <AnimatedValue value={100} suffix="%" duration={1000} />
        <span className="ml-2">{message}</span>
      </motion.div>
    )}
  </AnimatePresence>
);

const ContactForm = () => {
  const formState = useContactForm();
  
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Keyframes />
      <div className="max-w-6xl w-full bg-gradient-to-b from-gray-800/50 to-gray-800/30 backdrop-blur-xl rounded-2xl p-8 relative overflow-hidden border border-gray-700/50">
        {formState.initialLoading ? (
          <div className="flex items-center justify-center min-h-[400px]">
            <Loading size="lg" />
          </div>
        ) : (
          <>
            <GradientBackground />
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="flex flex-col items-center lg:items-start space-y-8">
                <AnimatedAvatar />
                <div className="w-full space-y-6">
                  <TypingGreeting />
                  <ContactButtons onOpenModal={formState.toggleModal} />
                  <ContactInfo />
                  <SocialLinks />
                </div>
              </div>
              
              <div className="hidden lg:flex items-center justify-center" />
            </div>

            <ContactModal
              showModal={formState.showModal} 
              activeTab={formState.activeTab}
              onClose={() => formState.toggleModal(false)}
              {...formState}
            />
            
            <SuccessMessage message={formState.successMessage} />
          </>
        )}
      </div>
    </div>
  );
};

// PropTypes for sub-components
ContactForm.propTypes = {
  // Add if needed
};

export default memo(ContactForm);