import RootLayout from "@/layouts/RootLayout";
import HomePage from "@/pages/HomePage";
import LoginPage from "@/pages/LoginPage";
import RegisterPage from "@/pages/RegisterPage";
import RootErrorBoundary from "@/pages/RootErrorBoundary";
import { createBrowserRouter } from "react-router-dom";
import type { RouteObject } from "react-router-dom";
import AuthSyncPage from "./../pages/AuthSyncPage";
const rootRouteChildren: RouteObject[] = [
  {
    index: true,
    element: <HomePage></HomePage>,
  },
  {
    path: "register",
    element: <RegisterPage></RegisterPage>,
  },
  {
    path: "login",
    element: <LoginPage></LoginPage>,
  },
  {
    path: "auth-sync",
    element: <AuthSyncPage></AuthSyncPage>,
  },
];
const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <RootErrorBoundary></RootErrorBoundary>,
    element: <RootLayout></RootLayout>,
    children: rootRouteChildren,
  },
]);
export default router;
