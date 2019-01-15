import React from 'react';
import { connect } from 'react-redux';
import { productsSelector } from '../../selectors';
import ProductCard from '../../components/ProductCard';
import './index.scss';

const Home = ({ products }) => {

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

const mapStateToProps = (state) => ({
  products: productsSelector(state)
})

export default connect(mapStateToProps)(Home);