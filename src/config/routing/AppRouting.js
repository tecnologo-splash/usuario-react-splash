import React from "react";
import { Route } from "react-router-dom";
import { NotLogin } from "../../pages/Errors/NotLoged";
import { getTokenSplash } from "../api/tokenLogin";

export default function AppRoute({
  component: Component,
  path,
  isPrivate,
  ...props
}) {
  const token = getTokenSplash() || '';
  
  
  return (
    <Route
      path={path}
      render={props =>
        isPrivate &&  token==='' ?  (
          
          <NotLogin/>

        ) : (
        <>     
       
           <Component {...props} />

          </>
        )
      }
      {...props}
    />
  );
}
