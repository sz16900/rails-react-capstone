import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ReviewList extends Component {
  state = {
    reviews: [],
  };

  componentDidMount() {
    fetch('/api/v1/reviews')
      .then((reviews) => reviews.json())
      .then((reviews) => {
        this.setState({
          reviews: reviews,
        });
      });
  }

  renderReviews = () => {
    return this.state.reviews.map((review) => {
      return (
        <div key={review.id}>
          {review.title} - {review.description}
        </div>
      );
    });
  };

  render() {
    return (
      <div>
        ReviewList Component
        {this.renderReviews()}
        <Link to="/reviews/new">Add a New Review</Link>
      </div>
    );
  }
}

export default ReviewList;
