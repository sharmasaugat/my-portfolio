import { memo } from 'react';
import PropTypes from 'prop-types';

export const TabButtons = memo(({ tabs, activeTab, onTabChange }) => (
  <div className="form-tabs">
    {Object.entries(tabs).map(([key, { icon: Icon, title }]) => (
      <button
        key={key}
        onClick={() => onTabChange(key)}
        className={`form-tab ${activeTab === key ? 'active' : ''}`}
      >
        <Icon size={20} />
        <span>{title}</span>
      </button>
    ))}
  </div>
));

TabButtons.propTypes = {
  tabs: PropTypes.object.isRequired,
  activeTab: PropTypes.string.isRequired,
  onTabChange: PropTypes.func.isRequired
};