import { memo } from 'react';
import PropTypes from 'prop-types';
import { Send } from 'lucide-react';
import Loading from '../Common/Loading';

export const SubmitButton = memo(({ loading, submitted, buttonType }) => {
  const getButtonText = () => {
    if (loading) return 'Sending...';
    if (buttonType === 'email') return 'Send Email';
    return "Let's Chat";
  };

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
            <span>{getButtonText()}</span>
          </>
        ) : (
          <>
            <Send size={20} />
            <span>{getButtonText()}</span>
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