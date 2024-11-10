import { memo } from 'react';
import PropTypes from 'prop-types';
import { AnimatePresence } from 'framer-motion';
import { FormField } from './FormField';
import { FormStatus } from './FormStatus';
import { SubmitButton } from '../Button/SubmitButton';

export const FormContent = memo(({ tab, values, loading, submitted, error, onChange, onSubmit }) => (
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
      <SubmitButton 
        loading={loading} 
        submitted={submitted} 
        buttonType={tab.title === 'Email Me' ? 'email' : 'message'} 
      />
    </form>
  </div>
));

FormContent.propTypes = {
  tab: PropTypes.shape({
    title: PropTypes.string.isRequired,
    inputs: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        placeholder: PropTypes.string.isRequired
      })
    ).isRequired
  }).isRequired,
  values: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  submitted: PropTypes.bool.isRequired,
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};