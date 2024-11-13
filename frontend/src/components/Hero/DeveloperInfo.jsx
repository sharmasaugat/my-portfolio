
import React, { memo, useMemo } from 'react';
import PropTypes from 'prop-types';

const DeveloperInfo = memo(({ info }) => {
  const formattedInfo = useMemo(() => 
    JSON.stringify(info, null, 2), [info]
  );

  return (
    <div className="code-summary" data-testid="developer-info">
      <pre className="text-sm text-[#64FFDA]/90">
        <code>{`const developer = ${formattedInfo}`}</code>
      </pre>
    </div>
  );
});

DeveloperInfo.propTypes = {
  info: PropTypes.shape({
    name: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    experience: PropTypes.string.isRequired,
    passion: PropTypes.string.isRequired,
    expertise: PropTypes.arrayOf(PropTypes.string).isRequired,
    impact: PropTypes.shape({
      projects: PropTypes.string.isRequired,
      performance: PropTypes.string.isRequired,
      teamGrowth: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default DeveloperInfo;