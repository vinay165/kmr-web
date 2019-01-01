import React from 'react';
import { NavLink } from 'react-router-dom';
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
    path: "/login"
  }
];

const Nav = ({handleCloseModal}) => {
  const handleNavModalClose = () => {
    handleCloseModal ? handleCloseModal() : () => {}
  }

  return (
    <ul className="nav">
      {
        navConfig.map(navInfo => {
          const { path, displayName } = navInfo;
          return (
            <li className="nav__item" key={displayName} onClick={handleNavModalClose}>
              <NavLink to={path} activeClassName="header__nav-item--active">
                {displayName}
              </NavLink>
            </li>
          )
        })
      }
    </ul>
  )
}

export default Nav;