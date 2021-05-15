import {LOGIN_PATH,HOME_PATH,PROFILE_PATH,CONFIG_PATH} from "./path";
import {pages} from "../../pages/Index";

const LOGIN_ROUTE = {
    component: pages.Login,
    path: LOGIN_PATH,
    isPrivate: false
  };
  
  const HOME_ROUTE = {
    //component: views.ViewTwo,
    path: HOME_PATH,
    isPrivate: true
  };
  
  const PROFILE_ROUTE = {
   // component: views.ViewThree,
    path: PROFILE_PATH,
    isPrivate: true
  };
  
  const CONFIG_ROUTE = {
  //  component: views.PrivateView,
    path: CONFIG_PATH,
    isPrivate: true
  };

  export const routes=[LOGIN_ROUTE, HOME_ROUTE, PROFILE_ROUTE, CONFIG_ROUTE];
