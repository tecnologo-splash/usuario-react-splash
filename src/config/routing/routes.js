import {pages} from "../../pages/Index";

export const routes = [
  {
    component: pages.Login,
    path: "/",
    isPrivate: false
  }, {
    component: pages.Home,
    path: "/home",
    isPrivate: true
  }
  
];
  
