import React from 'react';
import PropTypes from 'prop-types';

const CardBody = ({
    text
}) => {
    return (
        <cardBody>
            {text}
        </cardBody>
    );
};

CardBody.propTypes = {
    text: PropTypes.string.isRequired,

};

export default CardBody;