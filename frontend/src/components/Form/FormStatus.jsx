import { memo } from 'react';
import PropTypes from 'prop-types';

export const FormStatus = memo(({ error, submitted }) => (
  <>
    {error && (
      <div className="form-message error" role="alert">
        {error}
      </div>
    )}
    {submitted && (
      <div className="form-message success" role="status">
        Message sent successfully!
      </div>
    )}
  </>
));

FormStatus.propTypes = {
  error: PropTypes.string,
  submitted: PropTypes.bool.isRequired
};