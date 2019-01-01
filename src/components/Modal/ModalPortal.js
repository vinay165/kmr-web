import { useEffect } from 'react';
import ReactDOM from 'react-dom';


const ModalPortal = (props) => {
  const modalRoot = document.getElementById('modal-root');
  const el = document.createElement('div');
  
  useEffect(() => {
    modalRoot.appendChild(el);
    return () => {
      modalRoot.removeChild(el)
    }
  })

  return ReactDOM.createPortal(
    props.children,
    el
  )
}

export default ModalPortal;