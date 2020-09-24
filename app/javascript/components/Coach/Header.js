import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 50px 100px 50px 0px;
  font-size: 30px;
  img {
    margin-right: 10px;
    height: 60px;
    width: 60px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 100%;
    margin-bottom: -8px;
  }
`;

const UserReviewCount = styled.div`
  font-size: 18px;
  padding: 10px 0;
`;

const ScoreOutOf = styled.div`
  padding-top: 12px;
  font-size: 18px;
  font-weight: bold;
`;

const Header = (props) => {
  const { name, image_url, avg_score } = props.attributes;
  return (
    <Wrapper>
      <h1>
        <img src={image_url} alt={name} />
        {name}
      </h1>
      <div>
        <UserReviewCount>{props.reviews} Reviews</UserReviewCount>
        <div src="starRating"></div>
        <ScoreOutOf>{avg_score} out of 5</ScoreOutOf>
      </div>
    </Wrapper>
  );
};

export default Header;
