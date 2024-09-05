import React from 'react';
import PropTypes from 'prop-types';

const Heading = ({
    text
}) => {
    return (
        <Heading>
            {text}
        </Heading>
    );
};

Heading.propTypes = {
    text: PropTypes.string.isRequired,

};

export default Heading;