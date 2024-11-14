import { memo } from 'react';
import PropTypes from 'prop-types';
import { FormInput } from '../Form/FormInput';  // Fix import
import TabButtons from '../Button/TabButtons';
import { CONTACT_DATA } from '../../data/ContactData';
import Loading from '../Common/Loading';

const ContactFormTabs = ({ 
  values, 
  loading, 
  error, 
  activeTab,
  onChange,
  onSubmit,
  onTabChange 
}) => {
  const { formTabs } = CONTACT_DATA;
  const currentTab = formTabs[activeTab]; // Get current tab configuration

  return (
    <div className="w-full bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
      <TabButtons 
        tabs={formTabs}
        activeTab={activeTab}
        onTabChange={onTabChange}
        variant="form"
      />

      <form onSubmit={onSubmit} className="space-y-4 mt-6">
        {currentTab.inputs.map((input) => (
          <FormInput
            key={input.name}
            {...input}
            value={values[input.name] || ''}
            onChange={onChange}
            disabled={loading}
          />
        ))}
        
        {error && <div className="text-red-400 text-sm mt-2">{error}</div>}
        
        <button
          type="submit"
          disabled={loading}
          className="w-full submit-button"
        >
          {loading ? <Loading size="sm" className="mx-auto" /> : currentTab.title}
        </button>
      </form>
    </div>
  );
};

ContactFormTabs.propTypes = {
  values: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  activeTab: PropTypes.string.isRequired,  // Add activeTab to propTypes
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onTabChange: PropTypes.func.isRequired  // Add onTabChange to propTypes
};

export default memo(ContactFormTabs);