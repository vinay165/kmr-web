import React, { useState } from 'react';
import './index.scss';
import Input from '../Input';
import Button from '../Button';
import Conditional from '../Conditional';

const Checkout = ({ cart, goBack, onUpdateCart, onUpdateOrder, orders }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [addressLine1, setAddressLine1] = useState('');
  const [addressLine2, setAddressLine2] = useState('');
  const [contact, setContact] = useState('');
  const [email, setEmail] = useState('');
  const [confirm, setConfirm] = useState(false);

  const handleConfirmAndFinish = () => {
    const order = {
      firstName,
      lastName,
      contact,
      email,
      addressLine1,
      addressLine2,
      addressLine3: "Karimnagar, Telangana",
      cart
    };
    // orders is used here to complete the UI functionality, 
    // but eventually it will be removed once Services are setup.
    // onUpdateOrder will then take only 1 order object instead of an array.
    const updatedOrder = [...orders, order];
    onUpdateOrder(updatedOrder);

    setConfirm(true);
    onUpdateCart([]);
  }

  const isConfirmCTADisabled = () => (
    firstName === '' || lastName === '' || contact === '' ||
    email === '' || addressLine1 === ''
  );

  return (
    <Conditional condition={confirm}>
      <div className="confirmation">
        <div>Your order has been successfully placed. </div>
        <div>You will recieve an Email confirmation shortly. </div>
        <div>Thank you and Visit again. </div>
      </div>

      <div className="checkout">
        <div className="checkout__heading">
          Checkout
        </div>

        <div className="shipping-address">
          <div className="shipping-address__heading">
            Enter Your Shipping Address
          </div>
          <div className="shipping-address__subheading">
            We deliver within 10km radius from our location.
          </div>

          <form className="ship-form">
            <div>First Name: </div>
            <Input
              value={firstName}
              handleChange={(val) => { setFirstName(val) }} />

            <div>Last Name: </div>
            <Input
              value={lastName}
              handleChange={(val) => { setLastName(val) }} />

            <div>Address Line 1: </div>
            <Input
              value={addressLine1}
              handleChange={(val) => { setAddressLine1(val) }} />

            <div>Address Line 2: </div>
            <Input
              value={addressLine2}
              handleChange={(val) => { setAddressLine2(val) }} />

            <div>Contact: </div>
            <Input
              type="number"
              value={contact}
              handleChange={(val) => { setContact(val) }} />

            <div>Email: </div>
            <Input
              type="email"
              value={email}
              handleChange={(val) => { setEmail(val) }} />

            <div>City: </div>
            <div>Karimnagar</div>

            <div>State: </div>
            <div>Telangana</div>
          </form>
        </div>

        <div className="checkout-orders">
          <div className="checkout-orders__heading">Your Orders: </div>
          <ul className="checkout__items">
            {
              cart.map((product, index) => {
                const { name, price, metrix, selectedPrice } = product;
                return (
                  <li className="checkout__item checkout-item" key={index}>
                    <div className="checkout-item__name">{name}</div>
                    <div className="checkout-item__price">
                      {`Rs ${price}  *  ${selectedPrice / price} ${metrix} =  Rs ${selectedPrice}`}
                    </div>
                  </li>
                )
              })
            }
          </ul>
          <Conditional condition={cart.length > 0}>
            <div className="checkout__total">
              Total Purchase Price: Rs {cart.reduce(((acc, item) => acc = acc + Number(item.selectedPrice)), 0)}
            </div>
          </Conditional>
        </div>

        <Button
          customClass="button-secondary-large"
          className="checkout__goback-cta"
          label="Go Back"
          handleClick={goBack} />
        <Button
          customClass="button-primary-large"
          className="checkout__goback-cta"
          label="Confirm and Finish"
          isDisabled={isConfirmCTADisabled()}
          handleClick={handleConfirmAndFinish} />
      </div>
    </Conditional>
  )
}

export default Checkout;