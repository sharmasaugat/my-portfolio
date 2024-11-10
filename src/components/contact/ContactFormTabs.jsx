import { memo, useState } from 'react';
import PropTypes from 'prop-types';
import { FormContent } from '../Form/FormContent';
import { TabButtons } from '../Button/TabButtons';
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
      <TabButtons 
        tabs={formTabs}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />
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

ContactFormTabs.propTypes = {
  values: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  submitted: PropTypes.bool.isRequired,
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default memo(ContactFormTabs);