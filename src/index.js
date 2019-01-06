import 'babel-polyfill';
import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
import './stylesheets/index.scss';
import { globalState } from './store';

globalState.setInitialState = { 
  products: ['Product 1', 'Product 2']
};

const AppBootstrap = () => (
    <BrowserRouter>
      <Fragment>
        <App />
      </Fragment>
    </BrowserRouter>
);

ReactDOM.render(<AppBootstrap />, document.getElementById('root'));
