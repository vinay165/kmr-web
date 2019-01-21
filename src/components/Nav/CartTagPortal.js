import { useEffect } from 'react';
import ReactDOM from 'react-dom';

const CartTagPortal = (props) => {
  const navItemCartRoot = document.getElementsByClassName('nav__item-cart')[0];
  const el = document.createElement('span');
  el.classList.add("cart-tag");
  
  useEffect(() => {
    navItemCartRoot && navItemCartRoot.appendChild(el);
    return () => {
      navItemCartRoot && navItemCartRoot.removeChild(el);
    }
  })

  return ReactDOM.createPortal(
    props.children,
    el
  )
}

export default CartTagPortal;