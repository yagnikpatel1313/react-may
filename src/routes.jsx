import { lazy } from "react";


const Home = lazy(() => import("./home"));
const ForgotPassword = lazy(() => import("./Auth/ForgotPassword"));
const Login = lazy(() => import("./Auth/Login"));

const routes = [
  {
    path: "/",
    component: <Home />,
    exact: true
  },
  {
    path: "login",
    component: <Login />,
    exact: true
  },
  {
    path: "forgot-password",
    component: <ForgotPassword />,
    exact: true
  },

  
];


export default routes;
