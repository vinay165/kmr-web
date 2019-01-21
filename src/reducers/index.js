import actionTypes from '../actions/actionTypes';

export const appDataReducer = (state={}, action) => {
  switch(action.type){
    case actionTypes.UPDATE_PRODUCTS:
    case actionTypes.UPDATE_ORDER:
      return {...state, ...action.data};
    default:
      return state;
  }
}

export const appContextReducer = (state={}, action) => {
  switch(action.type){
    case actionTypes.UPDATE_CART:
      return {...state, ...action.data};
    default:
      return state;
  }
}

const reducers = {
  appData: appDataReducer,
  appContext: appContextReducer
}

export default reducers;