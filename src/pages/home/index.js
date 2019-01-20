import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { productsSelector, cartSelector } from '../../selectors';
import { updateCart } from '../../actions';
import ProductCard from '../../components/ProductCard';
import PurchaseModal from '../../components/PurchaseModal';
import './index.scss';

const Home = ({ products, cart, addProductToCart }) => {
  const [isPurchaseModalOpen, openPurchaseModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState({});
  
  const handlePurchase = (product) => {
    openPurchaseModal(true);
    setSelectedProduct(product);
  }

  const handleAddToCart = (product) => {
    const updatedCart = [...cart, product];
    addProductToCart(updatedCart);
    openPurchaseModal(false);
  }

  return (
    <Fragment>
      <div className="home">
        <ul className="home__products">
          {
            products.map((product, i) => (
              <li key={i}>
                <ProductCard
                  {...product}
                  actionLabel="Purchase"
                  actionBtnClass="button-positive"
                  handleProductAction={() => handlePurchase(product)} />
              </li>
            ))
          }
        </ul>
      </div>
      <PurchaseModal
        product={selectedProduct}
        isOpen={isPurchaseModalOpen}
        handleClose={() => openPurchaseModal(false)}
        handlePurchaseModalAction={handleAddToCart}
        purchaseModalActionLabel="Add To Cart" />
    </Fragment>
  )
}

const mapStateToProps = (state) => ({
  products: productsSelector(state),
  cart: cartSelector(state)
});

const mapDispatchToProps = (dispatch) => ({
  addProductToCart: data => dispatch(updateCart(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);