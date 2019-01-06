import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import auth from '../../services/auth';
import Conditional from '../Conditional';
import Button from '../Button';
import './index.scss';

const navConfig = [
  {
    displayName: "Home",
    path: "/"
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

const Nav = ({handleCloseModal, history}) => {
  const handleNavModalClose = () => {
    handleCloseModal ? handleCloseModal() : () => {}
  }

  const handleLogOut = () => {
    auth.signout();
    history.push("/");
  }

  return (
    <ul className="nav">
      {
        navConfig.map(navInfo => {
          const { path, displayName, authProtected } = navInfo;
          if(authProtected && auth.isAuthenticated || !authProtected){
            return (
              <li className="nav__item" key={displayName} onClick={handleNavModalClose}>
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
  )
}

export default withRouter(Nav);