import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const RatingContainer = styled.div`
  text-align: center;
  border-radius: 4px;
  font-size: 20px;
  padding: 40px 0 10px 0;
  border: 1px solid #e6e6e6;
  margin: 20px 0;
  padding: 20px;
  background: #fff;
`;

const RatingBox = styled.div`
  background: #fff;
  display: flex;
  width: 100%;
  justify-content: center;
  overflow: hidden;
  flex-direction: row-reverse;
  position: relative;
  input {
    display: none;
  }
  label {
    cursor: pointer;
    width: 40px;
    height: 40px;
    margin-top: auto;
    background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='126.729' height='126.73'%3e%3cpath fill='%23e3e3e3' d='M121.215 44.212l-34.899-3.3c-2.2-.2-4.101-1.6-5-3.7l-12.5-30.3c-2-5-9.101-5-11.101 0l-12.4 30.3c-.8 2.1-2.8 3.5-5 3.7l-34.9 3.3c-5.2.5-7.3 7-3.4 10.5l26.3 23.1c1.7 1.5 2.4 3.7 1.9 5.9l-7.9 32.399c-1.2 5.101 4.3 9.3 8.9 6.601l29.1-17.101c1.9-1.1 4.2-1.1 6.1 0l29.101 17.101c4.6 2.699 10.1-1.4 8.899-6.601l-7.8-32.399c-.5-2.2.2-4.4 1.9-5.9l26.3-23.1c3.8-3.5 1.6-10-3.6-10.5z'/%3e%3c/svg%3e");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 76%;
    transition: 0.3s;
  }
  input:checked ~ label,
  input:checked ~ label ~ label {
    background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='126.729' height='126.73'%3e%3cpath fill='%23fcd93a' d='M121.215 44.212l-34.899-3.3c-2.2-.2-4.101-1.6-5-3.7l-12.5-30.3c-2-5-9.101-5-11.101 0l-12.4 30.3c-.8 2.1-2.8 3.5-5 3.7l-34.9 3.3c-5.2.5-7.3 7-3.4 10.5l26.3 23.1c1.7 1.5 2.4 3.7 1.9 5.9l-7.9 32.399c-1.2 5.101 4.3 9.3 8.9 6.601l29.1-17.101c1.9-1.1 4.2-1.1 6.1 0l29.101 17.101c4.6 2.699 10.1-1.4 8.899-6.601l-7.8-32.399c-.5-2.2.2-4.4 1.9-5.9l26.3-23.1c3.8-3.5 1.6-10-3.6-10.5z'/%3e%3c/svg%3e");
  }
  input:not(:checked) ~ label:hover,
  input:not(:checked) ~ label:hover ~ label {
    background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='126.729' height='126.73'%3e%3cpath fill='%23d8b11e' d='M121.215 44.212l-34.899-3.3c-2.2-.2-4.101-1.6-5-3.7l-12.5-30.3c-2-5-9.101-5-11.101 0l-12.4 30.3c-.8 2.1-2.8 3.5-5 3.7l-34.9 3.3c-5.2.5-7.3 7-3.4 10.5l26.3 23.1c1.7 1.5 2.4 3.7 1.9 5.9l-7.9 32.399c-1.2 5.101 4.3 9.3 8.9 6.601l29.1-17.101c1.9-1.1 4.2-1.1 6.1 0l29.101 17.101c4.6 2.699 10.1-1.4 8.899-6.601l-7.8-32.399c-.5-2.2.2-4.4 1.9-5.9l26.3-23.1c3.8-3.5 1.6-10-3.6-10.5z'/%3e%3c/svg%3e");
  }
`;

const RatingBoxTitle = styled.div`
  font-size: 20px;
  padding-bottom: 20px;
  font-weight: bold;
`;
const ReviewForm = props => {
  const {
    review,
    setRating,
    handleSubmitReview,
    handleChangeReview,
    error,
  } = props;
  const { title, description } = review;
  const scre = review.score;
  const ratingOptions = [5, 4, 3, 2, 1].map(score => (
    /* eslint-disable */
    <>
      <input
        type="radio"
        value={score}
        name="rating"
        id={`rating-${score}`}
        checked={scre === score}
      />
      <label onClick={setRating.bind(this, score)} />
    </>
    /* eslint-enable */
  ));
  return (
    <div id="review-form-wrapper" className="w-full max-w-xs">
      <form
        onSubmit={handleSubmitReview}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 "
      >
        <div className="mb-4">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={handleChangeReview}
            type="text"
            name="title"
            placeholder="Review Title"
            value={title}
          />
        </div>
        <div>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={handleChangeReview}
            type="text"
            name="description"
            placeholder="Review Description"
            value={description}
          />
        </div>
        <div>
          <RatingContainer id="rating-container">
            <RatingBoxTitle id="rating-box-title">
              Rate this Coach!
            </RatingBoxTitle>
            <RatingBox id="rating-box">{ratingOptions}</RatingBox>
          </RatingContainer>
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-green hover:bg-greenHover text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Create Review
          </button>

          {error && <div id="error">{error}</div>}
        </div>
      </form>
    </div>
  );
};

ReviewForm.propTypes = {
  error: PropTypes.string.isRequired,
  handleSubmitReview: PropTypes.func.isRequired,
  handleChangeReview: PropTypes.func.isRequired,
  setRating: PropTypes.shape({
    bind: PropTypes.func,
  }).isRequired,
  review: PropTypes.shape({
    score: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};

export default ReviewForm;
