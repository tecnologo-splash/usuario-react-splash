import { lazy } from "react";

const Login = lazy(() => import("./Login"));
const Home = lazy(() => import("./Home"));

export const pages=[Login,Home];
