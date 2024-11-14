import { memo, useState } from 'react';
import PropTypes from 'prop-types';
import { FormContent } from '../Form/FormContent';
import TabButtons from '../Button/TabButtons';
import { CONTACT_DATA } from '../../data/ContactData';
import Loading from '../Common/Loading';

const ContactFormTabs = ({ values, loading, submitted, error, onChange, onSubmit }) => {
  const [activeTab, setActiveTab] = useState('message');
  const { formTabs } = CONTACT_DATA;

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(e, activeTab);
  };

  return (
    <div className="w-full bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
      <TabButtons 
        tabs={formTabs}
        activeTab={activeTab}
        onTabChange={setActiveTab}
        variant="form"
      />

      <div className="relative mt-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          {formTabs[activeTab].inputs.map((input) => (
            <div key={input.name} className="form-group">
              <label className="block text-gray-300 mb-2">{input.label}</label>
              {input.type === 'textarea' ? (
                <textarea
                  name={input.name}
                  value={values[input.name] || ''}
                  onChange={onChange}
                  placeholder={input.placeholder}
                  className="form-input min-h-[120px]"
                  disabled={loading}
                  required={input.validation?.required}
                />
              ) : (
                <input
                  type={input.type}
                  name={input.name}
                  value={values[input.name] || ''}
                  onChange={onChange}
                  placeholder={input.placeholder}
                  className="form-input"
                  disabled={loading}
                  required={input.validation?.required}
                />
              )}
            </div>
          ))}
          
          {error && <div className="text-red-400 text-sm mt-2">{error}</div>}
          
          <button
            type="submit"
            disabled={loading}
            className="w-full submit-button"
          >
            {loading ? (
              <Loading size="sm" className="mx-auto" />
            ) : (
              formTabs[activeTab].title
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

ContactFormTabs.propTypes = {
  values: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  submitted: PropTypes.bool.isRequired,
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default memo(ContactFormTabs);