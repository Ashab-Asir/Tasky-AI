import RootLayout from "@/layouts/RootLayout";
import HomePage from "@/pages/HomePage";
import LoginPage from "@/pages/LoginPage";
import RegisterPage from "@/pages/RegisterPage";
import RootErrorBoundary from "@/pages/RootErrorBoundary";
import { createBrowserRouter } from "react-router-dom";
import type { RouteObject } from "react-router-dom";
import AuthSyncPage from "../pages/AuthSyncPage";
import AppLayout from "@/layouts/AppLayout";
import InboxPage from "@/pages/InboxPage";
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
const appRouteChildren: RouteObject[] = [
  {
    path: "inbox",
    element: <InboxPage></InboxPage>,
  },
];
const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <RootErrorBoundary></RootErrorBoundary>,
    element: <RootLayout></RootLayout>,
    children: rootRouteChildren,
  },
  {
    path: "app",
    element: <AppLayout></AppLayout>,
    children: appRouteChildren,
  },
]);
export default router;
