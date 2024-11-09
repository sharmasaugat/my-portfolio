import { memo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send } from 'lucide-react';
import Loading from '../common/Loading';
import { CONTACT_DATA } from '../../data/ContactData';

const ContactFormTabs = ({ values, loading, submitted, error, onChange, onSubmit }) => {
  const [activeTab, setActiveTab] = useState('email');
  const { formTabs } = CONTACT_DATA;

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(e, formTabs[activeTab].endpoint);
  };

  return (
    <div className="form-section">
      <div className="form-tabs">
        {Object.entries(formTabs).map(([key, { icon: Icon, title }]) => (
          <button
            key={key}
            onClick={() => setActiveTab(key)}
            className={`form-tab ${activeTab === key ? 'active' : ''}`}
          >
            <Icon size={20} />
            <span>{title}</span>
          </button>
        ))}
      </div>

      <FormContent
        tab={formTabs[activeTab]}
        values={values}
        loading={loading}
        submitted={submitted}
        error={error}
        onChange={onChange}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

const FormContent = memo(({ tab, values, loading, submitted, error, onChange, onSubmit }) => (
  <div className="form-container">
    <form onSubmit={onSubmit} className="form-fields">
      <AnimatePresence mode="wait">
        {tab.inputs.map(({ name, label, type, placeholder }) => (
          <FormField
            key={name}
            name={name}
            label={label}
            type={type}
            placeholder={placeholder}
            value={values[name] || ''}
            onChange={onChange}
          />
        ))}
      </AnimatePresence>

      <FormStatus error={error} submitted={submitted} />
      <SubmitButton loading={loading} submitted={submitted} type={tab.title} />
    </form>
  </div>
));

const FormField = memo(({ name, label, type, placeholder, value, onChange }) => (
  <motion.div
    className="form-field"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.2 }}
  >
    <label htmlFor={name}>{label}</label>
    {type === 'textarea' ? (
      <textarea
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required
      />
    ) : (
      <input
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required
      />
    )}
  </motion.div>
));

const FormStatus = memo(({ error, submitted }) => (
  <>
    {error && <div className="form-message error">{error}</div>}
    {submitted && <div className="form-message success">Message sent successfully!</div>}
  </>
));

const SubmitButton = ({ loading, submitted }) => (
  <button
    type="submit"
    disabled={loading || submitted}
    className="submit-button"
  >
    <div className="submit-button-inner">
      {loading ? (
        <>
          <Loading size="sm" />
          <span>Sending...</span>
        </>
      ) : (
        <>
          <Send size={20} />
          <span>Send Message</span>
        </>
      )}
    </div>
  </button>
);

export default memo(ContactFormTabs);