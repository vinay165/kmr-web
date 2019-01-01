import React, { Fragment, useState } from 'react';
import Nav from '../Nav';
import './index.scss';
import NavModal from '../NavModal';

const Header = () => {
  const [navModalState, setNavModalState] = useState(false);

  const handleToggleMenu = () => {
    setNavModalState(!navModalState);
  }

  const handleNavClose = () => {
    setNavModalState(false);
  }

  return (
    <Fragment>
      <div className="header">
        <div className="header__branding">
          KMR
      </div>
        <div className="header__nav-ls">
          <Nav />
        </div>
        <div className="header__nav" onClick={handleToggleMenu} >
          <span className="icon-menu" />
        </div>
      </div>
      <NavModal open={navModalState} handleNavClose={handleNavClose} />
    </Fragment>
  )
}

export default Header;