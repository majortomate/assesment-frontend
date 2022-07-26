import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProduct } from '../services/products';
import './styles.scss';
import rating from '../services/rating';

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    getProduct(id)
      .then((data) => setProduct(data));
  }, []);

  return (
    <div className="product-detail__container">
      {
       product.id === Number(id)
         ? (
           <article className="product-detail" key={product.id}>
             <div className="product-detail__image">
               <img src={product.image} alt={product.title} />
             </div>
             <div className="product-detail__info">
               <h1 className="product-detail__title">{product.title}</h1>
               <span className="product-detail__price">
                 $
                 {' '}
                 {product.price}
               </span>
               <span className="product-detail__category">{product.category}</span>
               <p className="product-detail__description">{product.description}</p>
               <span className="product-detail_rating">
                 {product.rating.rate}
                 {' / '}
                 {rating(Math.round(product.rating.rate))}
               </span>
             </div>
           </article>
         )
         : null
      }
    </div>
  );
}

export default ProductDetail;
