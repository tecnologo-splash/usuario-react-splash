import { lazy } from "react";

const Login = lazy(() => import("./Login"));

const Home = lazy(() => import("./Home"));

const MiPerfil = lazy(() => import("./Perfil"));

const PerfilAmigo = lazy(() => import("./PerfilAmigo"));

const Chat = lazy(() => import("./Chat"));

const Config = lazy(() => import("./Config"));

export const pages={Login,Home,MiPerfil,PerfilAmigo,Chat,Config};
