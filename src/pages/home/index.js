import React from 'react';
import {useReducer} from '../../store';

const Home = () => {
  const [state] = useReducer();
  const {products=[]} = state;

  return (
    <div className="home">
      <ul>
        {
          products.map(product => (
            <li key={product}>
              <span>{product}</span>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default Home;