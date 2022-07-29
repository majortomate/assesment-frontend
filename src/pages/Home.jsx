import React, { useEffect, useState } from 'react';
import ProductList from '../components/ProductList';
import { getProducts } from '../services/products';

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <ProductList products={products} />
    </div>
  );
}

export default Home;
