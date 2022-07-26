import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

function ProductCard(props) {
  // eslint-disable-next-line react/prop-types
  const { products } = props;
  const [time, setTime] = useState(false);
  const random = Math.floor((Math.random() * 100)) * 100;

  setTimeout(() => {
    setTime(true);
  }, random);

  return (
    <div className="products__container">
      {
        // eslint-disable-next-line react/prop-types
        products.map((item) => (item
          ? (
            <article className="product" key={item.id}>
              <div className="product__image">
                <img src={item.image} alt={item.title} />
              </div>
              <h1 className="product__title">{item.title}</h1>
              <div className="product__footer">
                <span className="product__time">{item.rating.count}</span>
                <Link to={`products/${item.id}`} className={time ? 'product__btn disable-clic' : 'product__btn'}>Go to detail</Link>
              </div>
            </article>
          )
          : null))
      }
    </div>

  );
}

export default ProductCard;
