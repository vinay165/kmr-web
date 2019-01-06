import React, { useState } from 'react';
import {useReducer} from '../../store';
import Button from '../../components/Button';

const Admin = () => {
  const [product, setProduct] = useState('');
  const [state, dispatch] = useReducer();
  const {products} = state;
  
  const handleProductChange = (e) => {
    setProduct(e.target.value)
  }

  const handleProductSubmit = () => {
    const updatedProducts = [...products, product];
    products.push(product);
    dispatch({products: updatedProducts});
    setProduct('')
  }

  const handleProductDelete = (product) => {
    const filteredProducts = products.filter(item => item !== product);
    dispatch({products: filteredProducts});
  }

  return (
    <div className="admin">
      <ul>
        {
          products.map(product => (
            <li key={product}>
              <span>{product}</span>
              <Button
                label="delete"
                customClass="button-negative"
                handleClick={() => handleProductDelete(product)} />
            </li>
          ))
        }
      </ul>
      <input
        value={product}
        className="input"
        onChange={handleProductChange} />
      <Button
        label="Add"
        customClass="button-positive"
        handleClick={handleProductSubmit} />
    </div>
  )
}

export default Admin;