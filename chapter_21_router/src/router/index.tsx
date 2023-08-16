import { RouteObject, createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import ProductsPage from "../pages/ProductsPage";
import RootLayout from "../pages/RootLayout";
import ErrorPage from "../pages/ErrorPage";
import Product from "../pages/Product";


const routerConfig: RouteObject[] = [
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <ProductsPage />,
      },
      {
        path: "/products/:productID",
        element: <Product />,
      },
    ],
  },
];

const router = createBrowserRouter(routerConfig);

export default router;
