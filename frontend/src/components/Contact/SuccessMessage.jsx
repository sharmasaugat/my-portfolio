
import { memo } from 'react';
import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedValue, { animations } from '../Common/AnimatedValue';

export const SuccessMessage = memo(({ message }) => (
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
));

SuccessMessage.propTypes = {
  message: PropTypes.string
};

SuccessMessage.displayName = 'SuccessMessage';