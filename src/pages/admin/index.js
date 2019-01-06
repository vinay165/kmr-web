import React from 'react';
import { useReducer } from '../../store';
import ProductCard from '../../components/ProductCard';
import ProductCreateCard from '../../components/ProductCreateCard';
import './index.scss';

const Admin = () => {
  const [state, dispatch] = useReducer();
  const { products } = state;

  const handleProductDelete = (product) => {
    const filteredProducts = products.filter(item => item.name !== product);
    dispatch({ products: filteredProducts });
  }

  return (
    <div className="admin">
      <ul className="admin__products">
        {
          products.map((product, i) => (
            <li key={i}>
              <ProductCard
                {...product}
                actionLabel="Delete"
                actionBtnClass="button-negative"
                handleProductAction={handleProductDelete} />
            </li>
          ))
        }
        <li>
          <ProductCreateCard
            actionLabel="Create"
            actionBtnClass="button-positive" />
        </li>
      </ul>
    </div>
  )
}

export default Admin;