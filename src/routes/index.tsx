import RootLayout from "@/layouts/RootLayout";
import HomePage from "@/pages/HomePage";
import RootErrorBoundary from "@/pages/RootErrorBoundary";
import { createBrowserRouter } from "react-router-dom";
import type { RouteObject } from "react-router-dom";
const rootRouteChildren: RouteObject[] = [
  {
    index: true,
    element: <HomePage></HomePage>,
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
