import { memo } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import Loading from '../Common/Loading';
import { CONTACT_DATA } from '../../data/ContactData';
import { SubmitButton } from '../Button/SubmitButton';
import { animations } from '../Common/AnimatedValue';
import { ContactFormInputs } from './ContactFormInputs';
import styles from '../../styles/contactStyles/ContactModal.module.css';

const ContactModal = ({ 
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
  if (!showModal) return null;

  return (
    <motion.div
      className={styles.overlay}
      {...animations.modal.overlay}
      onClick={onClose}
    >
      <motion.div
        className={styles.modal}
        {...animations.modal.content}
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
            <ContactFormInputs 
              inputs={CONTACT_DATA.formTabs[activeTab].inputs}
              values={values}
              handleChange={handleChange}
              loading={loading}
            />
            {error && <div className="text-red-400 text-sm">{error}</div>}
            <SubmitButton
              loading={loading}
              submitted={submitted}
              buttonType={activeTab}
            />
          </form>
        )}
      </motion.div>
    </motion.div>
  );
};

ContactModal.propTypes = {
  showModal: PropTypes.bool.isRequired,
  activeTab: PropTypes.string.isRequired,
  values: PropTypes.shape({}).isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  submitted: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  successMessage: PropTypes.string
};

ContactModal.defaultProps = {
  error: '',
  successMessage: 'Thank you for your message!'
};

const MemoizedContactModal = memo(ContactModal);
MemoizedContactModal.displayName = 'ContactModal';

export { MemoizedContactModal as ContactModal };