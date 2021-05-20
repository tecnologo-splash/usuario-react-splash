import {LOGIN_PATH,HOME_PATH} from "./path";
import {pages} from "../../pages/Index";

const LOGIN_ROUTE = {
    component: pages.Login,
    path: LOGIN_PATH,
    isPrivate: false
  };
  
  const HOME_ROUTE = {
    component: pages.Home,
    path: HOME_PATH,
    isPrivate: true
  };
  

  export const routes=[LOGIN_ROUTE, HOME_ROUTE];
