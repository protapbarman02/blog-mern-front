import React from 'react';
import PropTypes from 'prop-types';

const Paragraph = ({
    text, className
}) => {
    return (
        <p className={className}>
            {text}
        </p>
    );
};

Paragraph.propTypes = {
    text: PropTypes.string.isRequired,
    className: PropTypes.string
};

export default Paragraph;