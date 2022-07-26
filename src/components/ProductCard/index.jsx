import React from 'react';
import './styles.scss';

function ProductCard(props) {
  // eslint-disable-next-line react/prop-types
  const { product } = props;
  return (
    <div className="products__container">
      {
        // eslint-disable-next-line react/prop-types
        product.map((item) => (item
          ? (
            <article className="product" key={item.id}>
              <div className="product__image">
                <img src={item.image} alt={item.title} />
              </div>
              <h1 className="product__title">{item.title}</h1>
              <div className="product__footer">
                <span className="product__time">Product time</span>
                <button type="button" className="product__btn">Go to detail</button>
              </div>
            </article>
          )
          : null))
      }
    </div>

  );
}

export default ProductCard;
