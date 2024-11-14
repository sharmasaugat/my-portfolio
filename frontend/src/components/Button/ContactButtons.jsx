import PropTypes from 'prop-types';
import { memo } from 'react';
import { Send } from 'lucide-react';
import styles from '../../styles/contactStyles/ContactButtons.module.css';
import { CONTACT_DATA } from '../../data/ContactData';

export const ContactButtons = memo(({ onOpenModal }) => {
  return (
    <div className={styles.buttonGrid}>
      {Object.entries(CONTACT_DATA.formTabs).map(([key, tab]) => (
        <button
          key={key}
          onClick={() => onOpenModal(key)}
          className={styles.button}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-700 opacity-95"></div>
          <div className="relative p-6 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className={`p-3 ${key === 'email' ? 'bg-blue-500' : 'bg-purple-500'} rounded-lg`}>
                <tab.icon className="text-white" size={24} />
              </div>
              <span className="text-white font-medium">{tab.title}</span>
            </div>
            <div className={`w-8 h-8 rounded-full ${key === 'email' ? 'bg-blue-500/50' : 'bg-purple-500/50'} flex items-center justify-center`}>
              <Send size={16} className="text-white" />
            </div>
          </div>
        </button>
      ))}
    </div>
  );
});

ContactButtons.propTypes = {
  onOpenModal: PropTypes.func.isRequired
};