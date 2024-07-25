import React from 'react';
import ProductCard from './ProductCard';
import PropTypes from 'prop-types';


const FeaturedProducts = ({ products }) => {
  return (
    <section className="featured-products">
      <h2>Featured Products</h2>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

FeaturedProducts.propTypes = {
    products: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
      })
    ).isRequired,
  };
  

export default FeaturedProducts;
