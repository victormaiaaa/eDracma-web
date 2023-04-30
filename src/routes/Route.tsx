/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import { usePageContext } from '../hooks';

interface IProps extends RouteProps {
  isPrivate?: boolean;
  component: React.FC<any>;
}

const RouteWrapper: React.FC<IProps> = ({
  component: Component,
  isPrivate,
  ...rest
}) => {
  const { isLogged } = usePageContext();

  if (!isLogged && isPrivate) {
    return <Redirect to="/" />;
  }

  return <Route {...rest} render={props => <Component {...props} />} />;
};

RouteWrapper.defaultProps = {
  isPrivate: false,
};

export default RouteWrapper;
