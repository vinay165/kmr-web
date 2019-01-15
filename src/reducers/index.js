import actionTypes from '../actions/actionTypes';

export const appDataReducer = (state={}, action) => {
  switch(action.type){
    case actionTypes.UPDATE_PRODUCTS:
      return {...state, ...action.data};
    default:
      return state;
  }
}

export const pageDataReducer = (state={}, action) => {
  switch(action.type){
    // case actionTypes.UPDATE_PRODUCTS:
    //   return {...state, ...action.data};
    default:
      return state;
  }
}

const reducers = {
  appData: appDataReducer,
  pageData: pageDataReducer
}

export default reducers;