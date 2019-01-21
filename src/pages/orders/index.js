import React from 'react';
import { connect } from 'react-redux';
import { ordersSelector } from '../../selectors';
import './index.scss';

const Orders = ({ orders }) => {
  return (
    <div className="orders">
      <div className="orders__heading">
        Orders
      </div>

      <ul className="orders__list">
        {
          orders.map((order, index) => {
            const { firstName, lastName, contact, email, addressLine1, addressLine2, addressLine3, cart } = order;
            return (
              <li className="order" key={index}>
                <div className="order__info">
                  <div>First Name: </div>
                  <div className="order__firstname">{firstName}</div>
                  <div>Last Name: </div>
                  <div className="order__lastname">{lastName}</div>
                  <div>Contact: </div>
                  <div className="order__contact">{contact}</div>
                  <div>Email: </div>
                  <div className="order__email">{email}</div>
                  <div>Address: </div>
                  <div className="order__addressLine1">{addressLine1}</div>
                  <div className="order__addressLine2">{addressLine2}</div>
                  <div className="order__addressLine3">{addressLine3}</div>
                </div>

                <div className="order__cart">
                  {
                    cart.map((product, ind) => {
                      const { name, price, metrix, selectedPrice } = product;
                      return (
                        <div key={ind} className="order__item">
                          <div className="order-item__name">{name}</div>
                          <div className="order-item__price">
                            {`Rs ${price}  *  ${selectedPrice / price} ${metrix} =  Rs ${selectedPrice}`}
                          </div>
                        </div>
                      )
                    })
                  }
                  <div className="order__total">
                    Total Purchase Price: Rs {cart.reduce(((acc, item) => acc = acc + Number(item.selectedPrice)), 0)}
                  </div>
                </div>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

const mapStateToProps = (state) => ({
  orders: ordersSelector(state)
});

export default connect(mapStateToProps)(Orders);
