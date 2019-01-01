import React from 'react';
import Modal from '../Modal';
import Nav from '../Nav';
import './index.scss';

const NavModal = ({open, handleNavClose}) => {
  return (
    <Modal open={open} handleCloseModal={handleNavClose} >
      <div className="nav-modal">
        <Nav handleCloseModal={handleNavClose} />
      </div>
    </Modal>
  )
}

export default NavModal;