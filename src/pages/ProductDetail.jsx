import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProduct } from '../services/products';

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    getProduct(id)
      .then((data) => setProduct(data));
  }, []);

  return (
    <div>
      {
       product.id === Number(id)
         ? (
           <article className="product-detail" key={product.id}>
             <div className="product-detail__image">
               <img src={product.image} alt={product.title} />
             </div>
             <h1 className="product-detail__title">{product.title}</h1>
             <div className="product-detail__footer">
               <span className="product-detail__price">
                 $
                 {' '}
                 {product.price}
               </span>
               <p className="product-detail__category">{product.category}</p>
               <p className="product-detail__price">{product.description}</p>
               <span className="product-detail_rating">{product.rating.rate}</span>
             </div>
           </article>
         )
         : null
      }
    </div>
  );
}

export default ProductDetail;
