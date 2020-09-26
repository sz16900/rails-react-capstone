import React from 'react';
import Review from './Review';

const Info = (props) => {
  const {
    name,
    avg_score,
    likes,
    price,
    description,
    tagline,
  } = props.attributes;
  return (
    <div className="w-3/5 p-4  ">
      <div className="my-12">
        <p className="text-3xl font-bold text-right">{name}</p>
        <p className="text-sm text-gray text-right">{tagline}</p>
      </div>
      <div>
        <div className="bg-grayInfo flex justify-between p-3">
          <p>Price per Hour:</p>
          <p>{price}</p>
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
      </div>
      <div>{props.reviews}</div>
    </div>
  );
};

export default Info;
