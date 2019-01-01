import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import ConfigureRoutes from '../../routes';
import './index.scss';

const App = () => {
    return(
        <div className="app">
            <Header />
            <div className="main">
              <ConfigureRoutes />
            </div>
            <Footer />
        </div>
    )
}

export default App;