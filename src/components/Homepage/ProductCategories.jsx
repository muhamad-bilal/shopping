import React from 'react';
import CategoryCard from './CategoryCard';

const ProductCategories = () => {
  return (
    <section className="product-categories">
      {/* Array of category data */}
      {categories.map((category) => (
        <CategoryCard key={category.id} category={category} />
      ))}
    </section>
  );
};

export default ProductCategories;
