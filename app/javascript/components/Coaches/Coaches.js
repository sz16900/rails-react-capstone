import React, { useEffect, useState, Fragment } from 'react';
import axios from 'axios';
import Coach from './Coach';
import styled from 'styled-components';

const Home = styled.div`
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  max-width: 1200px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  width: 100%;
  padding: 20px;
  > div {
    background-color: #fff;
    border-radius: 5px;
    padding: 20px;
  }
`;

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
    <Home>
      {/* <Header /> */}
      <Grid>{grid}</Grid>
    </Home>
  );
};

export default Airlines;
