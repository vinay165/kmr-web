import React, { lazy, Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { cartSelector, ordersSelector } from '../../selectors';
import { updateCart, updateOrder } from '../../actions';
import Button from '../../components/Button';
import PurchaseModal from '../../components/PurchaseModal';
const Checkout = lazy(() => import('../../components/Checkout'));
import Conditional from '../../components/Conditional';
import './index.scss';

const Cart = ({ cart, onUpdateCart, onUpdateOrder, orders }) => {
  const [isPurchaseModalOpen, openPurchaseModal] = useState(false);
  const [editableProduct, setEditableProduct] = useState({});
  const [isCheckout, setIsCheckout] = useState(false);

  const handleEdit = (product) => {
    openPurchaseModal(true);
    setEditableProduct(product);
  }

  const handleRemove = (product) => {
    const updatedCart = cart.filter(item => item.name !== product.name);
    onUpdateCart(updatedCart);
  }

  const handleEditCartItem = (product) => {
    const updatedCart = cart.map(item => {
      if (item.name === product.name) {
        return product
      } else {
        item
      }
    })
    onUpdateCart(updatedCart);
    openPurchaseModal(false);
  }

  const handleCheckout = () => {
    setIsCheckout(true)
  }

  const handleGoBackFromCheckout = () => {
    setIsCheckout(false);
  }

  return (
    <Fragment>
      <Conditional condition={isCheckout}>
        <Checkout 
          cart={cart} 
          orders={orders}
          goBack={handleGoBackFromCheckout}
          onUpdateCart={onUpdateCart}
          onUpdateOrder={onUpdateOrder} />

        <Conditional condition={cart.length > 0}>
          <div className="cart">
            <div className="cart__heading">CART</div>
            <ul className="cart__items">
              {
                cart.map((product, index) => {
                  const { name, price, metrix, selectedPrice } = product;
                  return (
                    <li className="cart__item cart-item" key={index}>
                      <div className="cart-item__name">{name}</div>
                      <Button
                        label="Edit"
                        handleClick={() => handleEdit(product)}
                        customClass="button-primary"
                        className="cart-item__edit-cta" />
                      <div className="cart-item__price">
                        {`Rs ${price}  *  ${selectedPrice / price} ${metrix} =  Rs ${selectedPrice}`}
                      </div>
                      <Button
                        label="Remove"
                        handleClick={() => handleRemove(product)}
                        customClass="button-negative"
                        className="cart-item__remove-cta" />
                    </li>
                  )
                })
              }
            </ul>
            <Conditional condition={cart.length > 0}>
              <div className="cart__total">
                Total Purchase Price: Rs {cart.reduce(((acc, item) => acc = acc + Number(item.selectedPrice)), 0)}
              </div>
            </Conditional>
            <Button
              customClass="button-primary-large"
              className="cart__checkout-cta"
              label="Continue Checkout"
              handleClick={handleCheckout} />
          </div>
          <div className="cart__empty">
            Your Shopping Cart looks empty. Shop Now!
        </div>
        </Conditional>
      </Conditional>
      <PurchaseModal
        product={editableProduct}
        isOpen={isPurchaseModalOpen}
        handleClose={() => openPurchaseModal(false)}
        handlePurchaseModalAction={handleEditCartItem}
        purchaseModalActionLabel="Edit Cart Item" />
    </Fragment>
  )
}

const mapStateToProps = (state) => ({
  cart: cartSelector(state),
  orders: ordersSelector(state)
});

const mapDispatchToProps = (dispatch) => ({
  onUpdateCart: data => dispatch(updateCart(data)),
  onUpdateOrder: data => dispatch(updateOrder(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
