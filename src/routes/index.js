import React, { Suspense, Fragment } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Loader from '../components/Loader';
import auth from '../services/auth';
import routes from './config';

const LazyComponent = (Component) => {
  return props => (
      <Suspense fallback={<Loader />}>
        <Component {...props} />
      </Suspense>
  )
}

const PrivateRoute = ({component: Component, ...rest}) => {
  return(
    <Route 
      {...rest}
      render={props => 
        auth.isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect 
            to={{
              pathname: "/login",
              state: { from: props.location}
            }}
          />
        )
      }
    />
  );
}

const ConfigureRoutes = () => {
  return (
    <Fragment>
      <Suspense fallback={<Loader />}>
        <Switch>
          {
            routes && routes.map(route => {
              const { path, component, displayName, rest, authProtected = false } = route;
              return authProtected ? (
                <PrivateRoute
                    exact
                    {...rest}
                    key={displayName}
                    path={path}
                    component={LazyComponent(component)} />
                ) : (
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