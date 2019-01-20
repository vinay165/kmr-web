import React, { useState, useEffect } from 'react';
import Modal from '../Modal';
import Button from '../Button';
import Conditional from '../Conditional';
import './index.scss';

const PurchaseModal = ({product, isOpen, handleClose, handlePurchaseModalAction, purchaseModalActionLabel}) => {
  const [ selectedProductPrice, setSelectedProductPrice ] = useState('');
  const [ selectedQuantity, setSelectedQuantity ] = useState('');
  
  const { name, price, selectedPrice, minQuantity, maxQuantity} = product;

  useEffect(()=>{
    if(selectedPrice){
      setSelectedQuantity(selectedPrice/price);
      setSelectedProductPrice(selectedPrice);  
    }
  }, [selectedPrice]);

  const handlePriceForQuantity = (e) => {
    const quantity = e.target.value;
    setSelectedQuantity(quantity)
    setSelectedProductPrice(quantity * price);
  }

  const onUpdateCartItem = () => {
    const cartProduct = {
      ...product,
      selectedPrice: selectedProductPrice
    }
    handlePurchaseModalAction(cartProduct);
    setSelectedQuantity('');
    setSelectedProductPrice('');
  }

  const handlePurchaseModalClose = () => {
    setSelectedQuantity('');
    setSelectedProductPrice('');
    handleClose();
  }

  return (
    <Modal open={isOpen} handleCloseModal={handlePurchaseModalClose} customClass="modal--center" >
      <div className="purchase-modal">
        <div>Choose quantity for your selected product.</div>
        <div className="purchase-modal__product-name">{name}</div>
        <input 
          value={selectedQuantity}
          className="purchase-modal__product-quantity" 
          type="number"
          onChange={handlePriceForQuantity} />
        <Conditional condition={selectedProductPrice}>
          <div className="purchase-modal__product-price">{`Rs ${selectedProductPrice}`}</div>
          <div> -- </div>
        </Conditional>
        <Button 
          customClass="button-positive"
          className="purchase-modal__cta"
          label={purchaseModalActionLabel}
          handleClick={onUpdateCartItem} />
      </div>
    </Modal>
  )
}

export default PurchaseModal;