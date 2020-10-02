import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Rating from '../Rating/Rating';

const Card = styled.div`
  border-radius: 4px;
  border: 1px solid #e6e6e6;
  padding: 20px;
  margin: 0px 0px 20px 0px;
  position: relative;
  margin-right: 12px;
`;

const Title = styled.div`
  padding: 20px 0px 0px 0px;
  font-family: 'Poppins-Bold';
  font-size: 18px;
`;

const Description = styled.div`
  padding: 0 0 20px 0;
  font-size: 14px;
`;

const RatingContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const Review = props => {
  const { attributes } = props;
  const { score, title, description } = attributes;
  return (
    <Card>
      <RatingContainer>
        <Rating score={score} />
      </RatingContainer>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Card>
  );
};

Review.propTypes = {
  attributes: PropTypes.shape({
    score: PropTypes.number,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default Review;
