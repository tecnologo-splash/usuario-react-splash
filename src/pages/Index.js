import { lazy } from "react";

const Login = lazy(() => import("./Login"));

const Home = lazy(() => import("./Home"));

const MiPerfil = lazy(() => import("./Perfil"));

const Perfil = lazy(() => import("./Perfil"));


export const pages={Login,Home,MiPerfil,Perfil};
