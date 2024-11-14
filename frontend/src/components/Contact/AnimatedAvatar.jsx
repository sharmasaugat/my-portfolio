
import { memo } from 'react';
import { motion } from 'framer-motion';
import { Bot } from 'lucide-react';

const animations = {
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

export const AnimatedAvatar = memo(() => (
  <motion.div 
    className="relative"
    {...animations.avatar}
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
      {...animations.statusBadge}
    >
      <div className="bg-gray-800 rounded-full p-1 shadow-xl border border-gray-700/50">
        <div className="px-4 py-1.5 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full flex items-center gap-2">
          <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
          <span className="text-xs text-white font-medium">Online & Ready</span>
        </div>
      </div>
    </motion.div>
  </motion.div>
));

AnimatedAvatar.displayName = 'AnimatedAvatar';