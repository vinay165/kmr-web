import React from 'react';
import { connect } from 'react-redux';
import { productsSelector } from '../../selectors';
import { updateProducts } from '../../actions';
import ProductCard from '../../components/ProductCard';
import ProductCreateCard from '../../components/ProductCreateCard';
import './index.scss';

const Admin = ({products, onUpdatedProducts}) => {
  const handleProductDelete = (productName) => {
    const filteredProducts = products.filter(item => item.name !== productName);
    onUpdatedProducts(filteredProducts);
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

const mapStateToProps = (state) => ({
  products: productsSelector(state)
})

const mapDispatchToProps = (dispatch) => ({
  onUpdatedProducts: (data) => dispatch(updateProducts(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Admin);