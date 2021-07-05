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
  }
  ,{
    component: pages.PerfilAmigo,
    path: "/home/perfil/:id",
    isPrivate: true
  },{
    component: pages.Perfil,
    path: "/home/mi-perfil/amigos",
    isPrivate: true
  },{
    component: pages.Perfil,
    path: "/home/mi-perfil/yo-sigo",
    isPrivate: true
  }
  ,{
    component: pages.Chat,
    path: "/home/chat",
    isPrivate: true
  }
  ,{
    component: pages.Config,
    path: "/configuracion",
    isPrivate: true
  }
  ,{
    component: pages.Config,
    path: "/home/mi-perfil/:idPublicacion",
    isPrivate: true
  }
  ,{
    component: pages.AmigosSugeridos,
    path: "/home/amigos-sugeridos",
    isPrivate: true
  }
];
  
