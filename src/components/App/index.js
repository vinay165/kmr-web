import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bannerMessageSelector } from '../../selectors';
import Header from '../Header';
import Footer from '../Footer';
import Banner from '../Banner';
import ConfigureRoutes from '../../routes';
import './index.scss';
import Conditional from '../Conditional';

const App = ({bannerMessage}) => {
    return(
        <div className="app">
            <Header />
            <Conditional condition={bannerMessage !== ''}>
              <Banner bannerMessage={bannerMessage} />
            </Conditional>
            <div className="main">
              <ConfigureRoutes />
            </div>
            <Footer />
        </div>
    )
}

const mapStateToProps = (state) => ({
  bannerMessage: bannerMessageSelector(state)
})

export default withRouter(connect(mapStateToProps)(App));