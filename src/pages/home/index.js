import React from 'react';
import {useReducer} from '../../store';
import ProductCard from '../../components/ProductCard';
import './index.scss';

const Home = () => {
  const [state] = useReducer();
  const {products=[]} = state;

  const handlePurchase = () => {

  }

  return (
    <div className="home">
      <ul className="home__products">
        {
          products.map((product, i) => (
            <li key={i}>
              <ProductCard 
                {...product} 
                actionLabel="Purchase"
                actionBtnClass="button-positive"
                handleProductAction={handlePurchase} />
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default Home;