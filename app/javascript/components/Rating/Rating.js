import React from 'react';
import './Rating.css';
import PropTypes from 'prop-types';

const Rating = props => {
  let { score } = props;
  score = (score / 5) * 100;

  return (
    <span className="star-wrapper">
      <span className="stars" style={{ width: `${score}%` }} />
    </span>
  );
};

Rating.propTypes = {
  score: PropTypes.number,
}.isRequired;

export default Rating;
