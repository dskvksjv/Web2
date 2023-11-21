import React from 'react';
import ProductItem from './ProductItem';
import '../css/ProductList.css';

const ProductList = ({ products, onCheckboxChange }) => {
  return (
    <div>
      <h2>Список Товарів</h2>
      <ul>
        {products.map(product => (
          <ProductItem
            key={product.id}
            product={product}
            onCheckboxChange={onCheckboxChange}
          />
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
