import { useRoutes } from "react-router-dom";
import { MainPage, UserList, AuthPage, UserDetail } from "../pages";

// import Applayout from "../layoutes/AppLayout";

const AppRoutes = () => {
  const routes = useRoutes([
    { path: "/", element: <AuthPage /> },
    { path: "/main", element: <MainPage /> },
    { path: "/user-list", element: <UserList /> },
    { path: "/user-list/:userName", element: <UserDetail /> },
  ]);
  return routes;
};

export default AppRoutes;
