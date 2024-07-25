import React from 'react';
import PropTypes from 'prop-types';


const CategoryCard = ({ category }) => {
  return (
    <div className="category-card">
      <img src={category.image} alt={category.name} />
      <h3>{category.name}</h3>
    </div>
  );
};

CategoryCard.propTypes = {
  category: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default CategoryCard;
