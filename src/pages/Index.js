import { lazy } from "react";

const Login = lazy(() => import("./Login"));

const Home = lazy(() => import("./Home"));

//const Perfil = lazy(() => import("./Profile"));

export const pages={Login,Home};
