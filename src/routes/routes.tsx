import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import GiftInventory from "../pages/GiftInventory";
import AddGift from "../pages/AddGift";
import SaleHistory from "../pages/SaleHistory";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "gift-inventory",
        element: <GiftInventory />,
      },
      {
        path: "add-gift",
        element: <AddGift />,
      },
      {
        path: "sale-history",
        element: <SaleHistory />,
      },
    ],
  },
]);

export default router;
