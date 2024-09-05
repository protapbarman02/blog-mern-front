import React from 'react';
import PropTypes from 'prop-types';

const Image = ({
 alt, src
}) => {
    return (
        <img 
        alt={alt}
        src={src}
        />
    );
};

Image.propTypes = {
    alt: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired
};

export default Image;