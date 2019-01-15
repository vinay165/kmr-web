import 'babel-polyfill';
import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import './stylesheets/index.scss';
import getStore from './store';

const store = getStore();

const AppBootstrap = () => (
  <Provider store = {store}>
    <BrowserRouter>
      <Fragment>
        <App />
      </Fragment>
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(<AppBootstrap />, document.getElementById('root'));
