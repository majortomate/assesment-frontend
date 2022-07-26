import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import { getProducts } from '../services/products';

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <ProductCard products={products} />
    </div>
  );
}

export default Home;
