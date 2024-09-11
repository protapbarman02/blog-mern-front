import React from 'react';
import PropTypes from 'prop-types';

const Image = ({ src, alt }) => {
  return (
    <img src={src} alt={alt} className="card-image" />
  );
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
};

export default Image;