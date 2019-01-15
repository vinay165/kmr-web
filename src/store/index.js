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
        pricePerQuantity: 'Rs 330.00 / Litre'
      },
      {
        imgSrc: './src/stylesheets/images/organicgroundnutoil.png',
        name: 'Organic Sesame Oil',
        description: '',
        pricePerQuantity: 'Rs 500.00 / Litre'
      }
    ],
    bannerMessage: "We support Only Cash On Delivery and wil be coming soon with Online Payments. Apologize for any inconvenience."
  },
  pageData: {}
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
