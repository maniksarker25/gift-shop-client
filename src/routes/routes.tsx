import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import GiftInventory from "../pages/GiftInventory";
import AddGift from "../pages/AddGift";
import SaleHistory from "../pages/SaleHistory";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ProtectedRoute from "../components/layout/ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: (
          <ProtectedRoute requiredRoles={["manager", "seller"]}>
            <GiftInventory />
          </ProtectedRoute>
        ),
      },
      {
        path: "add-gift",
        element: (
          <ProtectedRoute requiredRoles={["seller"]}>
            <AddGift />
          </ProtectedRoute>
        ),
      },
      {
        path: "sale-history",
        element: <SaleHistory />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default router;
