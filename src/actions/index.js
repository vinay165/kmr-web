import actionTypes from './actionTypes';

export const updateProducts = (data) => {
  return {
    type: actionTypes.UPDATE_PRODUCTS,
    data
  }
}