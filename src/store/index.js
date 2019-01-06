import { useState } from 'react';

 export const globalState = {
  globalAppState: {},

  get getState(){
    return this.globalAppState;
  },

  set setState(stateObj) {
    this.globalAppState = stateObj;
  }, 

  set setInitialState(stateObj) {
    this.globalAppState = stateObj;
  } 
}

export const useReducer = () => {
  const [state, setState] = useState(globalState.getState);

  const dispatch = (data = {}) => {
    setState({...state, ...data});
  }

  globalState.setState = state;
  return [state, dispatch];
}
