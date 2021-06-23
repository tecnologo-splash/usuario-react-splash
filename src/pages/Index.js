import { lazy } from "react";

const Login = lazy(() => import("./Login"));

const Home = lazy(() => import("./Home"));

const MiPerfil = lazy(() => import("./Perfil"));

const PerfilAmigo = lazy(() => import("./PerfilAmigo"));


export const pages={Login,Home,MiPerfil,PerfilAmigo};
