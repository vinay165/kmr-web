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
    bannerMessage: "We currently support Cash On Delivery Only. Will be coming soon with Online Payments. Apologize for any inconvenience.",
    // orders: [
    //   {
    //     firstName: "Vinay Reddy",
    //     lastName: "Kamreddy",
    //     contact: "999999999",
    //     email: "vinayreddy165@gmail.com",
    //     addressLine1: "Bommakal",
    //     addressLine2: "Bomm",
    //     addressLine3: "Karimnagar, Telangana",
    //     cart:[{
    //       imgSrc: "./src/stylesheets/images/organicgroundnutoil.png",
    //       name: "Organic Groundnut Oil",
    //       description: "",
    //       price: "330.00",
    //       minQuantity: 3,
    //       metrix: "Litre",
    //       selectedPrice: 330
    //     },
    //     {
    //       imgSrc: "./src/stylesheets/images/organicgroundnutoil.png",
    //       name: "Organic Groundnut Oil",
    //       description: "",
    //       price: "330.00",
    //       minQuantity: 3,
    //       metrix: "Litre",
    //       selectedPrice: 330
    //     }]
    //   }
    // ]
  },
  appContext: {
    // cart:[{
    //   imgSrc: "./src/stylesheets/images/organicgroundnutoil.png",
    //   name: "Organic Groundnut Oil",
    //   description: "",
    //   price: "330.00",
    //   minQuantity: 3,
    //   metrix: "Litre",
    //   selectedPrice: 330
    // }]
  }
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
