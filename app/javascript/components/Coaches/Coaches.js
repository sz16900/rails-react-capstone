import React, { useEffect, useState, Fragment } from 'react';
import axios from 'axios';
import Coach from './Coach';

const Airlines = () => {
  const [coaches, setCoaches] = useState([]);
  useEffect(() => {
    axios
      .get('/api/v1/coaches.json')
      .then((resp) => setCoaches(resp.data.data))
      .catch((err) => console.log(err));
  }, [coaches.length]);

  const grid = coaches.map((item) => {
    return (
      <Coach key={item.attributes.name} attributes={item.attributes}></Coach>
    );
  });

  return (
    <div
      id="home"
      className={'text-center w-full'}
      style={{ marginLeft: '20%' }}
    >
      <div className="mt-24">
        <h1 className="text-5xl font-bold">Our Coaches</h1>
        <p className="text-gray">Please select a Coach</p>
      </div>
      <div id="grid" className={'grid grid-cols-1 gap-4 p-6'}>
        {grid}
      </div>
    </div>
  );
};

export default Airlines;
