import React from 'react';
import PropTypes from 'prop-types';

const Card = ({
  text,img
}) => {
  return (
    <card>
      text = {text}
      img={img}
    </card>
  );
};

Card.propTypes = {
  text: PropTypes.string.isRequired,
  img: PropTypes.object.isRequired,


};

export default Card;