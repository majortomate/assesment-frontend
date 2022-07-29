/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';
import { randomNumber, setNumbers } from '../../services/randomNumber';

function ProductCard({ item }) {
  const [counter, setCounter] = useState(randomNumber);

  useEffect(() => {
    const timer = counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);

  return (
    <article className="product" key={item.id}>
      <div className="product__image">
        <img src={item.image} alt={item.title} />
      </div>
      <h1 className="product__title">{item.title}</h1>
      <div className="product__footer">
        <span className="product__time">{setNumbers(counter)}</span>
        <Link to={`products/${item.id}`} className={!counter ? 'product__btn disable-clic' : 'product__btn'}>Go to detail</Link>
      </div>
    </article>
  );
}

export default ProductCard;
