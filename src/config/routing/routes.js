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
  },{
    component: pages.MiPerfil,
    path: "/home/mi-perfil/",
    isPrivate: true
  },{
    component: pages.Perfil,
    path: "/home/perfil/:id",
    isPrivate: true
  }
  
];
  
