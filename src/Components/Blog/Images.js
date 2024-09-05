import React from 'react';
import PropTypes from 'prop-types';

const Images = ({
    text
}) => {
    return (
        <Images>
            {text}
        </Images>
    );
};

Images.propTypes = {
    text: PropTypes.string.isRequired,

};

export default Images;