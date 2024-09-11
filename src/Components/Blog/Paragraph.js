import React from 'react';
import PropTypes from 'prop-types';

const Paragraph = ({ text }) => {
  return (
    <p className="card-paragraph">{text}</p>
  );
};

Paragraph.propTypes = {
  text: PropTypes.string.isRequired
};

export default Paragraph;