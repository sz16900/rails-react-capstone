import React from 'react';

const Info = (props) => {
  console.log(props);
  const {
    name,
    avg_score,
    likes,
    price,
    description,
    tagline,
  } = props.attributes;
  return (
    <div className="w-1/3 p-4 mt-24 ">
      <p className="text-3xl font-bold text-right">{name}</p>
      <p className="text-sm text-gray text-right">{tagline}</p>
      <div className="bg-grayInfo flex justify-between">
        <p>Price per Hour:</p>
        <p>{price}</p>
      </div>
      <p>{description}</p>
      <p>{avg_score}</p>
      <p>{likes}</p>
    </div>
  );
};

export default Info;
