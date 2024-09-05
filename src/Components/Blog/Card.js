import React from 'react';
import PropTypes from 'prop-types';

const Card = ({
  text
}) => {
  return (
    <card>
      text = {text}
    </card>
  );
};

Card.propTypes = {
  text: PropTypes.string.isRequired,

};

export default Card;