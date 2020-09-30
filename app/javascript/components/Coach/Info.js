/* eslint-disable */

import React, { Fragment } from 'react';

const Info = props => {
  const {
    name,
    avg_score,
    likes,
    price,
    description,
    tagline,
  } = props.attributes;
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
          <p>{`${avg_score} / 5`}</p>
        </div>
        <div className=" flex justify-between p-3">
          <p>Likes:</p>
          <p>{likes}</p>
        </div>
        <div className="bg-grayInfo flex justify-between p-3">
          <p>Reviews:</p>
          <p>{props.reviews}</p>
        </div>
      </div>
    </>
  );
};

export default Info;

/* eslint-enable */
