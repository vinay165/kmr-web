import actionTypes from './actionTypes';

export const updateProducts = (data) => {
  return {
    type: actionTypes.UPDATE_PRODUCTS,
    data: {'products': data}
  }
}

export const updateCart = (data) => {
  return {
    type: actionTypes.UPDATE_CART,
    data: {'cart': data}
  }
}
