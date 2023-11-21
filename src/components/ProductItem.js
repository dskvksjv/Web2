import React from 'react';
//import '../css/ProductList.css';

const ProductItem = ({ product, onCheckboxChange }) => {
  return (
    <li>
      <input
        type="checkbox"
        checked={product.selected}
        onChange={() => onCheckboxChange(product.id)}
      />
      <span>{product.name}</span>
      <span>{product.price}</span>
    </li>
  );
}

export default ProductItem;
