import React from 'react';
import TestimonialCard from './TestimonialCard';
import PropTypes from 'prop-types';


const Testimonials = ({ testimonials }) => {
  return (
    <section className="testimonials">
      <h2>What Our Customers Say</h2>
      <div className="testimonial-slider">
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} />
        ))}
      </div>
    </section>
  );
};

Testimonials.propTypes = {
    testimonials: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        rating: PropTypes.number,
      })
    ).isRequired,
  };

export default Testimonials;
