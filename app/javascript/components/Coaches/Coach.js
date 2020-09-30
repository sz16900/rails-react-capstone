/* eslint-disable */


import React from 'react';
import { Link } from 'react-router-dom';
import Rating from '../Rating/Rating';

const Coach = props => (
  <Link to={`/coaches/${props.attributes.slug}`}>
    <div id="card ">
      <div id="coach-logo">
        <img
          src={props.attributes.image_url}
          alt={props.attributes.name}
          width="150"
          className="inline "
        />
      </div>
      <h1 id="coach-name" className="mt-8 mb-4 text-lg font-bold">
        {props.attributes.name}
      </h1>
      <Rating id="rating" score={props.attributes.avg_score} />

      <div id="tagline" className="text-sm text-gray">
        {props.attributes.tagline}
      </div>
    </div>
  </Link>
);

export default Coach;


/* eslint-enable */
