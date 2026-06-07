import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/home/home.jsx";
import Cart from "./pages/cart/cart.jsx";
import DetailProduct from "./pages/detail-product/detail-product.jsx";
import Checkout from "./pages/checkout/checkout.jsx";
import Profile from "./pages/profile/profile.jsx";
import Favorite from "./pages/favorite/favorite.jsx";
import Coba from "./pages/coba.jsx";
import HistoryOrder from "./pages/history-order/history-order.jsx";
import DetailOrder from "./pages/deatail-order/detail-order.jsx";
import EditProfile from "./pages/profile/edit-profile.jsx";
import OrderSuccess from "./pages/order-success/order-success.jsx";
import EditEmail from "./pages/profile/edit-email.jsx";
import EditPassword from "./pages/profile/edit-password.jsx";
import AllProduct from "./pages/all-products/all-product.jsx";
import ProductDisc from "./pages/product-disc/product-dics.jsx";
import Regist from "./pages/masuk/regist.jsx";
import Login from "./pages/masuk/login.jsx";
import { AddToCartProvider } from "./context/add-to-card-provider.jsx";

const router = createBrowserRouter([
  {
    path: "/regist",
    element: <Regist />,
  },

  {
    path: "/login",
    element: <Login />,
  },

  {
    path: "/",
    element: <Home />,
  },

  {
    path: "/profile",
    element: <Profile />,
  },

  {
    path: "/cart",
    element: <Cart />,
  },

  {
    path: "/product/:id",
    element: <DetailProduct />,
  },

  {
    path: "/checkout",
    element: <Checkout />,
  },

  {
    path: "/favorite",
    element: <Favorite />,
  },

  {
    path: "/historyOrder",
    element: <HistoryOrder />,
  },

  {
    path: "/detailOrder",
    element: <DetailOrder />,
  },

  {
    path: "/editProfile",
    element: <EditProfile />,
  },

  {
    path: "/orderSuccess",
    element: <OrderSuccess />,
  },

  {
    path: "/editEmail",
    element: <EditEmail />,
  },

  {
    path: "/editPassword",
    element: <EditPassword />,
  },

  {
    path: "/allProduct",
    element: <AllProduct />,
  },

  {
    path: "/productDisc",
    element: <ProductDisc />,
  },

  {
    path: "/coba",
    element: <Coba />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AddToCartProvider>
      <RouterProvider router={router} />
    </AddToCartProvider>
  </StrictMode>,
);
