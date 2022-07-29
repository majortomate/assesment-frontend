/* eslint-disable react/prop-types */
import React from 'react';
import ProductCard from '../ProductCard';

function ProductList({ products }) {
  return (
    <div className="products__container">
      {products.map((item) => (item
      && (
        <ProductCard item={item} />
      )
      ))}
    </div>

  );
}

export default ProductList;
