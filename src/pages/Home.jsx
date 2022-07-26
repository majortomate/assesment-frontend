import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import { getProducts } from '../services/products';

function Home() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    getProducts()
      .then((data) => setProduct(data));
  }, []);

  return (
    <div>
      <ProductCard product={product} />
    </div>
  );
}

export default Home;
