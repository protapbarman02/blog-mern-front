import React from 'react';
import PropTypes from 'prop-types';

const DynamicButton = ({
  label,
  onClick,
  style = {},
  className = '',
  disabled = false
}) => {
  return (
    <button
      onClick={onClick}
      style={style}
      className={`dynamic - button ${className}`}
disabled = { disabled }
  >
  { label }
    </button >
  );
};

DynamicButton.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  style: PropTypes.object,
  className: PropTypes.string,
  disabled: PropTypes.bool
};

export default DynamicButton;