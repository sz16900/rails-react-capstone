import React from 'react';

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
      <div className="flex justify-between mt-8">
        <button className="bg-yellow hover:bg-yellowHover text-white font-bold py-2 px-4 rounded">
          Like!
        </button>
        <button className="bg-green hover:bg-greenHover text-white font-bold py-2 px-4 rounded">
          Review!
        </button>
      </div>
    </div>
  );
};

export default Info;
