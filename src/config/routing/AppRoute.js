import React from "react";
import { Route } from "react-router-dom";

export default function AppRoute({component: Component, path, isPrivate, ...props}) {

    const userIsLoggedIn=false;
  return (
    <Route
      exact path={path}
      render={props =>
        isPrivate && !userIsLoggedIn ? (
          <div>Por favor, inicia sesión</div>
        ) : (
          <Component {...props} />
        )
      }
      {...props}
    />
  );
}