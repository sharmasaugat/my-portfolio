import { memo } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import Loading from '../Common/Loading';
import { CONTACT_DATA } from '../../data/ContactData';
import { SubmitButton } from '../Button/SubmitButton';
import styles from '../../styles/ContactModal.module.css';

const modalAnimations = {
  overlay: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 }
  },
  content: {
    initial: { scale: 0.95, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0.95, opacity: 0 }
  }
};

export const ContactModal = memo(({ 
  showModal, 
  activeTab, 
  values, 
  loading, 
  error,
  submitted,
  handleChange,
  handleSubmit,
  onClose,
  successMessage
}) => {
  return (
    showModal && (
      <motion.div
        className={styles.overlay}
        {...modalAnimations.overlay}
        onClick={onClose}
      >
        <motion.div
          className={styles.modal}
          {...modalAnimations.content}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-2 right-2 p-3 text-gray-400 hover:text-white transition-colors rounded-lg hover:bg-gray-700/50"
          >
            <X size={20} />
          </button>
          
          {submitted ? (
            <div className="text-center py-8">
              <div className="text-green-400 text-xl mb-4">✓</div>
              <h3 className="text-xl font-semibold text-white mb-2">Message Sent!</h3>
              <p className="text-gray-300">{successMessage}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 mt-4">
              {loading && (
                <div className="absolute inset-0 bg-gray-900/50 backdrop-blur-sm flex items-center justify-center z-10 rounded-xl">
                  <Loading size="md" />
                </div>
              )}
              {CONTACT_DATA.formTabs[activeTab].inputs.map((input) => (
                <div key={input.name}>
                  <label className="block text-gray-300 mb-2">{input.label}</label>
                  {input.type === 'textarea' ? (
                    <textarea
                      name={input.name}
                      value={values[input.name]}
                      onChange={handleChange}
                      placeholder={input.placeholder}
                      className={`w-full bg-gray-700/50 rounded-lg p-3 text-white ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                      rows={4}
                      disabled={loading}
                    />
                  ) : (
                    <input
                      type={input.type}
                      name={input.name}
                      value={values[input.name]}
                      onChange={handleChange}
                      placeholder={input.placeholder}
                      className={`w-full bg-gray-700/50 rounded-lg p-3 text-white ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                      disabled={loading}
                    />
                  )}
                </div>
              ))}
              
              {error && (
                <div className="text-red-400 text-sm">{error}</div>
              )}
              
              <SubmitButton
                loading={loading}
                submitted={submitted}
                buttonType={activeTab}
              />
            </form>
          )}
        </motion.div>
      </motion.div>
    )
  );
});

ContactModal.propTypes = {
  showModal: PropTypes.bool.isRequired,
  activeTab: PropTypes.string.isRequired,
  values: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  submitted: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  successMessage: PropTypes.string
};