import React, { Suspense } from "react";
import {routes} from './config/routing/routes';
import AppRoute from "./config/routing/AppRouting";
import { BrowserRouter as Router, Switch,Route } from "react-router-dom";
import {ErrorPageNotExist} from './pages/Errors/ErrorPageNotExist';
import {PageLoading} from './components/Loading/PageLoading';
import { StoreLoginProvider } from "./contexts/LoginContext";

function App() {
  return (
    <div className="App">
          <Suspense fallback={<PageLoading/>}>

     <Router>
     <StoreLoginProvider>
        <Switch>
          {routes.map(route => (
            <AppRoute
              key={route.path}
              exact  path={route.path}
              component={route.component}
              isPrivate={route.isPrivate}
            />
          ))}


          <Route component={ErrorPageNotExist} />

        </Switch>
        </StoreLoginProvider>
      </Router>
      </Suspense>
    </div>
  );
}

export default App;
