import { memo } from 'react';
import PropTypes from 'prop-types';
import { Send } from 'lucide-react';
import Loading from '../common/Loading';

export const SubmitButton = memo(({ loading, submitted, buttonType }) => {
  const buttonText = buttonType === 'email' ? 'Send Email' : 'Send Message';

  return (
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
            <span>{buttonText}</span>
          </>
        )}
      </div>
    </button>
  );
});

SubmitButton.propTypes = {
  loading: PropTypes.bool.isRequired,
  submitted: PropTypes.bool.isRequired,
  buttonType: PropTypes.oneOf(['email', 'message']).isRequired
};