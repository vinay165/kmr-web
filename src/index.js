import 'babel-polyfill';
import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
import './stylesheets/index.scss';
import { globalState } from './store';

globalState.setInitialState = { 
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
  ]
};

const AppBootstrap = () => (
    <BrowserRouter>
      <Fragment>
        <App />
      </Fragment>
    </BrowserRouter>
);

ReactDOM.render(<AppBootstrap />, document.getElementById('root'));
