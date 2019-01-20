import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { cartSelector } from '../../selectors';
import { updateCart } from '../../actions';
import Button from '../../components/Button';
import PurchaseModal from '../../components/PurchaseModal';
import Conditional from '../../components/Conditional';
import './index.scss';

const Cart = ({ cart, onUpdateCart }) => {
  const [isPurchaseModalOpen, openPurchaseModal] = useState(false);
  const [editableProduct, setEditableProduct] = useState({});
 
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
      if(item.name === product.name){
        return product
      } else {
        item
      }
    })
    onUpdateCart(updatedCart);
    openPurchaseModal(false);
  }

  return (
    <Fragment>
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
                      handleClick={()=>handleEdit(product)}
                      customClass="button-primary"
                      className="cart-item__edit-cta" />
                    <div className="cart-item__price">{`Rs ${price}  *  ${selectedPrice / price} ${metrix} =  Rs ${selectedPrice}`}</div>
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
              { cart.reduce( ((item, acc) => acc = acc + item.selectedPrice), 0) } 
            </div>
          </Conditional>
        </div>
        <div className="cart__empty">
          Your Shopping Cart looks empty. Shop Now!
      </div>
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
  cart: cartSelector(state)
});

const mapDispatchToProps = (dispatch) => ({
  onUpdateCart: data => dispatch(updateCart(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
