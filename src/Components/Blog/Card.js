import React from 'react';
import PropTypes from 'prop-types';

const Card = ({
  text
}) => {
  return (
    <Card>
      {text}
    </Card>
  );
};

Card.propTypes = {
  text: PropTypes.string.isRequired,

};

export default Card;