import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
// import createSagaMiddleware from 'redux-saga';
import reducers from '../reducers';
// import rootSaga from '../sagas';

const initialState = {
  appData: {
    products: [
      {
        imgSrc: './src/stylesheets/images/organicgroundnutoil.png',
        name: 'Organic Groundnut Oil',
        description: '',
        price: '330.00',
        minQuantity: 3,
        metrix: 'Litre'
      },
      {
        imgSrc: './src/stylesheets/images/organicgroundnutoil.png',
        name: 'Organic Sesame Oil',
        description: '',
        price: '500.00',
        minQuantity: 1,
        maxQuantity: 100,
        metrix: 'Litre'
      }
    ],
    bannerMessage: "We currently support Cash On Delivery Only. Will be coming soon with Online Payments. Apologize for any inconvenience."
  },
  appContext: {}
};

const getStore = () => {
  // const sagaMiddleware = createSagaMiddleware();
  const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const middleware = [];
  // middleware.push(sagaMiddleware);

  const store = createStore(
    combineReducers({ ...reducers }),
    initialState,
    composeEnhancer(applyMiddleware(...middleware))
  );

  // sagaMiddleware.run(rootSaga);

  return store;
}

export default getStore;
