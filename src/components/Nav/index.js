import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom';
import auth from '../../services/auth';
import Conditional from '../Conditional';
import Button from '../Button';
import { cartSelector } from '../../selectors';
import CartTagPortal from './CartTagPortal';
import cn from 'classnames';
import './index.scss';

const navConfig = [
  {
    displayName: "Home",
    path: "/"
  },
  {
    displayName: "Cart",
    path: "/cart",
    className: "nav__item-cart"
  },
  {
    displayName: "About Us",
    path: "/aboutUs"
  },
  {
    displayName: "Admin",
    path: "/admin"
  }, 
  {
    displayName: "Orders",
    path: "/orders",
    authProtected: true
  }
];

const Nav = ({handleCloseModal, history, totalCartItems}) => {
  const handleNavModalClose = () => {
    handleCloseModal ? handleCloseModal() : () => {}
  }

  const handleLogOut = () => {
    auth.signout();
    history.push("/");
  }

  return (
    <Fragment>
      <ul className="nav">
        {
          navConfig.map(navInfo => {
            const { path, displayName, authProtected, className } = navInfo;
            if(authProtected && auth.isAuthenticated || !authProtected){
              return (
                <li className={cn('nav__item', className)} key={displayName} onClick={handleNavModalClose}>
                  <NavLink to={path} activeClassName="header__nav-item--active">
                    {displayName}
                  </NavLink>
                </li>
              )
            }
          })
        }
        <Conditional condition={auth.isAuthenticated}>
          <li className="nav__item-logout">
            <Button 
              label="Log Out" 
              customClass="button-secondary"
              handleClick={handleLogOut} />
          </li>
        </Conditional>
      </ul>
      <Conditional condition={totalCartItems > 0}>
        <CartTagPortal>{totalCartItems}</CartTagPortal>
      </Conditional>
    </Fragment>
  )
}

const mapStateToProps = (state) => ({
  totalCartItems: cartSelector(state).length
});

export default withRouter(connect(mapStateToProps)(Nav));