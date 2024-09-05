import React from 'react';
import PropTypes from 'prop-types';

const CardBody = ({
    text
}) => {
    return (
        <CardBody>
            {text}
        </CardBody>
    );
};

CardBody.propTypes = {
    text: PropTypes.string.isRequired,

};

export default CardBody;