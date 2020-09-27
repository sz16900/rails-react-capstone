import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import ReviewForm from './ReviewForm';
import Review from './Review';
import Info from './Info';

const Coach = (props) => {
  const [coach, setCoach] = useState({});
  const [review, setReview] = useState({});
  const [loaded, setLoaded] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const slug = props.match.params.slug;
    const url = `/api/v1/coaches/${slug}`;

    axios
      .get(url)
      .then((resp) => {
        setCoach(resp.data);
        setLoaded(true);
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
    axios.defaults.headers.common['X_CSRF_TOKEN'] = csrfToken;

    const coach_id = coach.data.id;
    axios
      .post('/api/v1/reviews', { review, coach_id })
      .then((resp) => {
        const included = [...coach.included, resp.data.data];
        setCoach({ ...coach, included });
        setReview({ title: '', description: '', score: 0 });
        setShowModal(false);
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

  if (showModal) {
    return (
      <div className="bg-black flex w-screen" style={{ marginLeft: '20%' }}>
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
          <ReviewForm
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            attributes={coach.data.attributes}
            setRating={setRating}
            review={review}
          />
        </div>
        <div className="opacity-25 fixed inset-0 z-40 "></div>
      </div>
    );
  } else {
    return (
      <div className="flex w-screen" style={{ marginLeft: '20%' }}>
        {loaded && (
          <div className="flex w-full ">
            <div className=" w-2/5 h-full overflow-y-auto p-4">
              <img
                className="object-contain h-64 w-full my-8"
                src={coach.data.attributes.image_url}
              />
              <div>{reviews}</div>
            </div>
            <div className="w-3/5 p-4">
              <Info
                attributes={coach.data.attributes}
                reviews={reviews.length}
              ></Info>
              <div className="flex justify-between mt-8">
                <button className="bg-yellow hover:bg-yellowHover text-white font-bold py-2 px-4 rounded">
                  Like!
                </button>
                <button
                  className="bg-green text-white font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                  type="button"
                  style={{ transition: 'all .15s ease' }}
                  onClick={() => setShowModal(true)}
                >
                  Review!
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
};

export default Coach;
