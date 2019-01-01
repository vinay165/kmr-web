import React, { Suspense, Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Loader from '../components/Loader'
import routes from './config';

const LazyComponent = (Component) => {
  return props => (
      <Suspense fallback={<Loader />}>
        <Component {...props} />
      </Suspense>
  )
}
const ConfigureRoutes = () => {
  return (
    <Fragment>
      <Suspense fallback={<Loader />}>
        <Switch>
          {
            routes && routes.map(route => {
              const { path, component, displayName, rest } = route;
              return (
                <Route
                  exact
                  {...rest}
                  key={displayName}
                  path={path}
                  component={LazyComponent(component)} />
              )
            })
          }
        </Switch>
      </Suspense>
    </Fragment>
  );
}

export default ConfigureRoutes;