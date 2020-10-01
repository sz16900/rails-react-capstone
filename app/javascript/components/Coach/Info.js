import React from 'react';
import PropTypes from 'prop-types';

const Info = props => {
  const { attributes, reviews } = props;
  const {
    name,
    likes,
    price,
    description,
    tagline,
    score = attributes.avg_score,
  } = attributes;
  return (
    <>
      <div className="my-12">
        <p className="text-3xl font-bold text-right">{name}</p>
        <p className="text-sm text-gray text-right">{tagline}</p>
      </div>
      <div>
        <div className="bg-grayInfo flex justify-between p-3">
          <p>Price per Hour:</p>
          <p>{`$${price}`}</p>
        </div>
        <div className="flex justify-between p-3">
          <p>{description}</p>
        </div>
        <div className="bg-grayInfo flex justify-between p-3">
          <p>Rating:</p>
          <p>{`${score} / 5`}</p>
        </div>
        <div className=" flex justify-between p-3">
          <p>Likes:</p>
          <p>{likes}</p>
        </div>
        <div className="bg-grayInfo flex justify-between p-3">
          <p>Reviews:</p>
          <p>{reviews}</p>
        </div>
      </div>
    </>
  );
};

Info.propTypes = {
  reviews: PropTypes.number.isRequired,
  attributes: PropTypes.shape({
    name: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    tagline: PropTypes.string.isRequired,
    avg_score: PropTypes.number.isRequired,
    score: PropTypes.number.isRequired,
  }).isRequired,
};

export default Info;
