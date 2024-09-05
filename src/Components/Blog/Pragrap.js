import React from 'react';
import PropTypes from 'prop-types';

const Pragrap = ({
    text
}) => {
    return (
        <pragrap>
            {text}
        </pragrap>
    );
};

Pragrap.propTypes = {
    text: PropTypes.string.isRequired,

};

export default Pragrap;