import { memo } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const ContactCard = ({ icon: Icon, title, children }) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    className="p-6 rounded-xl bg-[#1E2D3D]/30 backdrop-blur-sm
               border border-[#2A3B4D] hover:bg-[#1E2D3D]/50 
               transition-all duration-300 text-center"
  >
    <div className="w-12 h-12 mx-auto mb-4 text-[#64FFDA] p-3 rounded-full
                    bg-[#64FFDA]/10 flex items-center justify-center">
      <Icon className="w-6 h-6" />
    </div>
    <h3 className="text-lg font-semibold text-[#64FFDA] mb-4">{title}</h3>
    <div className="text-gray-300">{children}</div>
  </motion.div>
);

ContactCard.propTypes = {
  icon: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default memo(ContactCard);