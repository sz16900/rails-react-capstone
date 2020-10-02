import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Rating from '../Rating/Rating';

const Coach = props => {
  const { attributes } = props;
  const {
    name,
    tagline,
    slug,
    imageUrl = attributes.image_url,
    score = attributes.avg_score,
  } = attributes;

  return (
    <Link to={`/coaches/${slug}`}>
      <div id="card">
        <div id="coach-logo">
          <img src={imageUrl} alt={name} width="150" className="inline " />
        </div>
        <h1 id="coach-name" className="mt-8 mb-4 text-lg font-bold">
          {name}
        </h1>
        <Rating id="rating" score={score} />

        <div id="tagline" className="text-sm text-gray">
          {tagline}
        </div>
      </div>
    </Link>
  );
};

Coach.propTypes = {
  attributes: PropTypes.shape({
    name: PropTypes.string.isRequired,
    tagline: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    score: PropTypes.string.isRequired,
    image_url: PropTypes.string.isRequired,
    avg_score: PropTypes.string.isRequired,
  }).isRequired,
};

export default Coach;
