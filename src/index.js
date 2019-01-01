import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
import './stylesheets/index.scss';

const AppBootstrap = () => (
    <BrowserRouter>
      <App />
    </BrowserRouter>
);

ReactDOM.render(<AppBootstrap />, document.getElementById('root'));
