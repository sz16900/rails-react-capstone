import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import Header from './Header';
import ReviewForm from './ReviewForm';
import Review from './Review';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
`;

const Column = styled.div`
  background: #fff;
  max-width: 50%;
  width: 50%;
  float: left;
  height: 100vh;
  overflow-x: scroll;
  overflow-y: scroll;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  &:last-child {
    border-top: 1px solid rgba(255, 255, 255, 0.5);
  }
`;

const Main = styled.div`
  padding-left: 60px;
`;

const Coach = (props) => {
  const [coach, setCoach] = useState({});
  const [review, setReview] = useState({});
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const slug = props.match.params.slug;
    const url = `/api/v1/coaches/${slug}`;

    axios
      .get(url)
      .then((resp) => {
        setCoach(resp.data);
        setLoaded(true);
        console.log(resp.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleChange = (e) => {
    e.preventDefault();
    setReview(Object.assign({ ...review, [e.target.name]: e.target.value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const csrfToken = document.querySelector('[name=csrf-token]').content;
    console.log(csrfToken);
    axios.defaults.headers.common['X_CSRF_TOKEN'] = csrfToken;

    const coach_id = coach.data.id;
    axios
      .post('/api/v1/reviews', { review, coach_id })
      .then((resp) => {
        const included = [...coach.included, resp.data.data];
        setCoach({ ...coach, included });
        setReview({ title: '', description: '', score: 0 });
      })
      .catch((err) => console.log(err));
  };

  const setRating = (score, e) => {
    e.preventDefault();
    setReview({ ...review, score });
  };

  // Again, this basically says, wait until the everyting is loaded to begin mapping (looping over the list of reviews)
  let included;
  let reviews = [];
  let appointments = [];
  if (loaded && coach.included) {
    included = coach.included.map((item, index) => {
      if (item.type === 'review') {
        reviews.push(<Review key={index} attributes={item.attributes} />);
      } else if (item.type === 'appointment') {
        appointments.push('something else');
      }
    });
  }

  return (
    <Wrapper>
      {loaded && (
        <Fragment>
          <Column>
            <Main>
              {console.log(reviews)}
              <Header
                attributes={coach.data.attributes}
                reviews={reviews.length}
              />
              {reviews}
            </Main>
          </Column>
          <Column>
            <ReviewForm
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              attributes={coach.data.attributes}
              setRating={setRating}
              review={review}
            />
          </Column>
        </Fragment>
      )}
    </Wrapper>
  );
};

export default Coach;
