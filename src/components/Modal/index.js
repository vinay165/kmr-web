import React from 'react';
import cn from 'classnames';
import Conditional from '../Conditional';
import ModalPortal from './ModalPortal';
import './index.scss';

const Modal = ({children, open, handleCloseModal}) => {
  return(
    <Conditional condition={open}>
      <ModalPortal>
        <div className="modal">
          <span className="icon-close" onClick={handleCloseModal} />
          {children}
        </div>
        <Conditional condition={open}>
          <div className={cn('backdrop', {'backdrop--open': open})} onClick={handleCloseModal} ></div>
        </Conditional>
      </ModalPortal>
    </Conditional>
  )
}

export default Modal;