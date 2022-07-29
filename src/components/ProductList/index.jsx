import React from 'react';
import ProductCard from '../ProductCard';

function ProductList({ products }) {
  return (
    <div className="products__container">
      {products.map((item) => (item
      && (
        <ProductCard item={item} key={item.id} />
      )
      ))}
    </div>

  );
}
ProductList.defaultProps = {
  products: [],
};
ProductList.propTypes = {
  products: [],
};

export default ProductList;
