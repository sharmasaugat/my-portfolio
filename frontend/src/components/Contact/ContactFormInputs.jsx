
import PropTypes from 'prop-types';

export const ContactFormInputs = ({ inputs, values, handleChange, loading }) => (
  <>
    {inputs.map((input) => (
      <div key={input.name}>
        <label className="block text-gray-300 mb-2">{input.label}</label>
        {input.type === 'textarea' ? (
          <textarea
            name={input.name}
            value={values[input.name]}
            onChange={handleChange}
            placeholder={input.placeholder}
            className={`w-full bg-gray-700/50 rounded-lg p-3 text-white ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            rows={4}
            disabled={loading}
          />
        ) : (
          <input
            type={input.type}
            name={input.name}
            value={values[input.name]}
            onChange={handleChange}
            placeholder={input.placeholder}
            className={`w-full bg-gray-700/50 rounded-lg p-3 text-white ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={loading}
          />
        )}
      </div>
    ))}
  </>
);

ContactFormInputs.propTypes = {
  inputs: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      placeholder: PropTypes.string
    })
  ).isRequired,
  values: PropTypes.shape({}).isRequired,
  handleChange: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired
};