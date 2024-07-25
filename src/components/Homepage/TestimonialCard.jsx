import React from 'react';
import PropTypes from 'prop-types';


const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="testimonial-card">
      <p>{testimonial.text}</p>
      <div className="testimonial-author">
        <strong>{testimonial.author}</strong>
        <span>{testimonial.rating}</span>
      </div>
    </div>
  );
};

TestimonialCard.propTypes = {
    testimonial: PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      rating: PropTypes.number,
    }).isRequired,
  };

export default TestimonialCard;
