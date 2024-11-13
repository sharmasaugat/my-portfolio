import { memo } from 'react';
import PropTypes from 'prop-types';

const variants = {
  form: {
    wrapper: "form-tabs",
    button: (isActive) => `form-tab ${isActive ? 'active' : ''}`
  },
  skill: {
    wrapper: "inline-flex p-1 space-x-1 bg-white/20 backdrop-blur-lg rounded-xl",
    button: (isActive) => `px-6 py-2.5 rounded-lg transition-all flex items-center gap-2 ${
      isActive
        ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg'
        : 'text-slate-600 hover:bg-white/50'
    }`
  }
};

// Fix 1: Change to default export
const TabButtons = memo(({ tabs, activeTab, onTabChange, variant = 'form' }) => {
  const styles = variants[variant];
  
  return (
    <div className={styles.wrapper}>
      {Object.entries(tabs).map(([key, { icon: Icon, title }]) => (
        <button
          key={key}
          onClick={() => onTabChange(key)}
          className={styles.button(activeTab === key)}
        >
          {Icon && <Icon size={variant === 'skill' ? 18 : 20} />}
          <span className={variant === 'skill' ? 'font-medium' : ''}>{title}</span>
        </button>
      ))}
    </div>
  );
});

TabButtons.propTypes = {
  tabs: PropTypes.object.isRequired,
  activeTab: PropTypes.string.isRequired,
  onTabChange: PropTypes.func.isRequired,
  variant: PropTypes.oneOf(['form', 'skill'])
};

// Fix 2: Use default export
export default TabButtons;